'use client';

import Link from 'next/link';

type MainMenuProps = {
  activePath: string;
};

const MENU_ITEMS = [
  {
    href: '/about-tyler',
    label: 'About Tyler',
    image: '/aboutphoto.jpg',
    alt: 'About Tyler'
  },
  {
    href: '/work',
    label: 'My Work',
    image: '/computer.jpg',
    alt: 'My work'
  },
  {
    href: '/contact',
    label: 'Contact Me',
    image: '/coffee.jpg',
    alt: 'Contact'
  }
] as const;

function isActivePath(activePath: string, href: string) {
  if (href === '/') {
    return activePath === '/';
  }

  if (href === '/work') {
    return activePath === '/work' || activePath.startsWith('/work/');
  }

  return activePath === href;
}

function MainMenu({ activePath }: MainMenuProps) {
  const linkBase =
    'group relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg';

  return (
    <nav className="w-full">
      <ul className="grid gap-6 md:grid-cols-3">
        {MENU_ITEMS.map((item) => {
          const isActive = isActivePath(activePath, item.href);

          return (
            <li key={item.href} className="list-none">
              <div
                className={`${linkBase}${
                  isActive ? ' border-brand-300 bg-brand-50 text-brand-800 shadow-lg' : ''
                }`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={item.alt}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-700/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                    {isActive ? 'Current' : 'Explore'}
                  </span>
                </div>
                <Link
                  href={item.href}
                  className="flex flex-1 flex-col gap-2 px-6 py-5 text-left uppercase tracking-[0.25em] text-slate-800 transition-colors group-hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainMenu;

