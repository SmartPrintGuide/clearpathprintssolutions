import Link from "next/link";

function GetQuote() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#044dd9] px-8 py-10 shadow-xl lg:px-14">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                Book a Service
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Ready to Schedule Your Printer Service?
              </h2>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Book an onsite printer appointment in just a few minutes. Our
                team will contact you to confirm your preferred date and time.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/book-an-appointment/"
                className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#044dd9] transition-colors duration-200 hover:bg-slate-100"
              >
                Book an Appointment
              </Link>

              <p className="text-sm text-blue-100">
                Fast scheduling • Professional onsite support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetQuote;