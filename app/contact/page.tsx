'use client';

import { motion } from 'framer-motion';
import PageTitle from '../../components/PageTitle';

function ContactPage() {
  return (
    <section className="bg-white text-slate-900">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16 lg:px-8 lg:py-20"
        initial={{ opacity: 0, transform: 'translate(0%,-100%)' }}
        animate={{ opacity: 1, transform: 'translate(0%,0%)' }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 }
        }}
      >
        <PageTitle name="Contact" />
        <p className="text-lg leading-relaxed text-slate-700">
          Contact me for more information about my work and how it can intersect your needs. I love
          learning about new project ideas.
        </p>

        <dl className="grid gap-4 text-base text-slate-800 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Phone</dt>
            <dd>
              <a
                className="mt-1 inline-flex items-center text-lg font-medium text-brand-700 transition-colors hover:text-brand-500"
                href="tel:+15026459250"
              >
                (502) 645 9250
              </a>
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Email</dt>
            <dd>
              <a
                className="mt-1 inline-flex items-center text-lg font-medium text-brand-700 transition-colors hover:text-brand-500"
                href="mailto:tylerakinmwc@gmail.com"
              >
                tylerakinmwc@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}

export default ContactPage;

