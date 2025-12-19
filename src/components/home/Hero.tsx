"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-teal-500/10 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                <div className="absolute left-0 bottom-0 h-[600px] w-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
                            Seminar Parenting Eksklusif
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Unlocking Children's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-primary">
                                Potential & Emotions
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Temukan kunci untuk memahami emosi anak dan membuka potensi terbaik mereka bersama para ahli di bidangnya.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-primary">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">Sabtu</div>
                                    <div className="text-sm text-slate-500">20 Des 2025</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">09.00 - 12.00</div>
                                    <div className="text-sm text-slate-500">WIB</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">Yogyakarta</div>
                                    <div className="text-sm text-slate-500">Internet Learning Cafe</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full"
                    >
                        <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Using a parenting/child related placeholder image */}
                            <img
                                src="/banner-seminar.png"
                                alt="Seminar Parenting: Unlocking Children's Potential"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl bg-teal-200/50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
