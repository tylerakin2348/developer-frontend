type PortfolioDetailPageProps = {
  params: {
    slug: string;
  };
};

function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] text-brand-800">{title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Detailed portfolio content will be added soon. Check back for a full breakdown of goals,
          process, technology, and impact.
        </p>
      </div>
    </section>
  );
}

export default PortfolioDetailPage;

