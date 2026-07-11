import Link from "next/link";
import {
  Wrench,
  Printer,
  ShieldCheck,
  Wifi,
  Building2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Printer Repair",
    description:
      "Fast diagnosis and professional repair services to restore your printer's performance.",
    icon: Wrench,
  },
  {
    title: "Printer Installation",
    description:
      "Complete setup and configuration for home and office printers with expert assistance.",
    icon: Printer,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Routine maintenance to improve reliability, reduce downtime and extend printer life.",
    icon: ShieldCheck,
  },
  {
    title: "Wireless Setup",
    description:
      "Connect your printer to Wi-Fi, laptops, desktops and mobile devices quickly.",
    icon: Wifi,
  },
  {
    title: "Business Solutions",
    description:
      "Reliable printer deployment and support designed for offices and business environments.",
    icon: Building2,
  },
  {
    title: "Consultation",
    description:
      "Professional guidance to help choose the right printer setup and support solution.",
    icon: ClipboardCheck,
  },
];

const Category = () => {
  return (
    <section className="bg-slate-50 section-space">
      <div className="section-shell">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">
            Our Services
          </span>

          <h2 className="text-h2 mt-5 text-slate-900">
            Explore Printer
            <span className="text-blue-600"> Solutions</span>
          </h2>

          <p className="text-body mt-5 text-slate-600">
            Professional printer installation, troubleshooting, maintenance,
            wireless setup and business support designed for home and office
            users.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Background Glow */}

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#044dd9] text-white shadow-lg">
                  <Icon size={30} />
                </div>

                {/* Content */}

                <div className="relative z-10">
                  <h3 className="text-h3 mb-3 text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-body text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href="/book-an-appointment/"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#044dd9] transition group-hover:gap-3"
                  >
                    Book Appointment
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;