"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    { label: "Detail", href: "#details" },
    { label: "Rundown", href: "#rundown" },
    { label: "Materi & Kuis", href: "#resources" },
    { label: "Lokasi", href: "#location" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo-eduprima.png"
                        alt="EduPrima Logo"
                        className="h-10 w-auto object-contain mix-blend-multiply contrast-125"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors hover:bg-slate-50 px-3 py-2 rounded-md"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-white p-4 space-y-4">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm font-medium text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
