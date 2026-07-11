import React from "react";

function TermsAndConditions() {
  const sections = [
    "Acceptance of Terms",
    "Description of Services",
    "Service Agreement & Eligibility",
    "Pricing, Payment & Billing",
    "Service Scheduling & Access",
    "Cancellation & Rescheduling",
    "Warranty & Liability Limitations",
    "Intellectual Property",
    "User Conduct",
    "Indemnification",
    "Governing Law & Disputes",
    "Changes to Terms",
    "Contact Information",
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

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Terms & Conditions
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
                These Terms and Conditions explain the rules,
                responsibilities, and conditions that apply when using
                the website or services provided by
                <strong> Clear Path Print Solutions </strong>
                By accessing our website, requesting services, or
                continuing to use our platform, you acknowledge that you
                have read, understood, and agreed to comply with these
                Terms. If you do not agree with any part of these Terms,
                please discontinue use of the website and related
                services.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                These Terms apply to all visitors, customers, business
                clients, and anyone interacting with our website or
                services.
              </p>
            </section>

                        {/* Section 1 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  By accessing, browsing, or using this website, requesting a
                  quotation, scheduling a service, or purchasing any of our
                  services, you acknowledge that you have read, understood, and
                  agreed to be bound by these Terms and Conditions together with
                  any applicable policies published on this website.
                </p>

                <p>
                  These Terms govern your relationship with
                  <strong> Clear Path Print Solutions </strong>
                  and apply to every visitor, customer, business client,
                  contractor, or other individual who uses our website or
                  services.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    By using our website or services, you confirm that:
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                    <li>
                      You are at least 18 years of age or legally authorized to
                      enter into a binding agreement.
                    </li>

                    <li>
                      The information you provide is accurate, current, and
                      complete.
                    </li>

                    <li>
                      You agree to comply with all applicable laws and
                      regulations while using our website.
                    </li>

                    <li>
                      You accept responsibility for any activity carried out
                      through your communications or service requests.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    If you disagree with any portion of these Terms, you should
                    immediately discontinue use of the website and refrain from
                    requesting or using our services.
                  </p>
                </div>
              </div>
            </section> 

                        {/* Section 2 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                2. Description of Services
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Clear Path Print Solutions provides professional printer-related support
                  services for individuals and businesses. Our services are
                  designed to assist with installation, maintenance,
                  troubleshooting, repair, and ongoing device management.
                </p>

                <p>
                  The availability of services may vary depending on your
                  location, equipment type, technician availability, and other
                  operational factors. We reserve the right to update, improve,
                  suspend, or discontinue any service without prior notice when
                  necessary.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Installation & Setup
                    </h3>

                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li>Printer installation and configuration</li>
                      <li>Wireless and network printer setup</li>
                      <li>Driver and software installation</li>
                      <li>Device connectivity assistance</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Maintenance & Support
                    </h3>

                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li>Preventive maintenance</li>
                      <li>Printer cleaning and optimization</li>
                      <li>Routine inspections</li>
                      <li>Performance improvements</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Repair Services
                    </h3>

                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li>Printer diagnostics</li>
                      <li>Hardware troubleshooting</li>
                      <li>Error resolution</li>
                      <li>Replacement recommendations</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Additional Solutions
                    </h3>

                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li>Printer supplies guidance</li>
                      <li>Business printing solutions</li>
                      <li>Equipment consultation</li>
                      <li>Managed support services</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    We continuously improve our services to meet changing
                    technology and customer requirements. Service availability
                    and features may change from time to time without affecting
                    existing legal obligations.
                  </p>
                </div>
              </div>
            </section>  

                        {/* Section 3 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                3. Service Agreement & Eligibility
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  By requesting our services, you confirm that you are legally
                  authorized to enter into this agreement and that all
                  information provided during the booking or inquiry process is
                  accurate and complete.
                </p>

                <p>
                  Our services are available to individuals, businesses, and
                  organizations that meet the applicable legal requirements.
                  Additional verification may be requested before certain
                  services are performed.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Eligibility Requirements
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                      <li>
                        You must be at least 18 years of age or have legal
                        authority to act on behalf of an individual or
                        organization.
                      </li>

                      <li>
                        Information submitted during booking must be accurate,
                        current, and truthful.
                      </li>

                      <li>
                        You must have permission to request service for the
                        equipment involved.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Customer Responsibilities
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                      <li>
                        Provide a safe and accessible working environment for
                        our technicians.
                      </li>

                      <li>
                        Ensure the equipment is available at the scheduled
                        appointment time.
                      </li>

                      <li>
                        Inform us in advance about security procedures,
                        restricted access areas, or special site requirements.
                      </li>

                      <li>
                        Cooperate with our technicians during diagnostics and
                        service visits.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Service Availability
                  </h3>

                  <p className="mt-4">
                    Acceptance of a service request does not guarantee immediate
                    availability. Appointments are scheduled based on technician
                    availability, service location, workload, and operational
                    requirements. We reserve the right to decline or reschedule
                    a request when necessary.
                  </p>
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    Failure to provide accurate information, necessary access,
                    or a safe working environment may result in delays,
                    rescheduling, additional service charges, or cancellation of
                    the appointment.
                  </p>
                </div>
              </div>
            </section>

                        {/* Section 4 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                4. Pricing, Payment & Billing
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Service pricing is determined based on the type of work,
                  equipment involved, required parts, and any additional
                  services requested. Pricing may vary depending on the scope of
                  work and location.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Payment Terms
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Payment is due according to the agreed service terms.</li>
                      <li>Approved payment methods may vary by service.</li>
                      <li>Invoices should be paid within the specified period.</li>
                      <li>Taxes and applicable fees may be added where required.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Additional Charges
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Replacement parts may be billed separately.</li>
                      <li>Travel or on-site visit fees may apply.</li>
                      <li>Additional work requires customer approval.</li>
                      <li>Diagnostic fees may apply where applicable.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    Quotes are estimates unless otherwise stated. Final charges
                    may vary if additional issues are discovered during service.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                5. Service Scheduling & Access
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Service appointments are scheduled based on technician
                  availability, business hours, location, and operational
                  capacity.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Customer Responsibilities
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>Provide an accurate service address.</li>
                    <li>Ensure someone is available during the appointment.</li>
                    <li>Provide safe and unobstructed access to equipment.</li>
                    <li>Inform us of security or access restrictions in advance.</li>
                    <li>Ensure equipment is ready for inspection or repair.</li>
                  </ul>
                </div>

                <p>
                  Delays caused by inaccessible equipment, incomplete
                  information, weather conditions, or circumstances beyond our
                  control may require appointment rescheduling.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                6. Cancellation & Rescheduling
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We understand that plans may change. Customers may cancel or
                  reschedule appointments subject to the conditions below.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Customer Requests
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Notify us as early as possible.</li>
                      <li>Advance notice helps avoid additional charges.</li>
                      <li>Repeated cancellations may affect future bookings.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Appointment Changes
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Appointments may be rescheduled due to emergencies.</li>
                      <li>Weather or operational issues may affect scheduling.</li>
                      <li>Customers will be notified whenever possible.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="font-medium text-slate-700">
                    Failure to provide access during a scheduled visit may
                    result in additional service or call-out charges.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                7. Warranty & Liability Limitations
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We strive to deliver professional and reliable services using
                  industry best practices. However, due to the nature of
                  technical services, specific outcomes cannot always be
                  guaranteed.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Service Warranty
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>Services are performed with reasonable care and skill.</li>
                    <li>Warranty terms may vary depending on the service.</li>
                    <li>Replacement parts may carry separate manufacturer warranties.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Limitation of Liability
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>We are not responsible for indirect or consequential damages.</li>
                    <li>Existing hardware or software faults remain the customer's responsibility unless directly caused by our work.</li>
                    <li>Customers should back up important files before any service appointment.</li>
                    <li>Our maximum liability shall not exceed the amount paid for the specific service where permitted by applicable law.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
                  <p className="font-medium text-slate-700">
                    Nothing in these Terms limits any legal rights that cannot
                    be excluded under applicable consumer protection laws.
                  </p>
                </div>
              </div>
            </section>

                        {/* Section 8 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                8. Intellectual Property
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  All content available on this website, including text,
                  graphics, icons, logos, images, layouts, software, and other
                  materials, is owned by <strong>Clear Path Print Solutions</strong> or its
                  licensors and is protected by applicable intellectual property
                  laws.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    You may not:
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>Copy or reproduce website content.</li>
                    <li>Modify or distribute our materials.</li>
                    <li>Use our branding without permission.</li>
                    <li>Create derivative works from our content.</li>
                    <li>Use website content for commercial purposes without written consent.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                9. User Conduct
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  You agree to use this website responsibly and in compliance
                  with all applicable laws and regulations.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Acceptable Use
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Use the website lawfully.</li>
                      <li>Provide accurate information.</li>
                      <li>Respect the rights of others.</li>
                      <li>Follow applicable regulations.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-white p-6">
                    <h3 className="font-semibold text-slate-900">
                      Prohibited Activities
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Unauthorized access attempts.</li>
                      <li>Uploading malicious software.</li>
                      <li>Scraping or automated data collection.</li>
                      <li>Impersonating another person or business.</li>
                      <li>Interfering with website functionality.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                10. Indemnification
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  You agree to defend, indemnify, and hold harmless
                  <strong> Clear Path Print Solutions </strong>
                  and its employees, affiliates, contractors, and partners from
                  claims, liabilities, losses, damages, expenses, or legal fees
                  arising from your misuse of the website, violation of these
                  Terms, or infringement of any third-party rights.
                </p>

                <p>
                  This obligation survives the termination of your use of the
                  website and services where permitted by applicable law.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                11. Governing Law & Disputes
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  These Terms shall be interpreted in accordance with the
                  applicable laws governing our business operations, without
                  regard to conflict of law principles.
                </p>

                <p>
                  We encourage customers to contact us first to resolve any
                  concerns through informal communication before pursuing formal
                  legal proceedings whenever possible.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                12. Changes to Terms
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  We may revise these Terms and Conditions from time to time to
                  reflect updates to our services, business practices, or legal
                  requirements.
                </p>

                <p>
                  Any modifications become effective once published on this page
                  with an updated effective date. Continued use of our website
                  after changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Information
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                If you have questions regarding these Terms & Conditions, please
                contact us using the information below.
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
                  Thank you for reviewing our Terms & Conditions. Your continued
                  use of our website and services indicates your acceptance of
                  these Terms. If you need clarification regarding any section,
                  our team is always happy to assist.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsAndConditions;