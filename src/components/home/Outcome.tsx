"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
    "Meningkatkan kompetensi profesional di bidangnya",
    "Mendapatkan sertifikasi yang diakui secara nasional",
    "Memperluas jaringan networking dengan profesional lain",
    "Akses materi pembelajaran seumur hidup",
    "Kesempatan konsultasi dengan para ahli",
    "Update tren industri terbaru dan best practices",
];

export function Outcome() {
    return (
        <section id="outcome" className="relative py-24 overflow-hidden bg-slate-900">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[128px]"></div>
                <div className="absolute -right-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[128px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 mb-6 border border-teal-500/20">
                            Why Choose Us?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            Outcome Program
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Program pelatihan kami dirancang secara teliti untuk memberikan dampak jangka panjang bagi karir peserta dan pertumbuhan organisasi.
                        </p>

                        <div className="space-y-4">
                            {outcomes.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-teal-400">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-lg">{benefit}</h4>
                                        <p className="text-sm text-slate-400 mt-1">Mendukung peningkatan karir Anda.</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-2xl ring-1 ring-white/10">
                            <div className="h-full w-full rounded-[20px] bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
                                <div className="absolute inset-0 bg-primary/10 bg-[radial-gradient(#026c7a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                                <div className="relative z-10">
                                    <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">100+</div>
                                    <div className="text-xl text-teal-400 font-medium mt-2">Perusahaan Terpercaya</div>
                                    <p className="mt-4 text-slate-400 max-w-xs mx-auto">
                                        Telah mempercayakan pelatihan SDM mereka kepada EduPrima.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 -top-8 z-20 rounded-2xl bg-white p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span className="font-bold text-slate-900">Sertifikasi Resmi</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
