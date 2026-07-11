import {
  Wrench,
  Settings,
  Wifi,
  Printer,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Printer Repair",
    description:
      "Quick solutions for paper jams, print quality issues, hardware faults, and printer errors.",
  },
  {
    icon: Settings,
    title: "Installation & Setup",
    description:
      "Professional printer installation, driver setup, wireless configuration, and complete device setup.",
  },
  {
    icon: Wifi,
    title: "Network Configuration",
    description:
      "Connect printers securely to Wi-Fi, shared networks, and multiple computers with ease.",
  },
  {
    icon: Printer,
    title: "Maintenance Service",
    description:
      "Routine inspections, cleaning, and maintenance to keep your printer performing efficiently.",
  },
  {
    icon: ClipboardCheck,
    title: "Printer Diagnostics",
    description:
      "Accurate troubleshooting to identify printer issues and restore smooth operation quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Business Support",
    description:
      "Reliable onsite printer solutions designed for offices, schools, and commercial environments.",
  },
];

function WhatWeDo() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#044dd9]">
            WHAT WE DO
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Complete Printer{" "}
            <span className="text-[#044dd9]">Service Solutions</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Professional onsite printer installation, maintenance,
            troubleshooting, networking, and business support services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                {/* Icon */}
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#044dd9]">
                  <Icon
                    className="h-8 w-8 text-white"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="mt-7 h-px w-full bg-slate-200" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;