"use client";

import { motion } from "framer-motion";
import { Check, Heart, Brain, Lightbulb } from "lucide-react";

const benefits = [
    {
        icon: Brain,
        title: "Memahami Karakter Anak",
        desc: "Pelajari cara kerja otak dan emosi anak untuk pendekatan yang lebih efektif."
    },
    {
        icon: Heart,
        title: "Koneksi Emosional",
        desc: "Bangun ikatan batin yang kuat agar anak merasa aman dan dicintai."
    },
    {
        icon: Lightbulb,
        title: "Menggali Potensi",
        desc: "Teknik identifikasi bakat dan minat anak sejak dini."
    },
];

export function EventDetails() {
    return (
        <section className="py-24 bg-white" id="details">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Seminar Ini Penting?</h2>
                    <p className="text-lg text-slate-600">
                        Menjadi orang tua adalah tugas mulia sekaligus menantang. Di seminar ini, kita akan bedah tuntas bagaimana membuka potensi tersembunyi anak melalui pendekatan emosional yang tepat.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-2xl p-8 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100"
                        >
                            <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600 mb-6">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-teal-50 rounded-3xl p-8 md:p-12 overflow-hidden relative border border-teal-100">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Manfaat / Output Seminar
                        </h3>

                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            {/* For Parents */}
                            <div>
                                <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center gap-2">
                                    <Heart className="h-5 w-5" /> Bagi Orang Tua
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Memahami emosi dan karakter anak.",
                                        "Menguasai teknik Emotional Coaching sederhana.",
                                        "Mendapatkan insight mengenai potensi dan gaya belajar anak.",
                                        "Meningkatkan kualitas pendampingan belajar di rumah."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                                                <Check className="h-3.5 w-3.5" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* For Children */}
                            <div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                                    <Brain className="h-5 w-5" /> Bagi Anak
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Mengenal emosi diri dan cara mengekspresikannya.",
                                        "Menemukan minat dan potensi awal melalui mini assessment.",
                                        "Memahami gaya belajar pribadi."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                                                <Check className="h-3.5 w-3.5" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
