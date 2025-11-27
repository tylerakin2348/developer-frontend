'use client';

import { motion } from 'framer-motion';
import PageTitle from '../../../components/PageTitle';
import PortfolioMenu from '../../../components/PortfolioMenu';

function PortfolioPage() {
  return (
    <section className="bg-white text-slate-900">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8 lg:py-20"
        initial={{ opacity: 0, transform: 'translate(0%,-100%)' }}
        animate={{ opacity: 1, transform: 'translate(0%,0%)' }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 }
        }}
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-slate-700">
          <PageTitle name="Work. Done." />
          <p className="text-lg leading-relaxed">
            Learn more about projects I have worked on during my career. Highlights from agencies,
            freelance collaborations, and personal initiatives live here.
          </p>
          <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">
            Detailed case studies are coming soon. In the meantime, browse the quick hits below.
          </p>
        </div>
        <PortfolioMenu />
      </motion.div>
    </section>
  );
}

export default PortfolioPage;

