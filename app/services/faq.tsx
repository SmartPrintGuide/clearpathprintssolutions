"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What printer services do you provide?",
    answer:
      "We provide onsite printer installation, setup, troubleshooting, maintenance, wireless configuration, driver support, and repair services for homes and businesses.",
  },
  {
    question: "How do I book a printer service appointment?",
    answer:
      "Simply choose your required service, complete the appointment form, and select a convenient date and time. Our team will contact you to confirm your booking.",
  },
  {
    question: "Do you provide onsite printer support?",
    answer:
      "Yes. Our technicians visit your location to perform installation, setup, maintenance, and troubleshooting without requiring you to transport your printer.",
  },
  {
    question: "Which printer brands do you support?",
    answer:
      "We support most major printer brands including HP, Canon, Epson, Brother, Lexmark, Xerox, Ricoh, Samsung, and many other inkjet and laser printers.",
  },
  {
    question: "Can I schedule a service for my office?",
    answer:
      "Absolutely. We provide printer services for homes, offices, schools, and businesses, with appointment times designed to fit your schedule.",
  },
  {
    question: "How long does a typical service take?",
    answer:
      "Most appointments are completed within 30–90 minutes depending on the type of service and the condition of your printer.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#044dd9]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Have Questions?
            <span className="text-[#044dd9]"> We've Got Answers</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find answers to the most common questions about our onsite printer
            services and appointment process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 cursor-pointer">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden cursor-pointer rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold cursor-pointer text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#044dd9] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-6 py-5 text-[15px] leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;