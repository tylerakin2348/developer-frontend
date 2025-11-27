'use client';

const PRIMARY_NAV_ITEMS = [
  {
    href: '#home',
    label: 'Home'
  },
  {
    href: '#about',
    label: 'About'
  },
  {
    href: '#technology',
    label: 'Technology'
  },
  {
    href: '#contact',
    label: 'Contact'
  }
] as const;

function Header() {
  const navLinkBase =
    'relative inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-100 transition-all after:absolute after:left-0 after:h-0.5 after:w-full after:bg-slate-100/90 after:opacity-0 after:-bottom-3 after:content-[""] after:transition-all after:duration-300 hover:text-white hover:after:-bottom-2 hover:after:opacity-100';

  return (
    <header className="w-full border-b border-white/10 bg-brand-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-2xl font-semibold uppercase tracking-[0.32em] text-white">
          <a href="#home">Tyler Akin</a>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap items-center justify-start gap-4 text-white md:justify-end">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <li key={item.href} className="list-none">
                <a href={item.href} className={navLinkBase}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

