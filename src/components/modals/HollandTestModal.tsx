"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Lightbulb, ExternalLink } from "lucide-react";

interface HollandTestModalProps {
    isOpen: boolean;
    onClose: () => void;
    testLink: string;
}

export function HollandTestModal({ isOpen, onClose, testLink }: HollandTestModalProps) {
    const handleProceed = () => {
        window.open(testLink, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl my-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary to-teal-600 p-4 sm:p-6 md:p-8 text-white relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 pr-8">
                                    Tes Minat Bakat Holland (RIASEC)
                                </h2>
                                <p className="text-sm sm:text-base text-white/90">
                                    Kenali potensi dan preferensi karir Anda
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[70vh] sm:max-h-[75vh]">
                                {/* Tujuan */}
                                <div className="mb-6 sm:mb-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg sm:text-xl text-slate-900">🎯 Tujuan Tes</h3>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                                            Tes Holland (RIASEC) adalah alat asesmen untuk membantu siswa memahami minat karier dan kesesuaian profesi berdasarkan kecenderungan minat pribadi.
                                        </p>
                                        <div className="space-y-2 sm:space-y-3">
                                            {[
                                                "Membantu siswa mengenal potensi dan preferensi karir mereka",
                                                "Memberikan gambaran umum tentang tipe pekerjaan atau bidang studi yang cocok",
                                                "Mendukung pengambilan keputusan karir atau pendidikan (penjurusan) yang lebih terarah"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                                    <div className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                                                    </div>
                                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Aspek yang Diukur */}
                                <div className="mb-6 sm:mb-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-emerald-100 flex items-center justify-center">
                                            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                                        </div>
                                        <h3 className="font-bold text-lg sm:text-xl text-slate-900">📊 Aspek yang Diukur</h3>
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
                                            Berdasarkan tes ini, akan ditemukan kecenderungan atau tipe minat utama (RIASEC):
                                        </p>
                                        <div className="grid gap-2 sm:gap-3">
                                            {[
                                                { code: "R", name: "Realistic", desc: "Minat pada kegiatan fisik atau teknis yang memerlukan keterampilan praktis atau mekanis", color: "bg-blue-500" },
                                                { code: "I", name: "Investigative", desc: "Minat pada penelitian dan pemecahan masalah, sering kali berkaitan dengan sains", color: "bg-purple-500" },
                                                { code: "A", name: "Artistic", desc: "Minat pada ekspresi kreatif, seni, dan desain", color: "bg-pink-500" },
                                                { code: "S", name: "Social", desc: "Minat pada interaksi sosial, membantu, dan mendukung orang lain", color: "bg-green-500" },
                                                { code: "E", name: "Enterprising", desc: "Minat pada kepemimpinan, pengambilan keputusan, dan aktivitas yang membutuhkan persuasi", color: "bg-orange-500" },
                                                { code: "C", name: "Conventional", desc: "Minat pada keteraturan, pengelolaan data, dan aktivitas administratif", color: "bg-slate-500" }
                                            ].map((type, idx) => (
                                                <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-slate-100 hover:border-primary/30 transition-colors">
                                                    <div className={`shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg ${type.color} text-white font-bold text-sm sm:text-lg flex items-center justify-center shadow-sm`}>
                                                        {type.code}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-0.5 sm:mb-1">{type.name}</h4>
                                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{type.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Petunjuk Pengisian */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-amber-100 flex items-center justify-center">
                                            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                                        </div>
                                        <h3 className="font-bold text-lg sm:text-xl text-slate-900">📝 Petunjuk Pengisian</h3>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">
                                        {/* Langkah-langkah */}
                                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-5 border border-amber-100">
                                            <div className="space-y-2 sm:space-y-3">
                                                {[
                                                    "Bacalah setiap pernyataan dengan pelan dan teliti",
                                                    "Pilih jawaban yang paling sesuai dengan dirimu",
                                                    "Jangan bertanya atau mencontoh jawaban teman",
                                                    "Jika ragu, pilih jawaban yang paling mendekati perasaanmu"
                                                ].map((step, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                                        <div className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                                            {idx + 1}
                                                        </div>
                                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{step}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Jawablah Berdasarkan */}
                                        <div className="bg-white rounded-xl p-4 sm:p-5 border-2 border-primary/20">
                                            <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2 sm:mb-3 flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-primary"></span>
                                                Jawablah berdasarkan:
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                                                {["Apa yang kamu sukai", "Apa yang sering kamu lakukan", "Apa yang ingin kamu coba"].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-2">
                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                                        <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Pilihan Jawaban */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border border-blue-200">
                                            <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2 sm:mb-3">Pilihan Jawaban:</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                                <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 border border-green-200">
                                                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
                                                        ✓
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm sm:text-base text-green-700">YA</p>
                                                        <p className="text-xs text-slate-600">Jika sesuai dengan dirimu</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 border border-red-200">
                                                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
                                                        ✗
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm sm:text-base text-red-700">TIDAK</p>
                                                        <p className="text-xs text-slate-600">Jika tidak sesuai dengan dirimu</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contoh */}
                                        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border-2 border-slate-200">
                                            <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                                </div>
                                                <h4 className="font-bold text-sm sm:text-base text-slate-900">Contoh Soal:</h4>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200 mb-2 sm:mb-3">
                                                <p className="text-sm sm:text-base text-slate-700 font-medium mb-2 sm:mb-3 italic">
                                                    "Saya senang mencoba hal baru dan bereksperimen"
                                                </p>
                                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                                    <label className="flex items-center gap-2 cursor-pointer bg-green-50 px-3 sm:px-4 py-2 rounded-lg border-2 border-green-500">
                                                        <input type="radio" name="example" className="text-green-500" checked readOnly />
                                                        <span className="font-bold text-sm sm:text-base text-green-700">YA</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer bg-slate-50 px-3 sm:px-4 py-2 rounded-lg border border-slate-200">
                                                        <input type="radio" name="example" className="text-slate-400" readOnly />
                                                        <span className="font-medium text-sm sm:text-base text-slate-600">TIDAK</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <p className="text-xs sm:text-sm text-slate-600 italic flex items-start gap-2">
                                                <span className="text-primary shrink-0">→</span>
                                                <span>Jika kamu memang suka mencoba hal baru, pilih <strong>YA</strong>.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="border-t border-slate-200 p-4 sm:p-6 bg-slate-50">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
                                    <button
                                        onClick={onClose}
                                        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:bg-white transition-colors text-sm sm:text-base"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={handleProceed}
                                        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-teal-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        <span>Mulai Tes</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
