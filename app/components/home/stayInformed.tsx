'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

function StayInformed() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribed' | 'error'>('idle');

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('subscribed');
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-[#044dd9] section-space">
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-700 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md sm:text-sm">
          <Mail size={16} />
          Stay Informed
        </div>

        {/* Heading */}
        <h2 className="text-h2 mt-6 text-white">
          Get Printer Tips &
          <span className="block text-blue-200">
            Exclusive Service Updates
          </span>
        </h2>

        {/* Description */}
        <p className="text-body mx-auto mt-5 max-w-2xl text-blue-100">
          Subscribe to receive printer setup tips, maintenance guides,
          troubleshooting advice, and exclusive updates delivered directly to
          your inbox.
        </p>

        {/* Subscribe Box */}
        <form
          className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl sm:flex-row sm:gap-4 sm:p-4"
          onSubmit={handleSubscribe}
        >
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            type="email"
            placeholder="Enter your email address"
            className="h-12 w-full rounded-2xl border border-white/20 bg-white px-4 text-input text-slate-800 outline-none transition focus:border-blue-400 sm:h-14 sm:px-5"
          />

          <button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-2xl bg-white px-6 font-semibold text-[#044dd9] transition hover:bg-blue-50 sm:h-14 sm:w-auto sm:px-8"
          >
            Subscribe
          </button>
        </form>

        {status === 'subscribed' ? (
          <p className="mt-4 text-sm font-semibold text-emerald-200">
            You’re subscribed! Enjoy printer tips and updates.
          </p>
        ) : status === 'error' ? (
          <p className="mt-4 text-sm font-semibold text-red-200">
            Please enter a valid email address to subscribe.
          </p>
        ) : null}

        {/* Privacy */}
        <p className="text-small mt-5 text-blue-100">
          No spam. Unsubscribe anytime. We respect your privacy and never share
          your information.
        </p>
      </div>
    </section>
  );
}

export default StayInformed;