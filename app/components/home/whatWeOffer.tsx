import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <section className="bg-white section-space">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}

       {/* Left */}

<div>
  <span className="eyebrow">
    What We Offer
  </span>

  <h2 className="text-h2 mt-5 text-slate-900">
    Complete Printer
    <span className="text-blue-600"> Service</span>
    <br />
    Solutions
  </h2>

  <p className="text-body mt-6 text-slate-600">
    From new printer installation and wireless setup to troubleshooting,
    maintenance, and repair assistance, we provide dependable onsite printer
    services for homes, offices, and businesses.
  </p>

  <p className="text-body mt-5 text-slate-600">
    Our appointment-based support makes it easy to get professional assistance
    whenever you need help with setup, connectivity, performance, or everyday
    printer issues.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">
    <Link
      href="/book-an-appointment/"
      className="btn-primary"
    >
      Book Appointment
    </Link>

    <Link
      href="/services/"
      className="btn-secondary"
    >
      View Services
    </Link>
  </div>
</div>

        {/* Right */}

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-2xl">
            <Image
              src="/what-we-offer.webp"
              alt="Printer Support"
              width={700}
              height={650}
              className="h-[520px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;