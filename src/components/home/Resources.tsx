"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ClipboardList, PenTool, BookOpen, ArrowRight, Brain, Heart } from "lucide-react";
import { HollandTestModal } from "@/components/modals/HollandTestModal";

const resources = [
    {
        title: "Materi Seminar",
        description: "Unduh slide presentasi dan rangkuman materi seminar.",
        icon: BookOpen,
        bg: "bg-primary/10",
        text: "text-primary",
        link: "/materials",
    },
    {
        title: "Lembar Kerja (Worksheet)",
        description: "Latihan praktis untuk diterapkan bersama anak di rumah.",
        icon: ClipboardList,
        bg: "bg-primary/10",
        text: "text-primary",
        link: "/worksheet",
    },
    {
        title: "Kuis Interaktif",
        description: "Uji pemahaman Anda mengenai materi yang telah disampaikan.",
        icon: PenTool,
        bg: "bg-primary/10",
        text: "text-primary",
        link: "/quiz",
    },
    {
        title: "Alat Tes Minat Bakat",
        description: "Kenali potensi tersembunyi dengan asesmen psikologi standar.",
        icon: Brain,
        bg: "bg-primary/10",
        text: "text-primary",
        link: "https://s.id/TesMinatdanPenjurusanHolland",
        external: true,
        isHollandTest: true,
    },
    {
        title: "Kosakata Emosi",
        description: "Kartu emosi untuk membantu anak mengenali dan mengelola perasaannya.",
        icon: Heart,
        bg: "bg-primary/10",
        text: "text-primary",
        link: "/emotion-vocabulary",
    },
];

export function Resources() {
    const [isHollandModalOpen, setIsHollandModalOpen] = useState(false);

    const handleResourceClick = (item: typeof resources[0]) => {
        if (item.isHollandTest) {
            setIsHollandModalOpen(true);
        }
    };

    return (
        <section id="resources" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                        RESOURCE CENTER
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Materi & Evaluasi Belajar
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Akses seluruh kelengkapan belajar Anda di sini. Kerjakan kuis dan post test untuk mengukur pemahaman.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-slate-100"
                        >
                            <div className={`absolute top-0 right-0 h-32 w-32 -mr-10 -mt-10 rounded-full ${item.bg} opacity-20 transition-transform duration-500 group-hover:scale-150`}></div>

                            <div>
                                <div className={`h-16 w-16 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center mb-6 shadow-sm`}>
                                    <item.icon className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {item.link ? (
                                item.isHollandTest ? (
                                    <button
                                        onClick={() => handleResourceClick(item)}
                                        className={`w-full mt-auto rounded-xl py-3 px-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${item.bg} ${item.text} hover:brightness-95`}
                                    >
                                        Akses Materi <ArrowRight className="h-4 w-4" />
                                    </button>
                                ) : item.external ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full mt-auto rounded-xl py-3 px-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${item.bg} ${item.text} hover:brightness-95`}
                                    >
                                        Akses Materi <ArrowRight className="h-4 w-4" />
                                    </a>
                                ) : (
                                    <Link href={item.link} className={`w-full mt-auto rounded-xl py-3 px-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${item.bg} ${item.text} hover:brightness-95`}>
                                        Akses Materi <ArrowRight className="h-4 w-4" />
                                    </Link>
                                )
                            ) : (
                                <button className={`w-full mt-auto rounded-xl py-3 px-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${item.bg} ${item.text} hover:brightness-95`}>
                                    Akses Materi <ArrowRight className="h-4 w-4" />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Holland Test Modal */}
            <HollandTestModal
                isOpen={isHollandModalOpen}
                onClose={() => setIsHollandModalOpen(false)}
                testLink="https://s.id/TesMinatdanPenjurusanHolland"
            />
        </section>
    );
}
