import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Easy Appointment Booking",
    description:
      "Choose a convenient schedule that fits your home or office needs.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced Professionals",
    description:
      "Skilled technicians providing dependable printer support and setup.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Quality assistance focused on resolving issues efficiently and correctly.",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description:
      "Clear communication and responsive assistance throughout your service.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-slate-50 section-space">
      <div className="section-shell">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <Image
                src="/why-choose.webp"
                alt="Why Choose Clear Path Print Solutions"
                width={700}
                height={650}
                className="h-[520px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}

          {/* Content */}

          <div className="order-1 lg:order-2">
            <span className="eyebrow">
              Why Choose Us
            </span>

            <h2 className="text-h2 mt-5 text-slate-900">
              Trusted Printer
              <span className="text-blue-600"> Support</span>
            </h2>

            <p className="text-body mt-6 max-w-xl text-slate-600">
              We make printer service simple with convenient appointments,
              experienced technicians, and dependable onsite assistance for
              homes and businesses.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Convenient Appointment Scheduling",
                "Experienced Service Professionals",
                "Fast & Reliable Onsite Assistance",
                "Friendly Customer Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    ✓
                  </div>

                  <span className="font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/book-an-appointment/"
              className="btn-primary mt-8"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;