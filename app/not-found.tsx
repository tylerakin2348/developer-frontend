import Link from 'next/link';

function NotFoundPage() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold uppercase tracking-[0.25em] text-brand-800">
          Page not found
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-600">
          The page you are looking for does not exist or has moved. Let&apos;s get you back to the
          homepage.
        </p>
        <Link
          href="/"
          className="inline-flex min-w-[12rem] items-center justify-center rounded-full border border-brand-400 bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;

