import PageTitle from '../components/PageTitle';

const TECHNOLOGY_SECTIONS = [
  {
    title: 'Languages And Frameworks',
    items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue']
  },
  {
    title: 'Platforms And CMS',
    items: ['WordPress', 'Shopify', 'PrestaShop']
  },
  {
    title: 'Design And Visual',
    items: ['Illustrator', 'Photoshop', 'Affinity Designer', 'Affinity Photo', 'Premiere Pro']
  },
  {
    title: 'Accessibility',
    items: ['WCAG 2.0', 'WCAG 2.1', 'ADA', 'Section 508']
  }
] as const;

function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10, 15, 28, 0.65), rgba(10, 15, 28, 0.85)), url('/home-banner3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-100">
            Software Engineer · Contractor
          </p>
          <h1 className="text-4xl font-bold uppercase tracking-[0.3em] sm:text-5xl md:text-6xl">
            Tyler Akin
          </h1>
          {/* <p className="text-base font-light leading-relaxed text-slate-200 md:text-lg">
            Building performant web experiences with clean interfaces, modern frameworks, and a deep
            commitment to accessibility.
          </p> */}
        </div>
        <a
          href="#about"
          className="absolute bottom-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all hover:translate-y-1 hover:bg-white/20"
          aria-label="Scroll to About section"
        >
          <svg className="h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M17 14l-5 5-5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      <section id="about" className="bg-white text-slate-900">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20 lg:px-8 lg:py-24">
          <PageTitle name="A developer at heart" />
          <p className="text-lg leading-relaxed text-slate-700">
            I’m Tyler Akin, a software engineer from Louisville, Kentucky. I help teams build fast,
            accessible web experiences that feel as good as they look. From greenfield prototypes to
            long-term platform maintenance, I focus on sustainable front-end architecture,
            thoughtful UX, and measurable business outcomes.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Outside of code, you can find me exploring local coffee shops, mentoring early-career
            developers, and experimenting with new creative tools. Clients know me for clear
            communication, calm collaboration, and a genuine care for their product vision.
          </p>
        </div>
      </section>

      <section id="technology" className="bg-slate-100 text-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:px-8 lg:py-24">
          <PageTitle name="Capabilites and tools" />
          <div className="grid gap-8 md:grid-cols-2">
            {TECHNOLOGY_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-lg"
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
        </div>
      </section>

      <section id="contact" className="bg-white text-slate-900">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20 lg:px-8 lg:py-24">
          <PageTitle name="Let’s work together" />
          <p className="text-lg leading-relaxed text-slate-700">
            Have a project in mind or need a reliable contractor to augment your team? I’d love to
            hear what you’re building and how I can help move it forward.
          </p>
          <dl className="grid gap-4 text-base text-slate-800 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Phone
              </dt>
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
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Email
              </dt>
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
        </div>
      </section>
    </>
  );
}

export default HomePage;

