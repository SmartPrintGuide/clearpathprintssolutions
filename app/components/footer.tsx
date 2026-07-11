import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-20 w-56 shrink-0">
                <Image
                  src="/clear-path-prints-solutions-logo-footers.png"
                  alt="Clear Path Print Solutions Logo"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Clear Path Print Solutions offers easy printer setup, Wi-Fi configuration,
              driver installation and troubleshooting guides to help users keep
              their printers running smoothly.
            </p>
          </div>

          {/* Mobile: Company & Support in one row */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {/* Company */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Company
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/"
                    className="hover:text-blue-400 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-an-appointment/"
                    className="hover:text-blue-400 transition"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="hover:text-blue-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Support
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="hover:text-blue-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions/"
                    className="hover:text-blue-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy/"
                    className="hover:text-blue-400 transition"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer/"
                    className="hover:text-blue-400 transition"
                  >
                    Disclaimer
                  </Link>
                </li>

                <li>
                  <Link
                    href="/refund-cancellation-policy/"
                    className="hover:text-blue-400 transition"
                  >
                    Refund cancellation policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>support@clearpathprintsolutions.com</p>

              <p className="leading-7">
                17807 Lakecrest View Drive, #1205
                <br />
                Cypress, TX 77433
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-500">
              Clear Path Print Solutions
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/privacy-policy/"
              className="hover:text-blue-400 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms-and-conditions/"
              className="hover:text-blue-400 transition"
            >
              Terms
            </Link>

            <Link
              href="/contact/"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;