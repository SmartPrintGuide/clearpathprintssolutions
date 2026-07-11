import {
  CalendarDays,
  ClipboardCheck,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Request a Service",
    description:
      "Tell us about your printer issue or setup requirement through our quick booking form.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Schedule Appointment",
    description:
      "Choose a convenient date and time that fits your schedule for an onsite visit.",
    icon: CalendarDays,
  },
  {
    step: "03",
    title: "Onsite Printer Support",
    description:
      "A certified technician visits your location to diagnose, install, or repair your printer.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Service Completed",
    description:
      "We verify everything is working perfectly before completing the service.",
    icon: BadgeCheck,
  },
];

const Steps = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 section-space">
      <div className="section-shell">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="eyebrow">
            How It Works
          </span>

          <h2 className="text-h2 mt-5 text-slate-900">
            Simple Process,
            <span className="text-blue-600"> Professional Results</span>
          </h2>

          <p className="text-body mt-6 text-slate-600">
            Booking an onsite printer service is quick and hassle-free. Follow
            these four simple steps to get professional assistance.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Connector Line */}

          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-slate-200 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
                >
                  {/* Step */}

                  <div className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 transition group-hover:text-blue-100">
                    {item.step}
                  </div>

                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#044dd9] text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  {/* Content */}

                  <div className="relative z-10 mt-8">
                    <h3 className="text-h3 text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-body mt-4 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Step {item.step}

                    <div className="h-[2px] flex-1 bg-blue-200 transition-all duration-300 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;