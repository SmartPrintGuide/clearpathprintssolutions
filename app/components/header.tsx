"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const normalizedPathname = pathname?.endsWith("/") ? pathname : `${pathname}/`;

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services/" },
        { name: "Book an Appointment", href: "/book-an-appointment/" },
        { name: "Contact", href: "/contact/" },
    ];

    return (
        <header className="relative z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group flex items-center">
                    <div className="flex items-center justify-center overflow-hidden transition duration-300 group-hover:scale-105">
                        <Image
                            src="/clear-path-prints-solutions-logo.png"
                            alt="Clear Path Print Solutions Logo"
                            width={112}
                            height={63}
                            className="h-full w-full object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => {
                        const active = normalizedPathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative py-2 text-[15px] font-semibold transition-all duration-300 ${active
                                        ? "text-blue-600"
                                        : "text-slate-700 hover:text-blue-600"
                                    }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {item.name}

                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />

                                {!active && (
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 hover:w-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-slate-800 hover:text-blue-600 transition hover:bg-slate-100 md:hidden"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-[500px] pb-4" : "max-h-0"
                    }`}
            >
                <div className="mx-4 rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <nav className="flex flex-col p-2">
                        {navItems.map((item) => {
                            const active = normalizedPathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-base font-semibold transition-all ${active
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                                        }`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;