function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-brand-950 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm leading-relaxed text-slate-200">
        <p className="font-medium uppercase tracking-[0.25em] text-slate-100">
          Built in Louisville, Kentucky.
        </p>
        <p className="mt-2 text-xs text-slate-300">
          © {currentYear} Tyler Akin. All Rights Reserved. a{' '}
          <a
            className="font-semibold text-white underline-offset-4 transition-colors hover:text-brand-200 hover:underline"
            href="https://tylerakin.com"
          >
            tylerakin.com
          </a>{' '}
          site.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

