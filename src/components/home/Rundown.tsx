"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const rundownData = [
    { time: "09:00 - 09:15", duration: "15'", activity: "Pembukaan & Ice Breaking" },
    { time: "09:15 - 10:00", duration: "45'", activity: "Sesi 1: Parenting Session & Diskusi Interaktif" },
    { time: "10:00 - 10:30", duration: "30'", activity: "Sesi 2: Emotional Coaching Practice" },
    { time: "10:30 - 11:15", duration: "45'", activity: "Sesi 3: Student Session & Diskusi Interaktif" },
    { time: "11:15 - 11:30", duration: "15'", activity: "Pengenalan Tes Minat Bakat" },
    { time: "11:30 - 11:45", duration: "15'", activity: "Closing & Dokumentasi" },
];

export function Rundown() {
    return (
        <section id="rundown" className="pt-0 pb-24 md:pt-4 md:pb-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                        JADWAL KEGIATAN
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Rundown Acara
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Susunan kegiatan seminar yang telah kami persiapkan untuk Anda.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-12 bg-slate-900 text-white py-4 px-6 text-sm font-semibold uppercase tracking-wider">
                        <div className="col-span-3 md:col-span-2">Waktu</div>
                        <div className="col-span-2 md:col-span-1 text-center">Durasi</div>
                        <div className="col-span-7 md:col-span-9 pl-4">Aktivitas</div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {rundownData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-12 py-4 px-6 hover:bg-slate-50 transition-colors"
                            >
                                <div className="col-span-3 md:col-span-2 flex items-center text-sm font-medium text-primary">
                                    <Clock className="h-3.5 w-3.5 mr-2 shrink-0" />
                                    {item.time}
                                </div>
                                <div className="col-span-2 md:col-span-1 flex items-center justify-center text-sm text-slate-400 font-mono">
                                    {item.duration}
                                </div>
                                <div className="col-span-7 md:col-span-9 pl-4 text-sm text-slate-700 font-medium">
                                    {item.activity}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
