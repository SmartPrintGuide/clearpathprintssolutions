import React from "react";

function PrivacyPolicy() {
  const sections = [
    "Information We Collect",
    "How We Use Your Information",
    "Sharing of Information",
    "Cookies & Tracking Technologies",
    "Data Security",
    "Your Rights & Choices",
    "Children's Privacy",
    "California Privacy Rights (CCPA)",
    "Changes to This Policy",
    "Contact Us",
  ];

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
            Privacy Policy
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
                This Privacy Policy explains how <strong>Clear Path Print Solutions</strong>
                ("Company", "we", "us", or "our") collects, uses, stores,
                and protects information when you visit our website or use
                our products and services. By accessing or using our
                website, you acknowledge the practices described in this
                Privacy Policy.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We are committed to handling your personal information
                responsibly and transparently. This policy explains what
                information we collect, why we collect it, and the choices
                available to you regarding your data.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                1. Information We Collect
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We may collect information that you provide directly,
                  information gathered automatically through your use of
                  our website, and information received from trusted
                  third-party sources where permitted by law.
                </p>

                {/* Information Provided */}
                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Information You Provide
                  </h3>

                  <p className="mt-4">
                    When interacting with our website or requesting our
                    services, you may voluntarily provide information
                    including:
                  </p>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>
                      Your full name and contact information.
                    </li>

                    <li>
                      Email address and phone number for communication.
                    </li>

                    <li>
                      Company or business information when applicable.
                    </li>

                    <li>
                      Billing, shipping, or service location details.
                    </li>

                    <li>
                      Information submitted through contact forms,
                      appointment requests, surveys, or feedback forms.
                    </li>

                    <li>
                      Customer support requests and communications with
                      our team.
                    </li>

                    <li>
                      Account credentials if you choose to register for
                      an account.
                    </li>
                  </ul>
                </div>

                {/* Automatic Collection */}
                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Information Collected Automatically
                  </h3>

                  <p className="mt-4">
                    Certain technical information may be collected
                    automatically when you browse our website to improve
                    performance, security, and user experience.
                  </p>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>IP address.</li>

                    <li>Browser type and browser version.</li>

                    <li>Operating system and device information.</li>

                    <li>
                      Pages viewed, time spent on pages, and navigation
                      patterns.
                    </li>

                    <li>
                      Referring websites, search terms, and traffic
                      sources.
                    </li>

                    <li>
                      Cookie identifiers and similar tracking
                      technologies.
                    </li>
                  </ul>
                </div>

                <p>
                  The information we collect helps us provide reliable
                  services, improve website functionality, enhance
                  customer support, and maintain the security of our
                  systems.
                </p>
              </div>
            </section> 

                        {/* Section 2 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                2. How We Use Your Information
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We use the information we collect to operate our website,
                  provide requested services, improve user experience, and
                  fulfill our legal and business responsibilities. Information
                  is only used for legitimate business purposes and in
                  accordance with applicable laws.
                </p>

                <div className="grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Provide Our Services
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Process service requests, appointments, product
                      inquiries, and customer support to deliver the
                      services you request.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Process Transactions
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Manage payments, confirmations, invoices, receipts,
                      and other transaction-related communications.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Schedule Services
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Coordinate appointments, onsite visits, maintenance
                      requests, and service updates efficiently.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Customer Support
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Respond to inquiries, resolve technical issues, and
                      provide assistance through email, phone, or other
                      communication channels.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Account & Security
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Verify user identity, secure accounts, prevent
                      unauthorized access, and protect our systems from
                      fraudulent or malicious activity.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Website Improvements
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Analyze website usage to improve navigation,
                      performance, accessibility, and overall user
                      experience.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Communications
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Send important service notifications, account
                      updates, security alerts, and other administrative
                      communications.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Marketing
                    </h3>

                    <p className="mt-3 text-slate-600">
                      With your permission where required, send
                      promotional emails, newsletters, offers, and
                      product updates. You may unsubscribe at any time.
                    </p>
                  </div>

                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Compliance & Legal Obligations
                  </h3>

                  <p className="mt-3 text-slate-600">
                    We may process your information to comply with
                    applicable laws, enforce our policies, resolve
                    disputes, detect fraud, protect our rights, and meet
                    legal or regulatory requirements.
                  </p>
                </div>

                <p>
                  We only use personal information for purposes that are
                  relevant to providing our services, improving our
                  website, maintaining security, and fulfilling legal
                  obligations. We do not use your information for
                  purposes that are inconsistent with this Privacy
                  Policy.
                </p>
              </div>
            </section>  

                        {/* Section 3 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                3. Sharing of Information
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We respect your privacy and do not sell your personal
                  information. However, we may share limited information
                  with trusted parties when necessary to operate our
                  business, provide requested services, or comply with
                  legal obligations.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Service Providers
                    </h3>

                    <p className="mt-3">
                      We may work with trusted third-party providers that
                      assist with payment processing, website hosting,
                      customer support, appointment scheduling, email
                      delivery, analytics, or similar business
                      operations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Business Changes
                    </h3>

                    <p className="mt-3">
                      Information may be transferred as part of a merger,
                      acquisition, restructuring, financing, or sale of
                      business assets.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Legal Compliance
                    </h3>

                    <p className="mt-3">
                      We may disclose information when required by law,
                      legal proceedings, court orders, or requests from
                      authorized government authorities.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Protection of Rights
                    </h3>

                    <p className="mt-3">
                      Information may be shared to protect our business,
                      customers, employees, systems, or the public from
                      fraud, abuse, security threats, or unlawful
                      activity.
                    </p>
                  </div>
                </div>

                <p>
                  In any situation not covered above, we will only share
                  your information with your knowledge or where permitted
                  by applicable law.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                4. Cookies & Tracking Technologies
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Our website uses cookies and similar technologies to
                  improve performance, remember preferences, analyze
                  visitor activity, and enhance your overall browsing
                  experience.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Essential Cookies
                    </h3>

                    <p className="mt-3">
                      Required for basic website functionality including
                      security, navigation, and form submissions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Analytics Cookies
                    </h3>

                    <p className="mt-3">
                      Help us understand visitor behavior and improve
                      website performance through anonymous usage
                      statistics.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Marketing Cookies
                    </h3>

                    <p className="mt-3">
                      Used to deliver more relevant advertising and
                      measure campaign effectiveness where permitted.
                    </p>
                  </div>
                </div>

                <p>
                  You can control or disable cookies through your browser
                  settings. Please note that disabling certain cookies
                  may affect some website features and functionality.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                5. Data Security
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We implement reasonable administrative, technical, and
                  organizational safeguards to help protect your personal
                  information from unauthorized access, disclosure,
                  alteration, or destruction.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>Secure website connections using encryption.</li>
                    <li>Access controls for authorized personnel.</li>
                    <li>Routine monitoring of systems and services.</li>
                    <li>Industry-standard security practices.</li>
                    <li>Regular updates and maintenance.</li>
                  </ul>
                </div>

                <p>
                  Although we strive to protect your information using
                  appropriate safeguards, no method of electronic
                  transmission or storage can be guaranteed to be
                  completely secure.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                6. Your Rights & Choices
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Depending on your location and applicable laws, you may
                  have certain rights regarding your personal
                  information.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-100 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">
                      Access
                    </h3>
                    <p className="mt-2">
                      Request information about the personal data we
                      maintain about you.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">
                      Correction
                    </h3>
                    <p className="mt-2">
                      Ask us to update or correct inaccurate information.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">
                      Deletion
                    </h3>
                    <p className="mt-2">
                      Request deletion of eligible personal information,
                      subject to legal requirements.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">
                      Marketing Preferences
                    </h3>
                    <p className="mt-2">
                      Opt out of promotional communications at any time
                      using the unsubscribe option or by contacting us.
                    </p>
                  </div>
                </div>

                <p>
                  If you wish to exercise any of these rights, please use
                  the contact information provided at the end of this
                  Privacy Policy. We will review and respond to requests
                  in accordance with applicable laws.
                </p>
              </div>
            </section>

                        {/* Section 7 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                7. Children's Privacy
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Our website and services are intended for a general audience
                  and are not designed for children under the age required by
                  applicable law. We do not knowingly collect personal
                  information from children.
                </p>

                <p>
                  If you believe that a child has provided personal information
                  through our website, please contact us. If we become aware
                  that information has been collected from a child without the
                  necessary authorization, we will take appropriate steps to
                  remove it as required by law.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                8. California Privacy Rights (CCPA)
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  If you are a California resident, you may have additional
                  privacy rights under applicable California privacy laws,
                  including the California Consumer Privacy Act (CCPA), as
                  amended.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Right to Know
                    </h3>

                    <p className="mt-3">
                      You may request information about the categories of
                      personal information we collect and how it is used.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Right to Delete
                    </h3>

                    <p className="mt-3">
                      You may request deletion of eligible personal information,
                      subject to legal or operational exceptions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Right to Correct
                    </h3>

                    <p className="mt-3">
                      You may request correction of inaccurate personal
                      information maintained by us.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Non-Discrimination
                    </h3>

                    <p className="mt-3">
                      Exercising your privacy rights will not result in unfair
                      treatment or discrimination regarding our services.
                    </p>
                  </div>
                </div>

                <p>
                  We do not sell personal information. Requests related to
                  applicable privacy laws can be submitted using the contact
                  information provided below.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                9. Changes to This Policy
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  We may revise this Privacy Policy periodically to reflect
                  updates to our business practices, technology, legal
                  requirements, or regulatory obligations.
                </p>

                <p>
                  Any revisions will become effective once they are published on
                  this page together with the updated effective date. We
                  encourage you to review this page regularly to stay informed
                  about how your information is handled.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Us
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                If you have questions regarding this Privacy Policy or would
                like to exercise your privacy rights, please contact us using
                the information below.
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
                  We are committed to protecting your privacy and handling your
                  personal information responsibly. If you have any questions
                  about our privacy practices, please don't hesitate to contact
                  us.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;