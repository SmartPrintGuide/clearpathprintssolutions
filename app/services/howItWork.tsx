import {
  PhoneCall,
  ClipboardCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Request Service",
    description:
      "Book your onsite printer service online or contact our support team.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Schedule Visit",
    description:
      "Choose a convenient appointment time that fits your schedule.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Onsite Assistance",
    description:
      "Our technician arrives with the tools needed to diagnose and resolve the issue.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Service Complete",
    description:
      "Your printer is tested, optimized, and ready for reliable everyday use.",
  },
];

function HowItWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#044dd9]">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Easy Service in
            <span className="text-[#044dd9]"> Four Steps</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A simple process designed to provide fast, reliable onsite printer
            support from start to finish.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  {/* Number */}
                  <div className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#044dd9]">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#044dd9]" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;