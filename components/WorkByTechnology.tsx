'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const WORK_MENU_ITEMS = [
  {
    href: '/work/technology',
    label: 'By Technology'
  },
  {
    href: '/work/portfolio',
    label: 'Portfolio'
  }
] as const;

function isWorkActive(pathname: string, href: string) {
  if (href === '/work/portfolio') {
    return pathname === href || pathname.startsWith('/work/portfolio/');
  }

  return pathname === href;
}

function WorkByTechnology() {
  const pathname = usePathname() ?? '/work';
  const linkBase =
    'group flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/0 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition-all hover:border-brand-300 hover:bg-brand-400/20 hover:text-white';

  return (
    <nav className="w-full">
      <motion.div
        className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
        initial={{ opacity: 0, transform: 'translate(0%,-100%)' }}
        animate={{ opacity: 1, transform: 'translate(0%,0%)' }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 }
        }}
      >
        <ul className="flex list-none flex-col gap-3 p-0 md:flex-row md:gap-4">
          {WORK_MENU_ITEMS.map((item) => {
            const isActive = isWorkActive(pathname, item.href);

            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={`${linkBase}${
                    isActive ? ' border-brand-300 bg-brand-500/20 text-white shadow-lg' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}

export default WorkByTechnology;

