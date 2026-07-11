import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-600">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="section-shell relative z-10">
        <div className="grid min-h-[560px] items-center gap-12 py-12 lg:min-h-[700px] lg:grid-cols-2 lg:gap-16">

          {/* ================= Left Content ================= */}
          <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Book Your Printer
              <span className="mt-2 block text-blue-100">
                Service Appointment
              </span>
            </h1>

            <div className="mt-8 w-full flex flex-col items-center lg:items-start">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-100">
                Need Immediate Assistance?
              </p>

              <a
                href="tel:+10000000000"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-xl font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                📞 +1 (000) 000-0000
              </a>
            </div>

            {/* Adjusted item arrangement logic to center inline checkmarks on mobile */}
            <div className="mt-8 space-y-3 text-base text-blue-50 text-left sm:text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-2">✓ On-site printer installation & setup</p>
              <p className="flex items-center justify-center lg:justify-start gap-2">✓ Fast troubleshooting & repair</p>
              <p className="flex items-center justify-center lg:justify-start gap-2">✓ Certified printer technicians</p>
              <p className="flex items-center justify-center lg:justify-start gap-2">✓ No hidden charges • Doorstep service</p>
            </div>

            <div className="mt-10 w-full">
              <a
                href="#appointmentForm"
                className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Schedule Appointment
              </a>
            </div>
          </div>

          {/* ================= Right Image ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" />

              {/* Border Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <Image
                  src="/why-choose.webp"
                  alt="Printer Service Technician"
                  width={700}
                  height={650}
                  priority
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;