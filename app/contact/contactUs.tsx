import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

function ContactUs() {
    return (
        <section className="bg-slate-50 section-space">
            <div className="section-shell grid gap-12 lg:grid-cols-2">
                {/* Left Side */}
                <div>
                    <span className="eyebrow">
                        Contact Us
                    </span>

                    <h2 className="text-h2 mt-5 text-slate-900">
                        Let's Get Your
                        <span className="text-[#044dd9]"> Printer Running</span>
                    </h2>

                    <p className="text-body mt-5 max-w-lg text-slate-600">
                        Need installation, troubleshooting, maintenance or printer setup?
                        Send us your request and our team will contact you shortly.
                    </p>

                    <div className="mt-10 space-y-5">
                        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                            <div className="rounded-xl bg-blue-50 p-3 text-[#044dd9]">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <h3 className="text-h4 text-slate-900">
                                    Service Location
                                </h3>

                                <p className="text-small mt-1 text-slate-600">
                                    17807 Lakecrest View Drive, #1205
                                    <br />
                                    Cypress, TX 77433
                                    <br />
                                    United States
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                            <div className="rounded-xl bg-blue-50 p-3 text-[#044dd9]">
                                <Mail size={22} />
                            </div>

                            <div>
                                <h3 className="text-h4 text-slate-900">
                                    Email
                                </h3>

                                <p className="text-small mt-1 text-slate-600">
                                    support@clearpathprintsolutions.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                            <div className="rounded-xl bg-blue-50 p-3 text-[#044dd9]">
                                <Clock size={22} />
                            </div>

                            <div>
                                <h3 className="text-h4 text-slate-900">
                                    Working Hours
                                </h3>

                                <p className="text-small mt-1 text-slate-600">
                                    Monday – Saturday <br />
                                    9:00 AM – 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:p-10">
                    <div className="mb-8">
                        

                        

                        <p className="text-body mt-2 text-slate-600">
                            Fill in your details and our team will contact you shortly.
                        </p>
                    </div>

                    <form className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="text-label mb-2 block text-slate-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Smith"
                                className="text-input h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 placeholder:text-slate-400 focus:border-[#044dd9] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="text-label mb-2 block text-slate-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="text-input h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 placeholder:text-slate-400 focus:border-[#044dd9] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label className="text-label mb-2 block text-slate-700">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    className="text-input h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 placeholder:text-slate-400 focus:border-[#044dd9] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                                />
                            </div>
                        </div>

                        {/* Printer */}
                        <div>
                            <label className="text-label mb-2 block text-slate-700">
                                Printer Brand / Model
                            </label>

                            <input
                                type="text"
                                placeholder="HP LaserJet Pro M404dn"
                                className="text-input h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 placeholder:text-slate-400 focus:border-[#044dd9] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-label mb-2 block text-slate-700">
                                Describe Your Requirement
                            </label>

                            <textarea
                                rows={6}
                                placeholder="Tell us what service you need or describe your printer issue..."
                                className="text-input w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-[#044dd9] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full py-4 cursor-pointer"
                        >
                            Book Service
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;