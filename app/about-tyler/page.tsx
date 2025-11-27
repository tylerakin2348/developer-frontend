'use client';

import { motion } from 'framer-motion';
import PageTitle from '../../components/PageTitle';

function AboutPage() {
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
        <PageTitle name="A developer at heart" />
        <p className="text-lg leading-relaxed text-slate-700">
          A development porfolio site by Tyler Akin, a software engineer from Louisville, Kentucky.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutPage;

