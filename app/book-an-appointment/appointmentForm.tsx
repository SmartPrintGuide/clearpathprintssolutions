'use client';

import { useState } from 'react';
import Image from 'next/image';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [printerModel, setPrinterModel] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'appointment',
          name,
          email,
          phone,
          printerModel,
          message,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send appointment request.');
      }

      setStatus('Your appointment request has been sent successfully.');
      setName('');
      setEmail('');
      setPhone('');
      setPrinterModel('');
      setMessage('');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Failed to send appointment request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="appointmentForm"
      className="scroll-mt-24 bg-slate-50 section-space"
    >
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Form */}
          <div className="rounded-[1.5rem] bg-white p-7 shadow-lg shadow-slate-200/50 sm:p-8">
            <h2 className="text-h2 text-slate-900">
              Book an Appointment
            </h2>

            <p className="text-body mt-3 text-slate-600">
              Fill out the form and our support team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Printer Model Number
                </label>
                <input
                  value={printerModel}
                  onChange={(event) => setPrinterModel(event.target.value)}
                  type="text"
                  placeholder="e.g. HP LaserJet Pro M404dn"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  placeholder="Tell us more about your printer issue or service request..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {status ? <p className="text-sm text-slate-700">{status}</p> : null}

              <button
                type="submit"
                className="btn-primary w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Appointment Request'}
              </button>
            </form>
          </div>

  
          {/* Image Side */}
          <div className="relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl">

              <Image
                src="/what-we-offer.webp"
                alt="Printer Service"
                width={550}
                height={550}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />



            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;