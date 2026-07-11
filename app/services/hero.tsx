const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#044dd9]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.18),transparent_40%)]" />

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        {/* Badge */}
        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-blue-50 backdrop-blur-xl">
          ✦ Professional Printer Services
        </span>

        {/* Heading */}
        <h1 className="mt-7 max-w-4xl text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-6xl">
          Reliable Printer
          <span className="text-blue-200"> Support</span>
          <br />
          Tailored for Every Need
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Installation, wireless setup, maintenance, and troubleshooting
          services delivered by experienced professionals for homes and
          businesses.
        </p>

        {/* Decorative Line */}
        <div className="mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-white via-blue-200 to-white" />
      </div>
    </section>
  );
};

export default Hero;