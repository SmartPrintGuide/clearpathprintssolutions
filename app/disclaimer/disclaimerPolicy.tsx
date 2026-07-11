import React from "react";

function DisclaimerPolicy() {
  return (
    <main className="bg-slate-100 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 py-24">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-blue-100 backdrop-blur">
            Legal Information
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Disclaimer
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Effective Date{" "}
            <span className="font-semibold text-white">
              May 25, 2026
            </span>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="p-8 md:p-10">

            {/* Table of Contents */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Table of Contents
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "General Disclaimer",
                  "Professional Service Disclaimer",
                  "Third-Party Links Disclaimer",
                  "Errors & Omissions",
                  "Contact Us",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-100 bg-white px-5 py-4 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Intro */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="leading-8 text-slate-600">
                This Disclaimer explains the limitations of liability,
                website content, and service-related information provided
                by <strong>Clear Path Print Solutions</strong>. By accessing or using this
                website, you acknowledge and agree to the terms outlined
                below.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                1. General Disclaimer
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  The information available on this website is provided
                  solely for general informational purposes. Although we
                  strive to ensure the content remains accurate,
                  complete, and current, we make no guarantees regarding
                  its reliability, availability, or suitability for any
                  particular purpose.
                </p>

                <p>
                  Your use of this website and any information provided on it is entirely at your own risk. To the fullest extent permitted by applicable law, we disclaim all liability for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of this website, its content, or any reliance placed on the information provided.
                </p>

              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                2. Professional Service Disclaimer
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Our technicians are trained professionals who aim to
                  provide reliable repair, setup, maintenance, and
                  technical support services. However, every device and
                  technical issue is unique, and therefore no guarantee
                  can be made that every problem can be fully resolved.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Before Service
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                    <li>Back up important files and documents.</li>
                    <li>Verify compatibility of third-party products.</li>
                    <li>Provide accurate information about device issues.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Please Note
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                    <li>
                      Existing hardware failures or software issues may
                      limit repair success.
                    </li>

                    <li>
                      We are not responsible for pre-existing data loss
                      or hardware damage.
                    </li>

                    <li>
                      Compatibility of third-party accessories,
                      cartridges, or replacement parts remains the
                      customer's responsibility.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                3. Third-Party Links Disclaimer
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  This website may include links to external websites or
                  third-party resources for your convenience. These links
                  do not imply endorsement, recommendation, or approval
                  of the information, products, or services available on
                  those websites.
                </p>

                <p>
                  Since we do not control third-party websites, we are
                  not responsible for their content, privacy practices,
                  availability, or accuracy. Users should review the
                  policies of any external website they choose to visit.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                4. Errors & Omissions
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  We regularly review the information published on our
                  website to ensure it is accurate and up to date.
                  However, occasional typographical errors, pricing
                  changes, service updates, or other inaccuracies may
                  occur.
                </p>

                <p>
                  Product availability, pricing, technical information,
                  and service details may change without prior notice. We
                  recommend contacting us directly before relying on any
                  information when making purchasing or service
                  decisions.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Us
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                If you have any questions regarding this Disclaimer,
                please contact us using the information below.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-blue-200">
                    Company
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Clear Path Print Solutions
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-blue-200">
                    Address
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    17807 Lakecrest View Drive, #1205
                    <br />
                    Cypress, TX 77433
                    <br />
                    United States
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-blue-200">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    support@clearpathprintsolutions.com
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-blue-200">
                    Phone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    ***
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-sm leading-7 text-blue-100">
                  We appreciate your trust and are committed to providing
                  clear, accurate, and transparent information. If you
                  require clarification regarding any part of this
                  Disclaimer, please don't hesitate to reach out to us.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default DisclaimerPolicy;