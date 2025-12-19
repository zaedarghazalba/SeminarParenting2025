"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const schedules = [
    {
        id: 0,
        title: "Seminar Parenting: Unlocking Children's Potential and Emotions",
        date: "Sabtu, 20 Desember 2025",
        time: "09:00 - 12:00 WIB",
        location: "Internet Learning Cafe Timoho, Yogyakarta",
        category: "Parenting",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&auto=format&fit=crop&q=60" // Valid Unsplash Image
    },
    {
        id: 1,
        title: "Leadership & Management Skills",
        date: "20-21 Desember 2025",
        time: "09:00 - 16:00 WIB",
        location: "Online via Zoom",
        category: "Management",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Digital Marketing Strategy",
        date: "24 Desember 2025",
        time: "13:00 - 16:00 WIB",
        location: "Online via Zoom",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Financial Planning for Business",
        date: "5 Januari 2026",
        time: "09:00 - 15:00 WIB",
        location: "Hotel Amaris, Jakarta",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60"
    },
];

export function Schedule() {
    return (
        <section id="jadwal" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Jadwal Training Terbaru</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Temukan jadwal pelatihan yang sesuai dengan kebutuhan pengembangan karir Anda bulan ini.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {schedules.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 overflow-hidden"
                        >
                            {/* Decorative top bar */}
                            <div className="h-2 w-full bg-gradient-to-r from-primary to-teal-400"></div>

                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                    <span className="text-xs font-medium text-slate-400">Upcoming</span>
                                </div>

                                <h3 className="mb-6 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <div className="mt-auto space-y-4">
                                    <div className="flex items-start gap-3 text-sm text-slate-600">
                                        <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-slate-900">Tanggal</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 text-sm text-slate-600">
                                        <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-slate-900">Waktu</p>
                                            <p>{item.time}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 text-sm text-slate-600">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-slate-900">Lokasi</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25">
                                        Daftar Training
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
