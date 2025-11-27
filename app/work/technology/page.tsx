'use client';

import { motion } from 'framer-motion';

const TECHNOLOGY_SECTIONS = [
  {
    title: 'Languages and Frameworks',
    items: ['Laravel', 'React', 'Vue','HTML5', 'CSS3', 'SCSS', 'PHP7', 'JavaScript', 'jQuery', 'React', 'Vue']
  },
  {
    title: 'Platforms and CMS',
    items: ['WordPress', 'Shopify', 'PrestaShop']
  },
  {
    title: 'Design and Visual',
    items: [
      'Illustrator',
      'Photoshop',
      'Affinity Designer',
      'Affinity Photo',
      'Premiere Pro',
      'After Effects'
    ]
  },
  {
    title: 'Accessibility',
    items: ['WCAG 2.0', 'WCAG 2.1', 'ADA', 'Section 508']
  }
] as const;

function TechnologyPage() {
  return (
    <section className="bg-white text-slate-900">
      <motion.div
        className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20"
        initial={{ opacity: 0, transform: 'translate(0%,-100%)' }}
        animate={{ opacity: 1, transform: 'translate(0%,0%)' }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 }
        }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          {TECHNOLOGY_SECTIONS.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-brand-800">
                {section.title}
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:text-base">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechnologyPage;

