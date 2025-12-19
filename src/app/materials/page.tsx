"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText, Eye, BookOpen } from "lucide-react";
import Link from "next/link";

const materials = [
    {
        id: 1,
        title: "PPT Seminar Parenting",
        subtitle: "Unlocking Children's Potential & Emotions",
        description: "Materi lengkap tentang emotional parenting, memahami emosi anak, dan bagaimana orang tua dapat merespon dengan tepat.",
        topics: [
            "6 Emosi Dasar Anak",
            "Hubungan Emosi & Kemampuan Belajar",
            "Balanced Parenting: Kehangatan + Batasan",
            "Peran Orang Tua sebagai Emotion Coach"
        ],
        file: "/PPT Seminar Parenting.pdf",
        pages: "~30 slides",
        color: "from-teal-500 to-primary",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200"
    },
    {
        id: 2,
        title: "PPT Coaching",
        subtitle: "Emotional Coaching Practice",
        description: "Panduan praktis teknik emotional coaching untuk membantu anak mengelola emosi mereka sendiri dengan metode yang terbukti efektif.",
        topics: [
            "Teknik: Name It to Tame It",
            "4 Langkah Emotional Coaching",
            "Contoh Penerapan dalam Keseharian",
            "Role-play & Worksheet Praktis"
        ],
        file: "/PPT Coaching.pdf",
        pages: "~25 slides",
        color: "from-emerald-500 to-green-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
    }
];

export default function MaterialsPage() {
    const handleDownload = (file: string, title: string) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = `${title}.pdf`;
        link.click();
    };

    const handleView = (file: string) => {
        window.open(file, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Kembali</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-teal-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <p className="text-sm font-semibold flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                MATERI SEMINAR
                            </p>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Slide Presentasi Seminar
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Unduh atau lihat materi presentasi lengkap dari seminar parenting
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Materials Grid */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {materials.map((material, index) => (
                            <motion.div
                                key={material.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`bg-white rounded-3xl overflow-hidden shadow-xl border-2 ${material.borderColor} hover:shadow-2xl transition-all hover:-translate-y-2`}
                            >
                                {/* Card Header */}
                                <div className={`bg-gradient-to-r ${material.color} p-8 text-white`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <FileText className="h-7 w-7" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm opacity-90">{material.pages}</p>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                        {material.title}
                                    </h2>
                                    <p className="text-white/90 text-sm">
                                        {material.subtitle}
                                    </p>
                                </div>

                                {/* Card Body */}
                                <div className="p-8">
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {material.description}
                                    </p>

                                    {/* Topics */}
                                    <div className="mb-8">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${material.color}`}></div>
                                            Topik Bahasan
                                        </h3>
                                        <ul className="space-y-3">
                                            {material.topics.map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className={`shrink-0 h-6 w-6 rounded-full ${material.bgColor} flex items-center justify-center mt-0.5`}>
                                                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                                                    </div>
                                                    <span className="text-slate-700 leading-relaxed">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() => handleView(material.file)}
                                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r ${material.color} text-white font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl`}
                                        >
                                            <Eye className="h-5 w-5" />
                                            Lihat PDF
                                        </button>
                                        <button
                                            onClick={() => handleDownload(material.file, material.title)}
                                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 ${material.borderColor} ${material.bgColor} font-semibold hover:bg-white transition-all`}
                                        >
                                            <Download className="h-5 w-5" />
                                            Unduh
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Info Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 border border-blue-100">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 h-12 w-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">
                                        💡 Tips Menggunakan Materi
                                    </h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span>Baca materi sebelum mengikuti seminar untuk pemahaman yang lebih baik</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span>Gunakan sebagai referensi saat mempraktikkan di rumah</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span>Bagikan dengan pasangan atau keluarga untuk pembelajaran bersama</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
