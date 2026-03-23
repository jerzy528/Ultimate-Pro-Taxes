export default function UltimateProTaxesWebsite() {
  const services = [
    {
      title: 'Bookkeeping',
      description:
        'Keep your financial records organized, accurate, and ready for decision-making and tax season.',
      items: ['Monthly reconciliations', 'Financial reports', 'Cleanup bookkeeping'],
      cta: 'Get Bookkeeping Support',
      id: 'bookkeeping',
    },
    {
      title: 'Payroll',
      description:
        'Reliable payroll services designed to help businesses stay compliant and pay employees accurately.',
      items: ['Payroll processing', 'Payroll tax support', 'Employee setup'],
      cta: 'Simplify Your Payroll',
      id: 'payroll',
    },
    {
      title: 'Individual Tax Returns',
      description:
        'Professional tax preparation for individuals, families, and self-employed taxpayers.',
      items: ['W-2 and 1099 filing', 'Self-employed returns', 'Tax planning'],
      cta: 'Start Your Tax Return',
      id: 'individual-taxes',
    },
    {
      title: 'Business Tax Returns',
      description:
        'Tax preparation and compliance support for LLCs, partnerships, S corporations, and C corporations.',
      items: ['Entity tax returns', 'Year-end filings', 'Compliance guidance'],
      cta: 'Request Business Tax Services',
      id: 'business-taxes',
    },
  ];

  const audience = [
    'Individuals & Families',
    'Self-Employed Professionals',
    'Small Business Owners',
    'LLCs & Corporations',
    'Startups',
    'Growing Businesses',
  ];

  const faqs = [
    {
      q: 'Do you work with both individuals and businesses?',
      a: 'Yes. Ultimate Pro Taxes serves individuals, self-employed professionals, small businesses, and corporations.',
    },
    {
      q: 'Do you offer bookkeeping cleanup?',
      a: 'Yes. We can help organize and clean up prior financial records so your books are accurate and up to date.',
    },
    {
      q: 'Can I send documents securely?',
      a: 'Yes. We recommend using a secure client portal for tax documents, payroll records, and other financial files.',
    },
    {
      q: 'Do you offer remote services?',
      a: 'Yes. Services can be provided remotely for clients who prefer a convenient digital process.',
    },
    {
      q: 'Can you help with prior-year tax returns?',
      a: 'Yes. We can assist with prior-year filings depending on the documents available and the complexity of the return.',
    },
  ];

  const pricing = [
    { service: 'Individual Tax Returns', price: 'Starting at $150' },
    { service: 'Bookkeeping', price: 'Starting at $300/month' },
    { service: 'Payroll', price: 'Starting at $100/month' },
    { service: 'Business Tax Returns', price: 'Starting at $500' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Ultimate Pro Taxes
            </a>
            <p className="text-xs text-slate-500">Bookkeeping • Payroll • Tax Services</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-blue-700">Home</a>
            <a href="#about" className="transition hover:text-blue-700">About</a>
            <a href="#services" className="transition hover:text-blue-700">Services</a>
            <a href="#pricing" className="transition hover:text-blue-700">Pricing</a>
            <a href="#faq" className="transition hover:text-blue-700">FAQ</a>
            <a href="#contact" className="transition hover:text-blue-700">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-16 h-44 w-44 rounded-full bg-blue-400 blur-3xl" />
            <div className="absolute bottom-10 right-12 h-56 w-56 rounded-full bg-cyan-300 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-blue-100">
                Trusted financial support for individuals and businesses
              </span>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ultimate Pro Taxes – Bookkeeping, Payroll & Tax Services You Can Trust
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Serving individuals, entrepreneurs, and businesses with reliable, accurate, and professional financial services.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  'Accurate and reliable financial reporting',
                  'Timely tax filing and compliance',
                  'Secure document handling',
                  'Personalized professional service',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-white p-6 text-slate-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Welcome to Ultimate Pro Taxes</p>
                  <h2 className="mt-3 text-2xl font-bold">Financial services built around clarity, trust, and results.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Whether you need monthly bookkeeping, payroll support, or tax preparation for yourself or your business, we help simplify the process and keep you moving forward with confidence.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Bookkeeping</p>
                      <p className="mt-2 text-sm text-slate-600">Stay organized with accurate records and monthly reporting.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Payroll</p>
                      <p className="mt-2 text-sm text-slate-600">Support payroll accuracy and compliance with a reliable process.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Individual Taxes</p>
                      <p className="mt-2 text-sm text-slate-600">Preparation for W-2, 1099, and self-employed tax returns.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Business Taxes</p>
                      <p className="mt-2 text-sm text-slate-600">Tax preparation for LLCs, S corps, C corps, and partnerships.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
              {[
                'Reliable financial support',
                'Professional service',
                'Secure process',
                'Responsive communication',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Services</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Professional accounting services designed to support every stage of your financial journey
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From monthly bookkeeping to payroll management and tax returns, Ultimate Pro Taxes provides practical support with a focus on clarity, compliance, and dependable service.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                id={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">About Ultimate Pro Taxes</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ultimate Pro Taxes provides professional bookkeeping, payroll, and tax services designed to help individuals and businesses stay organized, compliant, and financially confident.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Our approach is centered on accuracy, responsiveness, confidentiality, and personalized support. We work to simplify financial processes so clients can focus on their goals with greater peace of mind.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Contact Us Today
                </a>
                <a
                  href="#pricing"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Accuracy',
                  text: 'Financial records and returns should be handled with care, precision, and consistency.',
                },
                {
                  title: 'Compliance',
                  text: 'We help clients stay on top of tax requirements, payroll obligations, and financial organization.',
                },
                {
                  title: 'Communication',
                  text: 'Clear explanations help clients understand what is happening and what comes next.',
                },
                {
                  title: 'Service',
                  text: 'Each client deserves reliable support tailored to their specific financial needs.',
                },
              ].map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Who We Help</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for individuals, entrepreneurs, and growing businesses</h2>
              <p className="mt-4 text-lg text-slate-300">
                Ultimate Pro Taxes supports clients who need practical accounting help, dependable tax preparation, and a more organized financial process.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((group) => (
                <div key={group} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-lg font-semibold text-slate-100">
                  {group}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">How It Works</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">A simple process designed to reduce stress</h2>
              <div className="mt-8 space-y-6">
                {[
                  ['1', 'Book a consultation', 'Tell us about your needs, timeline, and the services you are looking for.'],
                  ['2', 'Send documents securely', 'Use a secure process to provide the records and documents needed for the work.'],
                  ['3', 'We prepare and review', 'We organize, prepare, and review the work carefully for accuracy and completeness.'],
                  ['4', 'We deliver and support', 'You receive your completed work along with next-step guidance and ongoing support when needed.'],
                ].map(([num, title, text]) => (
                  <div key={num} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-lg font-bold text-white">
                      {num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-100 p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why Choose Us</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Professional support with a personal touch</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Personalized attention',
                  'Accurate and compliant work',
                  'Clear communication',
                  'Reliable and timely service',
                  'Organized financial process',
                  'Support for both individuals and businesses',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                    ✓ {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple starting prices</h2>
              <p className="mt-4 text-lg text-slate-600">
                Pricing depends on the complexity of your needs, transaction volume, payroll frequency, and tax situation.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pricing.map((item) => (
                <div key={item.service} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">{item.service}</h3>
                  <p className="mt-5 text-3xl font-bold text-blue-700">{item.price}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">Final pricing may vary based on complexity and the scope of services required.</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Request a Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Client Portal</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Secure Client Portal</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Upload and access financial documents through a secure process designed to protect your sensitive information.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Upload Documents
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Portal Login
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Testimonials</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">What clients want to feel</h2>
              <div className="mt-8 space-y-5">
                {[
                  '“Very professional and responsive. Made tax season much less stressful.”',
                  '“Helped organize the books and gave clarity on what the business needed.”',
                  '“Clear communication, reliable service, and a process that felt secure and efficient.”',
                ].map((quote) => (
                  <blockquote key={quote} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    {quote}
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-slate-600">
                Clear answers to common questions about bookkeeping, payroll, taxes, and the client process.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-blue-700 transition group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Contact</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Contact Ultimate Pro Taxes</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Ready to get started? Use the form to request information about bookkeeping, payroll, individual taxes, or business tax services.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="mt-1 text-slate-600">(555) 123-4567</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="mt-1 text-slate-600">info@ultimateprotaxes.com</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-900">Business Hours</p>
                    <p className="mt-1 text-slate-600">Monday – Friday | 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <form className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Service Needed</label>
                    <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600">
                      <option>Bookkeeping</option>
                      <option>Payroll</option>
                      <option>Individual Tax Return</option>
                      <option>Business Tax Return</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us briefly how we can help you."
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Book a Consultation
                  </button>
                  <p className="text-xs leading-6 text-slate-500">
                    This form is a design placeholder. Connect it to your email, CRM, or website form handler before publishing.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to simplify your bookkeeping, payroll, and taxes?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Ultimate Pro Taxes is here to help you move forward with a more organized, confident, and professional financial process.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Book Your Consultation Today
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white">Ultimate Pro Taxes</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Professional bookkeeping, payroll, and tax services for individuals, entrepreneurs, and businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#bookkeeping" className="transition hover:text-white">Bookkeeping</a></li>
              <li><a href="#payroll" className="transition hover:text-white">Payroll</a></li>
              <li><a href="#individual-taxes" className="transition hover:text-white">Individual Tax Returns</a></li>
              <li><a href="#business-taxes" className="transition hover:text-white">Business Tax Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>(555) 123-4567</li>
              <li>info@ultimateprotaxes.com</li>
              <li>Secure Client Portal Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} Ultimate Pro Taxes. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Disclaimer</a>
              <a href="#contact" className="transition hover:text-white">Client Portal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
