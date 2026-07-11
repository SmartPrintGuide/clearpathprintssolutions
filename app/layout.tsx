import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clearpathprintsolutions.com"),
  title: {
    default: "Clear Path Print Solutions | Professional Printer Setup & Support",
    template: "%s | Clear Path Print Solutions",
  },
  description:
    "Clear Path Print Solutions delivers dependable printer setup, troubleshooting, maintenance, and on-site support for homes and businesses.",
  keywords: [
    "printer support",
    "printer setup",
    "printer repair",
    "wireless printer setup",
    "on-site printer service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clear Path Print Solutions | Professional Printer Setup & Support",
    description:
      "Book expert printer support for installation, maintenance, troubleshooting, and wireless setup.",
    url: "https://clearpathprintsolutions.com",
    siteName: "Clear Path Print Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Path Print Solutions | Professional Printer Setup & Support",
    description:
      "Fast, reliable printer support for homes and offices with expert on-site service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Clear Path Print Solutions" }],
  applicationName: "Clear Path Print Solutions",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#044dd9",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clear Path Print Solutions",
  url: "https://clearpathprintsolutions.com",
  logo: "https://clearpathprintsolutions.com/clear-path-prints-solutions-logo.png",
  sameAs: ["https://www.linkedin.com/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@clearpathprintsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <ScrollToTop />
        <Header />

        <main className="flex-1">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Footer />
      </body>
    </html>
  );
}