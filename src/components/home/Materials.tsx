"use client";

import { motion } from "framer-motion";
import { FileText, Download, PlayCircle, ArrowRight } from "lucide-react";

const materials = [
    {
        id: 1,
        title: "Modul Dasar Kepemimpinan",
        type: "PDF",
        size: "2.4 MB",
        icon: FileText,
    },
    {
        id: 2,
        title: "Video: Strategi Marketing 2025",
        type: "Video",
        duration: "45 min",
        icon: PlayCircle,
    },
    {
        id: 3,
        title: "Template Laporan Keuangan",
        type: "XLSX",
        size: "1.1 MB",
        icon: FileText,
    },
    {
        id: 4,
        title: "Best Practice HR Management",
        type: "PDF",
        size: "5.2 MB",
        icon: FileText,
    },
];

export function Materials() {
    return (
        <section id="materi" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Materi Pembelajaran</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Akses materi eksklusif, modul pembelajaran, dan video rekaman seminar sebelumnya.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center text-primary font-semibold hover:underline">
                        Lihat Semua Materi <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {materials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-start rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon className="h-7 w-7" />
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.type}</span>
                                    <span className="text-xs text-slate-400">{item.size || item.duration}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-4">
                                    {item.title}
                                </h3>
                            </div>

                            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all group-hover:bg-secondary/30">
                                <Download className="h-4 w-4" />
                                Download
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline">
                        Lihat Semua Materi <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
