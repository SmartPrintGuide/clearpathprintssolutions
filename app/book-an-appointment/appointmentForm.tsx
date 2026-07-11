import React from "react";
import Image from "next/image";

function AppointmentForm() {
  return (
    <section
      id="appointmentForm"
      className="scroll-mt-24 bg-slate-50 section-space"
    >
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Form */}
          <div className="rounded-[1.5rem] bg-white p-7 shadow-lg shadow-slate-200/50 sm:p-8">
            <h2 className="text-h2 text-slate-900">
              Book an Appointment
            </h2>

            <p className="text-body mt-3 text-slate-600">
              Fill out the form and our support team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Printer Model Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. HP LaserJet Pro M404dn"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full cursor-pointer"
              >
                Submit Appointment
              </button>
            </form>
          </div>

  
          {/* Image Side */}
          <div className="relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl">

              <Image
                src="/what-we-offer.webp"
                alt="Printer Service"
                width={550}
                height={550}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />



            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;