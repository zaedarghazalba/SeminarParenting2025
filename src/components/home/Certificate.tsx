"use client";

import { motion } from "framer-motion";
import { Award, Download, ExternalLink, CheckCircle } from "lucide-react";

export function Certificate() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <p className="text-sm font-semibold text-primary-foreground flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                SERTIFIKAT KEIKUTSERTAAN
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Dapatkan Sertifikat Resmi
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Unduh sertifikat keikutsertaan seminar sebagai bukti partisipasi Anda dalam program pengembangan parenting
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Certificate Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-primary/20">
                                <div className="text-center space-y-4">
                                    <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center">
                                        <Award className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                                            Certificate of Participation
                                        </p>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            Sertifikat Keikutsertaan
                                        </h3>
                                        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                                        <p className="text-slate-600 text-sm">
                                            Seminar Parenting:<br />
                                            <span className="font-semibold">Unlocking Children's Potential & Emotions</span>
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200">
                                        <p className="text-xs text-slate-500">
                                            Diselenggarakan oleh <span className="font-semibold text-primary">EduPrima</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Corner */}
                            <div className="absolute -top-3 -right-3 h-24 w-24 bg-gradient-to-br from-primary to-teal-600 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-3 -left-3 h-24 w-24 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full opacity-20 blur-xl"></div>
                        </motion.div>

                        {/* CTA & Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Benefits */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Manfaat Sertifikat:
                                </h3>
                                {[
                                    "Bukti resmi keikutsertaan seminar",
                                    "Dapat digunakan untuk portofolio profesional",
                                    "Menunjukkan komitmen pengembangan diri",
                                    "Format digital siap cetak"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-slate-300 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a
                                    href="https://drive.google.com/drive/folders/1-your-certificate-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-gradient-to-r from-primary to-teal-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <Download className="h-6 w-6 group-hover:animate-bounce" />
                                    <span className="text-lg">Unduh Sertifikat</span>
                                    <ExternalLink className="h-5 w-5 opacity-75" />
                                </a>
                                <p className="text-center text-sm text-slate-400 mt-3">
                                    File akan terbuka di Google Drive
                                </p>
                            </div>

                            {/* Note */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    <span className="font-semibold text-white">💡 Catatan:</span> Pastikan Anda telah mengisi form kehadiran untuk mendapatkan sertifikat dengan nama Anda.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
