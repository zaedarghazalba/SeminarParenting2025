
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, AlertCircle, Sprout, Scale, MessageCircle, Star, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const sessions = [
  {
    id: 1,
    title: "Emotional Parenting",
    subtitle: "Memahami Emosi Anak",
    icon: Heart,
    color: "from-teal-400 to-[#026c7a]",
    description: "Kupas tuntas dasar-dasar emosi anak dan bagaimana orang tua meresponnya.",
    materials: [
      {
        title: "Memahami 6 Emosi Dasar",
        content: "Bahagia, Sedih, Marah, Takut, Jijik, Terkejut. Perilaku adalah ekspresi emosi yang belum terungkap.",
        icon: Brain
      },
      {
        title: "Emosi & Kemampuan Belajar",
        content: "Emosi negatif menghambat fokus. Emosi positif adalah pintu masuk belajar optimal (IQ + EQ).",
        icon: Sprout
      },
      {
        title: "Balanced Parenting",
        content: "Rumus: Kehangatan + Batasan = Anak Optimal. Validasi emosi namun tetap dengan aturan jelas.",
        icon: Scale
      }
    ]
  },
  {
    id: 2,
    title: "Emotional Coaching",
    subtitle: "Praktek & Penerapan",
    icon: MessageCircle,
    color: "from-emerald-400 to-[#22c55e]",
    description: "Teknik coaching praktis untuk membantu anak mengelola emosi mereka sendiri.",
    materials: [
      {
        title: "Tujuan Sesi",
        content: "Membantu orang tua mengenali emosi anak dan mengajarkan anak memberi nama/label pada emosinya.",
        icon: Target
      },
      {
        title: "Mengapa Sulit?",
        content: "Otak belum matang, kosakata terbatas, takut dimarahi, belum bisa memisahkan perasaan & perilaku.",
        icon: AlertCircle
      },
      {
        title: "Teknik: Name It to Tame It",
        content: "4 Langkah: Amati bahasa tubuh, Namai emosi, Validasi perasaan, dan Dampingi sampai tenang.",
        icon: MessageCircle
      },
      {
        title: "Contoh Penerapan",
        content: "Ubah 'Jangan marah!' menjadi 'Kamu kelihatan kecewa ya, Mama ngerti'. Validasi adalah kunci.",
        icon: Users
      },
      {
        title: "Worksheet & Key Message",
        content: "Latihan role-play kasus nyata. Ingat: Anak yang emosinya dipahami → lebih siap belajar.",
        icon: Star
      }
    ]
  },
  {
    id: 3,
    title: "Student Success",
    subtitle: "Personalized Learning",
    icon: Star,
    color: "from-sky-400 to-blue-600",
    description: "Strategi belajar yang disesuaikan dengan keunikan minat dan bakat anak.",
    materials: [
      {
        title: "Peran Orang Tua",
        content: "Pahami anak secara utuh, jadilah 'Emotion Coach', dan bangun 'Secure Base' agar anak berani eksplorasi.",
        icon: Users
      },
      {
        title: "Hindari Kesalahan Ini",
        content: "Jangan membandingkan! Tiap anak punya kecerdasan unik (Multiple Intelligences) & gaya belajar (VARK).",
        icon: AlertCircle
      },
      {
        title: "4 Aspek Personalized Learning",
        content: "Perhatikan Readiness (Kesiapan), Style (Gaya Belajar), Pace (Kecepatan), & Environment (Lingkungan).",
        icon: Target
      },
      {
        title: "Tumbuh vs Berlomba (SDT)",
        content: "Penuhi 3 kebutuhan: Autonomy (Pilihan), Competence (Merasa Mampu), Relatedness (Merasa Didukung).",
        icon: Sprout
      },
      {
        title: "Panduan Praktis: Pola ODE",
        content: "Observasi (Amati tanpa intervensi), Diskusi (Dialog dua arah), Evaluasi (Refleksi & penyesuaian).",
        icon: MessageCircle
      },
      {
        title: "Key Message",
        content: "'Once a child is born, he is not your child but simply another human being learning to navigate life'",
        icon: Star
      }
    ]
  }
];
export function SessionMaterials() {
  const [activeSession, setActiveSession] = useState<(typeof sessions)[0] | null>(null);

  // Set default active session on mount if needed, or keep null to prompt user
  // For mobile "wow" factor, maybe auto-select first one? 
  // Let's keep it null but layout will encourage interaction.

  return (
    <section className="pt-12 pb-4 md:pt-24 md:pb-4 bg-slate-50 overflow-hidden" id="materi-sesi">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            KURIKULUM SEMINAR
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Materi Pembelajaran
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Klik kartu sesi di bawah untuk melihat detail materi.
          </p>
        </div>

        {/* Session Cards - Accordion (Mobile) / Tabs (Desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-start">
          {sessions.map((session) => {
            const isActive = activeSession?.id === session.id;

            return (
              <motion.div
                layout
                key={session.id}
                onClick={() => setActiveSession(isActive ? null : session)}
                className={cn(
                  "relative overflow-hidden rounded-3xl transition-all duration-300 border-2 cursor-pointer group w-full",
                  isActive
                    ? "bg-white border-primary shadow-xl z-10"
                    : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg"
                )}
              >
                {/* Card Header Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "h-12 w-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg transition-transform duration-300",
                      session.color,
                      isActive ? "scale-110" : "scale-100"
                    )}>
                      <session.icon className="h-6 w-6" />
                    </div>
                    {/* Expand/Collapse Indicator (Mobile Only really, but nice to have) */}
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-300",
                      isActive ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                    )}>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6" /></svg>
                      </motion.div>
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {session.subtitle}
                  </p>
                  <h3 className={cn(
                    "text-xl font-bold mb-3 transition-colors duration-300",
                    isActive ? "text-primary" : "text-slate-900"
                  )}>
                    {session.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* Mobile Expanded Content (Accordion) */}
                <div className="md:hidden">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px w-full bg-slate-100 mb-6"></div>
                          <div className="space-y-4">
                            {session.materials.map((material, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100"
                              >
                                <div className="shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mt-1">
                                  <material.icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-900 text-sm">{material.title}</h4>
                                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                    {material.content}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Content Area (Tabs Style) */}
        <div className="hidden md:block mt-6">
          <AnimatePresence mode="wait">
            {activeSession && (
              <motion.div
                key={activeSession.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 relative overflow-hidden"
              >
                {/* Decorative Background Blob */}
                <div className={cn(
                  "absolute top-0 left-0 w-full h-2 bg-gradient-to-r",
                  activeSession.color
                )}></div>

                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-slate-900 inline-flex items-center gap-4">
                      {activeSession.title}
                    </h3>
                    <p className="text-slate-500 mt-2 text-lg">{activeSession.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {activeSession.materials.map((material, idx) => (
                      <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-slate-100/50 group">
                        <div className="shrink-0 h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-md group-hover:scale-110 transition-transform">
                          <material.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg mb-2">{material.title}</h4>
                          <p className="text-slate-600 leading-relaxed">
                            {material.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section >
  );
}

