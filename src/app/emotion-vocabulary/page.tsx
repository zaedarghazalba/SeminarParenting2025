"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const emotions = [
    {
        emoji: "😊",
        name: "SENANG",
        feeling: "Hati terasa ringan, nyaman, dan ingin tersenyum.",
        triggers: ["Berhasil melakukan sesuatu", "Bermain dengan teman"],
        helpText: "Kamu terlihat senang. Ceritakan yuk, apa yang membuatmu bahagia?",
        color: "from-yellow-400 to-orange-400",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
    },
    {
        emoji: "😢",
        name: "SEDIH",
        feeling: "Hati terasa berat, ingin menangis atau diam.",
        triggers: ["Kehilangan sesuatu", "Harapan tidak tercapai"],
        helpText: "Wajar kok merasa sedih. Kamu mau cerita?",
        color: "from-blue-400 to-indigo-400",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        emoji: "😡",
        name: "MARAH",
        feeling: "Tubuh terasa panas, ingin berteriak atau memukul.",
        triggers: ["Merasa tidak adil", "Keinginan dihalangi"],
        helpText: "Kamu marah ya. Kita tarik napas dulu, lalu cerita.",
        color: "from-red-400 to-rose-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
    },
    {
        emoji: "😨",
        name: "TAKUT",
        feeling: "Jantung berdebar, ingin menghindar atau bersembunyi.",
        triggers: ["Menghadapi hal baru", "Merasa tidak aman"],
        helpText: "Kamu aman sekarang. Apa yang membuatmu takut?",
        color: "from-purple-400 to-violet-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        emoji: "😕",
        name: "KECEWA",
        feeling: "Sedih dan tidak puas karena harapan tidak terwujud.",
        triggers: ["Rencana gagal", "Tidak sesuai ekspektasi"],
        helpText: "Kamu kecewa ya, karena hasilnya tidak seperti yang kamu mau.",
        color: "from-slate-400 to-gray-500",
        bgColor: "bg-slate-50",
        borderColor: "border-slate-200"
    },
    {
        emoji: "😣",
        name: "KESAL",
        feeling: "Jengkel dan tidak nyaman karena hal kecil yang mengganggu.",
        triggers: ["Diganggu", "Diminta melakukan hal yang tidak disukai"],
        helpText: "Sepertinya kamu kesal. Apa yang bikin tidak nyaman?",
        color: "from-orange-400 to-amber-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
    },
    {
        emoji: "😟",
        name: "CEMAS",
        feeling: "Pikiran penuh kekhawatiran tentang hal yang belum terjadi.",
        triggers: ["Takut salah", "Takut dinilai orang lain"],
        helpText: "Kamu cemas ya. Kita hadapi pelan-pelan bersama.",
        color: "from-teal-400 to-cyan-500",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200"
    },
    {
        emoji: "😳",
        name: "MALU",
        feeling: "Tidak nyaman, ingin menghindar karena merasa diperhatikan.",
        triggers: ["Disorot banyak orang", "Melakukan kesalahan di depan umum"],
        helpText: "Tidak apa-apa merasa malu. Semua orang pernah mengalaminya.",
        color: "from-pink-400 to-rose-400",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200"
    },
    {
        emoji: "😤",
        name: "FRUSTRASI",
        feeling: "Campuran marah dan kecewa karena merasa sulit atau buntu.",
        triggers: ["Belajar hal baru", "Berkali-kali gagal"],
        helpText: "Kamu sudah berusaha keras. Kita cari cara lain, ya.",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-300"
    },
    {
        emoji: "😌",
        name: "TENANG",
        feeling: "Tubuh rileks, pikiran damai.",
        triggers: ["Merasa aman", "Didengarkan dan dipahami"],
        helpText: "Kondisi tenang ini enak ya, tubuhmu sedang istirahat.",
        color: "from-green-400 to-emerald-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
    }
];

export default function EmotionVocabulary() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Kembali</span>
                        </Link>
                    </div>
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
                            <p className="text-sm font-semibold">KOSAKATA EMOSI</p>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Kartu Emosi untuk Anak
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Membantu anak menyadari, menamai, dan mengelola emosinya dengan lebih baik
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Emotion Cards */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {emotions.map((emotion, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 ${emotion.borderColor} hover:shadow-2xl transition-all hover:-translate-y-1`}
                            >
                                {/* Emoji Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`text-5xl md:text-6xl`}>
                                        {emotion.emoji}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{emotion.name}</h3>
                                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${emotion.color} mt-2`}></div>
                                    </div>
                                </div>

                                {/* Feeling */}
                                <div className={`${emotion.bgColor} rounded-xl p-4 mb-4`}>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Apa rasanya?</p>
                                    <p className="text-slate-600 leading-relaxed">{emotion.feeling}</p>
                                </div>

                                {/* Triggers */}
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Biasanya terjadi saat:</p>
                                    <ul className="space-y-1">
                                        {emotion.triggers.map((trigger, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{trigger}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Help Text */}
                                <div className={`border-l-4 ${emotion.borderColor} pl-4 py-2`}>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Kalimat bantu:</p>
                                    <p className="text-sm text-slate-700 italic leading-relaxed">
                                        "{emotion.helpText}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usage Guide */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block bg-primary/10 rounded-full px-4 py-2 mb-4">
                                <p className="text-sm font-semibold text-primary">PANDUAN PENGGUNAAN</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                🧩 Cara Menggunakan Kartu Emosi
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                                <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4 text-2xl font-bold">
                                    1
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Pilih Kartu</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Minta anak memilih kartu sesuai perasaannya hari ini
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                                    2
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Gunakan Rutin</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Gunakan sebelum belajar atau sebelum tidur
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                <div className="h-12 w-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                                    3
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Validasi Emosi</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Validasi emosi, bukan menghakimi
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-br from-primary to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center">
                            <p className="text-lg md:text-xl font-semibold mb-2">Tujuan Utama</p>
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                                Membantu anak menyadari, menamai, dan mengelola emosinya
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
