'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type PortfolioItem = {
  slug: string;
  name: string;
  workType: string;
  image: string;
  alt: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: 'audubon-baptist',
    name: 'Audubon Baptist Church',
    workType: 'Freelance',
    image: '/audubon-sanctuary.png',
    alt: 'Audubon Baptist Church sanctuary'
  },
  {
    slug: 'ker',
    name: 'Kentucky Equine Research',
    workType: 'Agency',
    image: '/ker-horse.png',
    alt: 'Kentucky Equine Research immersive imagery'
  },
  {
    slug: 'legacy-food-and-feeds',
    name: 'Legacy Food and Feeds',
    workType: 'Freelance',
    image: '/wheat-field.png',
    alt: 'Midwestern wheat field at sunset'
  },
  {
    slug: 'kao-collins',
    name: 'Kao Collins Inc',
    workType: 'Agency',
    image: '/kao-ink.png',
    alt: 'Kao Collins ink bottles'
  },
  {
    slug: 'zeon-chemicals',
    name: 'Zeon Chemicals',
    workType: 'Agency',
    image: '/zeon-chemicals-road.png',
    alt: 'Zeon Chemicals facility'
  },
  {
    slug: 'health-connection',
    name: 'A Health Connection',
    workType: 'Freelance',
    image: '/oils.jpg',
    alt: 'Essential oils on a tabletop'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
      velocity: 2
    }
  }
};

const item = {
  hidden: { opacity: 0, transform: 'translate(0%,-100%)' },
  show: { opacity: 1, transform: 'translate(0%,0%)' }
};

function PortfolioMenu() {
  return (
    <div className="w-full">
      <nav>
        <motion.ul
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {PORTFOLIO_ITEMS.map((entry) => (
            <motion.li
              key={entry.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              variants={item}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={entry.image}
                  alt={entry.alt}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-700/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  {entry.workType}
                </span>
              </div>
              <Link
                href={`/work/portfolio/${entry.slug}`}
                className="flex flex-1 flex-col justify-between gap-3 px-6 py-5 text-left text-slate-800 transition-colors group-hover:text-brand-700"
              >
                <span className="text-lg font-semibold uppercase tracking-[0.2em]">
                  {entry.name}
                </span>
                <span className="text-sm text-slate-500">View project details</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}

export default PortfolioMenu;

