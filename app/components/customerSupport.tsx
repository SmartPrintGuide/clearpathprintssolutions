import React from 'react';
import Image from 'next/image';

function CustomerSupport() {
  return (
    <section className="section-shell py-12">
      {/* Outer Card Wrapper */}
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm md:p-10 lg:p-14">
        
        {/* Two Column Layout Grid */}
        <div className="grid items-center gap-8 md:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Text & Content (Takes 7 of 12 columns on desktop) */}
          <div className="order-2 flex flex-col items-start md:order-1 md:col-span-7 lg:col-span-6">
            
            {/* Main Headline */}
            <h2 className="text-xl font-bold leading-snug text-[#044dd9] sm:text-2xl lg:text-3xl">
              Still Need Help with Your Printer Setup, Offline Issues & Troubleshooting?
            </h2>
            
            {/* Description Paragraph */}
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base lg:mt-6 lg:leading-loose">
              If you are still facing layout setup bugs or performance issues after completing these steps, 
              our certified support team is standing by to assist. Connect with our online support desk 
              for immediate troubleshooting, configurations, and reliable fixes to get your system operational.
            </p>
            
            {/* CTA Button */}
            <button 
              type="button" 
              className="mt-6 cursor-pointer rounded-full bg-[#1e5ef2] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] lg:mt-8 lg:px-8"
            >
              Click for Live Chat Assistance
            </button>
          </div>

          {/* Right Column: Image Wrapper (Takes 5 of 12 columns on desktop) */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/curtomer-support.jpg" 
                alt="Customer support representative providing printer assistance"
                fill
                sizes="(max-w-768px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CustomerSupport;