import Link from "next/link";

const Hero = () => {
  const features = [
    {
      title: "ON-SITE PRINTER SERVICE",
      description:
        "Professional assistance at your location for quick printer setup and repairs.",
    },
    {
      title: "CERTIFIED TECHNICIANS",
      description:
        "Experienced specialists delivering dependable printer support every visit.",
    },
    {
      title: "SCHEDULED APPOINTMENTS",
      description:
        "Book a convenient service time that works around your daily routine.",
    },
    {
      title: "TRUSTED SOLUTIONS",
      description:
        "Reliable printer services designed to keep your devices working smoothly.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home-hero-image.webp')",
      }}
      aria-label="Professional printer service hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/85 to-transparent" />

      {/* Main Layout Shell */}
      {/* Changed layout from strict grids to flex-col with tightly bounded padding */}
      <div className="section-shell relative z-10 flex flex-col gap-12 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:gap-16 lg:pt-24 lg:pb-20">
        
        {/* ================= HERO CONTENT ================= */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9V4h12v5M6 18h12v2H6zm-2-7h16a2 2 0 012 2v3H2v-3a2 2 0 012-2z"
              />
            </svg>

            <span>
              PRINTER <span className="text-[#044dd9]">SERVICE</span> EXPERTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
            Professional Printer
            <br />
            <span className="text-[#3B82F6]">Care Services</span>
          </h1>

          <div className="mt-5 h-1 w-28 rounded-full bg-[#044dd9]" />

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 lg:text-lg">
            Professional printer installation, troubleshooting,
            maintenance, wireless setup, and repair services for
            homes and businesses.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              href="/book-an-appointment/"
              className="inline-flex items-center justify-center rounded-lg bg-[#044dd9] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-700"
            >
              Book Appointment
            </Link>

            <div className="flex items-center gap-4 border-l-4 border-[#044dd9] pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
                />
              </svg>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white">
                  Certified Support
                </p>
                <p className="text-sm text-slate-300">
                  Trusted Printer Specialists
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        {/* Desktop Feature Cards */}
        <div className="hidden lg:block">
          <div className="grid overflow-hidden rounded-[28px] bg-[#044dd9] shadow-[0_25px_60px_rgba(0,0,0,0.35)] lg:grid-cols-2 xl:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-5 p-7 transition-colors duration-300 hover:bg-white/5 ${
                  index !== features.length - 1
                    ? "border-r border-white/15"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-bold tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Feature Cards */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-[24px] bg-[#12328a]/95 shadow-2xl">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-4 p-6 ${
                  index !== features.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;