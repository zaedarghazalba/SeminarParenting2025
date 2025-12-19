"use client";

import { MapPin } from "lucide-react";

export function Location() {
    return (
        <section className="py-24 bg-slate-50" id="location">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl bg-white p-4 shadow-sm border border-slate-100">
                    <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                        {/* Note: In a real app, embed Google Maps iframe here */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                            <p className="text-slate-400 font-medium flex flex-col items-center gap-2">
                                <MapPin className="h-8 w-8" />
                                Google Maps Area
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9967667140936!2d110.3908889!3d-7.7901389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59e18b1c28d1%3A0x3d6b3b28b6b6b6b6!2sYogyakarta!5e0!3m2!1sen!2sid!4v1625555555555!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                    <div className="p-4 md:p-8">
                        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-700 mb-6">
                            LOKASI ACARA
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Internet Learning Cafe Timoho</h2>

                        <div className="space-y-6 text-slate-600">
                            <p>
                                Tempat yang nyaman dan kondusif untuk belajar. Dilengkapi dengan fasilitas modern untuk mendukung pengalaman seminar yang optimal.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-900 mb-1">Alamat Lengkap</strong>
                                        Jl. Ipda Tut Harsono, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165
                                        <br />
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Internet+Learning+Cafe+Timoho"
                                target="_blank"
                                className="inline-flex items-center text-teal-600 font-semibold hover:underline mt-4"
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
