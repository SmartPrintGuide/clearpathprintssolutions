import React from "react";
import {
  Clock3,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  CalendarDays,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "Quick appointment scheduling with timely onsite printer assistance.",
  },
  {
    icon: MapPin,
    title: "Onsite Service",
    description:
      "Our technicians visit your home or office—no need to carry your printer.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Support",
    description:
      "Reliable solutions delivered with care, professionalism, and attention.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description:
      "Experienced technicians handling setup, repair, and maintenance services.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Booking",
    description:
      "Choose a convenient appointment time that fits your daily schedule.",
  },
  {
    icon: Headphones,
    title: "Customer First",
    description:
      "Friendly support focused on making every service visit simple and stress-free.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-[#044dd9]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Reliable Printer Service
            <span className="block text-[#044dd9]">
              You Can Count On
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We deliver dependable onsite printer solutions with experienced
            technicians, convenient scheduling, and professional service every
            step of the way.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#044dd9]">
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50 px-8 py-6 text-center">
          <p className="text-lg font-semibold text-slate-900">
            Professional Service • Certified Technicians • Onsite Support •
            Flexible Appointments
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;