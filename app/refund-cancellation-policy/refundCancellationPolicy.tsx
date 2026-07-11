import React from "react";

function RefundCancellationPolicy() {
  return (
    <main className="bg-slate-100 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 py-24">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-blue-100 backdrop-blur">
            Customer Support Policy
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Refund & Cancellation Policy
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

            {/* Highlights */}
            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
                <div className="text-4xl">📅</div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Flexible Cancellation
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Cancel or reschedule eligible appointments in advance
                  without additional charges whenever applicable.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-4xl">🛠️</div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Service Assurance
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  We stand behind the quality of our workmanship and
                  will review any eligible service concerns promptly.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <div className="text-4xl">📦</div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Product Returns
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Eligible unused products may qualify for return in
                  accordance with our return requirements.
                </p>
              </div>

            </div>

            {/* Introduction */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="leading-8 text-slate-600">
                At <strong>Clear Path Print Solutions</strong>, customer satisfaction is
                important to us. This Refund & Cancellation Policy
                explains how appointment cancellations, service refunds,
                product returns, and related requests are handled.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our goal is to provide a fair and transparent process for
                both our customers and our service team. Please review
                the information below before requesting a cancellation,
                refund, or return.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">

              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                1. Service Cancellation Policy
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">

                <p>
                  We understand that schedules may change. Customers may
                  cancel or request to reschedule appointments by
                  contacting our support team as early as possible.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">

                  <table className="w-full border-collapse">

                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">
                          Cancellation Time
                        </th>

                        <th className="px-6 py-4 text-left">
                          Charges
                        </th>

                        <th className="px-6 py-4 text-left">
                          Details
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-t">
                        <td className="px-6 py-5">
                          Advance Notice
                        </td>

                        <td className="px-6 py-5 text-green-600 font-semibold">
                          Usually No Charge
                        </td>

                        <td className="px-6 py-5">
                          Appointments cancelled with sufficient notice
                          can generally be rescheduled without penalty.
                        </td>
                      </tr>

                      <tr className="border-t bg-slate-50">
                        <td className="px-6 py-5">
                          Emergency Requests
                        </td>

                        <td className="px-6 py-5 text-blue-600 font-semibold">
                          Reviewed Individually
                        </td>

                        <td className="px-6 py-5">
                          We understand unexpected situations and will
                          work with customers whenever reasonably
                          possible.
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    We encourage customers to notify us as soon as
                    possible if an appointment needs to be cancelled or
                    rescheduled. Early communication helps us serve all
                    customers more efficiently.
                  </p>
                </div>

              </div>

            </section>

                        {/* Section 2 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                2. Refund Policy for Services
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  We are committed to providing quality service and a positive
                  customer experience. If you believe a service did not meet
                  expectations, please contact our support team promptly so we
                  can review your concerns and determine an appropriate
                  resolution.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Service Review
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Report service concerns as soon as possible.</li>
                      <li>Provide relevant appointment or invoice details.</li>
                      <li>Our team will evaluate the reported issue.</li>
                      <li>Additional assistance may be provided where appropriate.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Refund Eligibility
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Each request is reviewed individually.</li>
                      <li>Refunds may be approved for eligible circumstances.</li>
                      <li>Completed services may not always qualify for refunds.</li>
                      <li>Alternative resolutions may be offered when suitable.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
                  <p className="font-medium text-slate-700">
                    Our objective is to resolve service-related concerns fairly
                    and efficiently while ensuring customer satisfaction whenever
                    reasonably possible.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                3. Refund Policy for Products & Supplies
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Returns and refunds for eligible products are handled in
                  accordance with the conditions outlined below. Returned items
                  should meet the applicable return requirements before a refund
                  or replacement can be processed.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Eligible Returns
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Unused products in their original condition.</li>
                      <li>Items returned with original packaging where applicable.</li>
                      <li>Approved returns submitted within the permitted return period.</li>
                      <li>Products that meet our inspection requirements.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Non-Eligible Returns
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Used or damaged products not caused by shipping.</li>
                      <li>Items modified after delivery.</li>
                      <li>Customized or special-order products unless defective.</li>
                      <li>Products that fail inspection for return eligibility.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Defective or Incorrect Items
                  </h3>

                  <p className="mt-4">
                    If you receive a defective, damaged, or incorrect product,
                    please notify us promptly. Once the issue has been verified,
                    we may provide a replacement, repair, store credit, or
                    refund depending on the circumstances and applicable
                    policies.
                  </p>
                </div>

                <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
                  <p className="font-medium text-slate-700">
                    Return approval may require proof of purchase and product
                    inspection before a refund or replacement is authorized.
                  </p>
                </div>
              </div>
            </section> 


                        {/* Section 4 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                4. Service Agreements
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  Customers enrolled in ongoing service plans or maintenance
                  agreements are subject to the specific terms outlined in their
                  individual service contract. Those agreements may include
                  additional provisions regarding renewals, cancellations,
                  billing, and support.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Contract Services
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Agreement terms may vary by service plan.</li>
                      <li>Renewal conditions are explained in your contract.</li>
                      <li>Cancellation requests are reviewed individually.</li>
                      <li>Additional services may require separate approval.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Customer Responsibilities
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>Review your agreement before requesting cancellation.</li>
                      <li>Maintain accurate account information.</li>
                      <li>Notify us promptly of any service concerns.</li>
                      <li>Comply with all applicable agreement terms.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:shadow-md">
              <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-bold text-slate-900">
                5. Requesting a Refund or Reporting an Issue
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-slate-600">
                <p>
                  If you would like to request a refund, report a product issue,
                  or discuss a completed service, our support team is available
                  to assist you. Providing complete information helps us review
                  your request more efficiently.
                </p>

                <div className="rounded-2xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Please include:
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>Your full name.</li>
                    <li>Appointment or order reference (if available).</li>
                    <li>Date of purchase or service.</li>
                    <li>A clear description of your concern.</li>
                    <li>Supporting photos or documents when applicable.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-medium text-slate-700">
                    Every request is reviewed individually. Our team will make
                    reasonable efforts to provide a fair and timely resolution
                    based on the information available.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#044dd9] via-blue-600 to-sky-600 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Us
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                If you have questions about this Refund & Cancellation Policy or
                need assistance with a refund, return, or cancellation request,
                please contact our support team.
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

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-center text-sm leading-7 text-blue-100">
                  We value your trust and are committed to handling refund,
                  cancellation, and return requests fairly, transparently, and
                  as quickly as possible. Thank you for choosing our services.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default RefundCancellationPolicy;