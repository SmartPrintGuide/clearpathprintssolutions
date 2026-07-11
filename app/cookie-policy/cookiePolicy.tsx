import React from "react";

function CookiePolicy() {
  const sections = [
    "What Are Cookies",
    "Cookies We Use",
    "Third-Party Cookies",
    "How to Control Cookies",
    "Changes to This Policy",
    "Contact Us",
  ];

  return (
    <main className="bg-slate-100 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 py-24">
        {/* Background Glow */}
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-blue-100 backdrop-blur">
            Legal Information
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Cookie Policy
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Effective Date{" "}
            <span className="font-semibold text-white">
              May 25, 2026
            </span>
          </p>
        </div>
      </section>

      {/* Floating Card */}
      <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          <div className="p-8 md:p-10">

            {/* Table of Contents */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Table of Contents
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {sections.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-100 bg-white px-5 py-4 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="leading-8 text-slate-600">
                This Cookie Policy explains how{" "}
                <strong>Clear Path Print Solutions</strong> ("we", "us", or "our")
                uses cookies on our website. By continuing to use our
                website, you agree to the use of cookies as described
                in this policy.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                1. What Are Cookies
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Cookies are small text files placed on your device
                  when you visit a website. They help websites work
                  efficiently, remember your preferences, and provide
                  useful information that improves your browsing
                  experience.
                </p>

                <p>
                  Cookies do not contain viruses or malware and cannot
                  access files stored on your device.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Session Cookies
                    </h3>

                    <p className="mt-3 text-slate-600">
                      These cookies are temporary and are automatically
                      removed when you close your browser.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Persistent Cookies
                    </h3>

                    <p className="mt-3 text-slate-600">
                      These remain on your device for a defined period
                      or until you manually delete them.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                2. Cookies We Use
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Necessary Cookies
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Required for essential website functionality,
                    including navigation, security, and form
                    submissions. These cookies cannot be disabled.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Analytics Cookies
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Collect anonymous information about how visitors
                    interact with the website to improve performance
                    and user experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Advertising Cookies
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Used to deliver relevant advertisements and measure
                    campaign effectiveness after obtaining your
                    consent.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Functional Cookies
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Remember your settings and preferences to provide a
                    more personalized browsing experience.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 3 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                3. Third-Party Cookies
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Some cookies may be placed by trusted third-party
                  services that help us operate, analyze, and improve
                  our website.
                </p>

                <div className="grid gap-5 md:grid-cols-2">

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Google Analytics
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Helps us understand website traffic, visitor
                      behavior, and overall performance using anonymous
                      usage data.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Google Ads
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Helps measure advertising performance and deliver
                      relevant advertisements based on your consent.
                    </p>
                  </div>

                </div>

                <p>
                  These providers operate under their own privacy and
                  cookie policies. We encourage you to review their
                  policies if you would like more information about how
                  they collect and use data.
                </p>
              </div>
            </section>


                        {/* Section 4 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                4. How to Control Cookies
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  You have the right to accept or decline non-essential cookies
                  at any time. You can manage your cookie preferences using the
                  following options:
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Cookie Banner
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Manage your cookie preferences through the banner shown
                      when you first visit our website.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Browser Settings
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Most web browsers allow you to view, block, or delete
                      cookies from their privacy or security settings.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Advertising Opt-Out
                    </h3>

                    <p className="mt-3 text-slate-600">
                      You may use recognized advertising opt-out tools to
                      disable interest-based advertising where supported.
                    </p>
                  </div>
                </div>

                <p>
                  Please note that disabling certain cookies may affect the
                  functionality and performance of some parts of our website.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                5. Changes to This Policy
              </h2>

              <div className="mt-6 leading-8 text-slate-600">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  regulatory obligations.
                </p>

                <p className="mt-5">
                  Any changes will be published on this page with an updated
                  effective date. We encourage you to review this page
                  periodically to stay informed about how cookies are used on
                  our website.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Us
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                If you have any questions regarding this Cookie Policy or how
                cookies are used on our website, please contact us using the
                information below.
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
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default CookiePolicy;