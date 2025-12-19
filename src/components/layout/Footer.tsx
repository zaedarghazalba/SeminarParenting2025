import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <img
                            src="/logo-eduprima.png"
                            alt="EduPrima"
                            className="h-9 w-auto object-contain invert mix-blend-screen"
                        />
                        <p className="text-sm opacity-90">
                            Platform belajar dan seminar terbaik untuk masa depan karir Anda.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Program</h4>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li><Link href="#">Seminar Online</Link></li>
                            <li><Link href="#">Bootcamp</Link></li>
                            <li><Link href="#">Workshop</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Bantuan</h4>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Kontak Kami</Link></li>
                            <li><Link href="#">Syarat & Ketentuan</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:opacity-80"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:opacity-80"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:opacity-80"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:opacity-80"><Youtube size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
                    &copy; {new Date().getFullYear()} EduPrima. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
