"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, Lightbulb, Heart, Brain, ChevronRight, RotateCcw } from "lucide-react";
import Link from "next/link";

const quizQuestions = [
    {
        id: 1,
        question: "Saat anak tiba-tiba marah atau menolak belajar, biasanya itu karena…",
        options: [
            { id: "A", text: "Anak sengaja membangkang" },
            { id: "B", text: "Anak malas dan kurang motivasi" },
            { id: "C", text: "Ada perasaan yang belum bisa ia sampaikan" },
            { id: "D", text: "Anak ingin mencari perhatian" }
        ],
        correctAnswer: "C",
        explanation: "Perilaku sering kali adalah 'bahasa' dari emosi."
    },
    {
        id: 2,
        question: "Anak sering memilih diam dan tidak bercerita tentang perasaannya karena…",
        options: [
            { id: "A", text: "Anak tidak suka berbicara" },
            { id: "B", text: "Anak sudah terbiasa memendam perasaan" },
            { id: "C", text: "Anak merasa emosinya tidak penting" },
            { id: "D", text: "Semua jawaban bisa terjadi" }
        ],
        correctAnswer: "D",
        explanation: "Anak diam bukan karena tidak punya emosi, tapi karena tidak merasa aman mengekspresikannya."
    },
    {
        id: 3,
        question: "Ketika anak sedang sangat emosi, kemampuan berpikir dan fokus anak biasanya…",
        options: [
            { id: "A", text: "Tetap normal" },
            { id: "B", text: "Jadi lebih baik" },
            { id: "C", text: "Menurun sementara" },
            { id: "D", text: "Tidak terpengaruh sama sekali" }
        ],
        correctAnswer: "C",
        explanation: "Saat emosi kuat, otak berpikir anak 'istirahat sebentar'."
    },
    {
        id: 4,
        question: "Anak yang pintar secara akademik tapi sering menyerah atau tidak fokus kemungkinan sedang…",
        options: [
            { id: "A", text: "Kurang diawasi" },
            { id: "B", text: "Mengalami kelelahan emosional" },
            { id: "C", text: "Tidak cocok dengan pelajaran" },
            { id: "D", text: "Tidak punya tujuan hidup" }
        ],
        correctAnswer: "B",
        explanation: "Emosi berpengaruh besar pada proses belajar, bukan hanya kemampuan otak."
    },
    {
        id: 5,
        question: "Personalized growth berarti…",
        options: [
            { id: "A", text: "Semua anak harus berkembang dengan cara yang sama" },
            { id: "B", text: "Anak bebas tanpa aturan" },
            { id: "C", text: "Anak berkembang sesuai potensi dan ritmenya masing-masing" },
            { id: "D", text: "Fokus utama hanya pada nilai sekolah" }
        ],
        correctAnswer: "C",
        explanation: "Setiap anak unik, cara bertumbuhnya pun berbeda."
    }
];

const reflectionQuestions = [
    {
        id: 1,
        question: "Saat anak tiba-tiba diam, cemberut, atau menolak belajar, biasanya yang terlintas di kepala Ayah/Bunda adalah…",
        options: [
            { id: "A", text: "'Lagi malas aja ini…'" },
            { id: "B", text: "'Kenapa lagi ya anakku?'" },
            { id: "C", text: "'Nanti juga reda sendiri'" },
            { id: "D", text: "'Ayo cepetan, waktunya belajar!'" }
        ]
    },
    {
        id: 2,
        question: "Kalau anak bilang, 'Aku capek' saat belajar, respon yang paling sering muncul adalah…",
        options: [
            { id: "A", text: "'Sedikit lagi ya, habisin dulu'" },
            { id: "B", text: "'Capek kenapa? Belajar kan duduk'" },
            { id: "C", text: "'Oke, istirahat sebentar yuk'" },
            { id: "D", text: "'Kamu tuh kurang niat'" }
        ]
    },
    {
        id: 3,
        question: "Menurut Ayah/Bunda, belajar yang paling cocok untuk anak itu…",
        options: [
            { id: "A", text: "Duduk rapi, fokus, dan tenang" },
            { id: "B", text: "Sambil ngobrol dan diskusi" },
            { id: "C", text: "Sambil gambar, praktek, atau bergerak" },
            { id: "D", text: "Tergantung mood hari itu 😄" }
        ]
    },
    {
        id: 4,
        question: "Kalau anak cepat bosan belajar, biasanya Ayah/Bunda berpikir…",
        options: [
            { id: "A", text: "'Anakku kurang rajin'" },
            { id: "B", text: "'Anakku susah fokus'" },
            { id: "C", text: "'Mungkin caranya kurang cocok'" },
            { id: "D", text: "'Semua anak juga begitu'" }
        ]
    },
    {
        id: 5,
        question: "Saat anak bercerita dengan emosi (marah, sedih, kecewa), respon paling sering adalah…",
        options: [
            { id: "A", text: "Langsung kasih solusi" },
            { id: "B", text: "Menenangkan supaya cepat berhenti" },
            { id: "C", text: "Mendengarkan dulu tanpa menyela" },
            { id: "D", text: "Menasihati agar tidak berlebihan" }
        ]
    }
];

export default function QuizPage() {
    const [mode, setMode] = useState<"select" | "quiz" | "reflection">("select");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [quizScore, setQuizScore] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
    const [reflectionAnswers, setReflectionAnswers] = useState<string[]>([]);

    const currentQuestions = mode === "quiz" ? quizQuestions : reflectionQuestions;
    const totalQuestions = currentQuestions.length;

    const handleAnswerSelect = (answerId: string) => {
        setSelectedAnswer(answerId);
    };

    const handleNext = () => {
        if (!selectedAnswer) return;

        if (mode === "quiz") {
            const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
            if (isCorrect) {
                setQuizScore(quizScore + 1);
            }
            setQuizAnswers([...quizAnswers, selectedAnswer]);
        } else {
            setReflectionAnswers([...reflectionAnswers, selectedAnswer]);
        }

        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setMode("select");
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuizScore(0);
        setQuizAnswers([]);
        setReflectionAnswers([]);
    };

    const startMode = (selectedMode: "quiz" | "reflection") => {
        setMode(selectedMode);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    if (mode === "select") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                {/* Header */}
                <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                    <div className="container mx-auto px-4 md:px-6 py-4">
                        <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Kembali</span>
                        </Link>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <div className="inline-block bg-primary/10 rounded-full px-4 py-2 mb-6">
                                <p className="text-sm font-semibold text-primary">EVALUASI PEMBELAJARAN</p>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Kuis Interaktif
                            </h1>
                            <p className="text-lg text-slate-600">
                                Pilih jenis kuis yang ingin Anda ikuti
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Quiz Mode */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={() => startMode("quiz")}
                                className="group cursor-pointer bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-teal-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Brain className="h-8 w-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Kuis Pengetahuan</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Uji pemahaman Anda tentang materi seminar dengan 5 pertanyaan pilihan ganda. Ada jawaban benar dan salah.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-semibold">
                                    <span>Mulai Kuis</span>
                                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>

                            {/* Reflection Mode */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => startMode("reflection")}
                                className="group cursor-pointer bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-transparent hover:border-rose-500 hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Heart className="h-8 w-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Refleksi Diri</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Kenali pola parenting Anda dengan 5 pertanyaan reflektif. Tidak ada jawaban benar atau salah.
                                </p>
                                <div className="flex items-center gap-2 text-rose-500 font-semibold">
                                    <span>Mulai Refleksi</span>
                                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (showResult) {
        if (mode === "quiz") {
            const percentage = (quizScore / totalQuestions) * 100;
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl w-full"
                    >
                        <div className="text-center">
                            <div className={`h-24 w-24 rounded-full mx-auto mb-6 flex items-center justify-center ${percentage >= 70 ? 'bg-green-100' : 'bg-orange-100'}`}>
                                {percentage >= 70 ? (
                                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                                ) : (
                                    <Lightbulb className="h-12 w-12 text-orange-600" />
                                )}
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                {percentage >= 70 ? "Luar Biasa! 🎉" : "Tetap Semangat! 💪"}
                            </h2>
                            <p className="text-6xl font-bold text-primary mb-4">{quizScore}/{totalQuestions}</p>
                            <p className="text-xl text-slate-600 mb-8">
                                {percentage >= 70
                                    ? "Anda memahami materi dengan sangat baik!"
                                    : "Terus belajar dan praktikkan materinya ya!"}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    <RotateCcw className="h-5 w-5" />
                                    Coba Lagi
                                </button>
                                <Link
                                    href="/"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    Kembali ke Beranda
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            );
        } else {
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl w-full"
                    >
                        <div className="text-center">
                            <div className="h-24 w-24 rounded-full bg-rose-100 mx-auto mb-6 flex items-center justify-center">
                                <Heart className="h-12 w-12 text-rose-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Terima Kasih! 💝
                            </h2>
                            <p className="text-xl text-slate-600 mb-8">
                                Refleksi adalah langkah pertama menuju perubahan. Terus semangat menjadi orang tua yang lebih baik!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 transition-colors"
                                >
                                    <RotateCcw className="h-5 w-5" />
                                    Mulai Lagi
                                </button>
                                <Link
                                    href="/"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    Kembali ke Beranda
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            );
        }
    }

    const question = currentQuestions[currentQuestion];
    const isQuizMode = mode === "quiz";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={resetQuiz}
                            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Kembali</span>
                        </button>
                        <div className="text-sm font-semibold text-slate-600">
                            {currentQuestion + 1} / {totalQuestions}
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                            className={`h-full ${isQuizMode ? 'bg-primary' : 'bg-rose-500'}`}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </div>

            {/* Question */}
            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg mb-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`shrink-0 h-12 w-12 rounded-xl ${isQuizMode ? 'bg-primary/10 text-primary' : 'bg-rose-100 text-rose-600'} flex items-center justify-center font-bold text-xl`}>
                                        {currentQuestion + 1}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
                                        {question.question}
                                    </h2>
                                </div>

                                <div className="space-y-3">
                                    {question.options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleAnswerSelect(option.id)}
                                            className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all ${selectedAnswer === option.id
                                                ? isQuizMode
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-rose-500 bg-rose-50'
                                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`shrink-0 h-8 w-8 rounded-full border-2 flex items-center justify-center font-semibold ${selectedAnswer === option.id
                                                    ? isQuizMode
                                                        ? 'border-primary bg-primary text-white'
                                                        : 'border-rose-500 bg-rose-500 text-white'
                                                    : 'border-slate-300 text-slate-600'
                                                    }`}>
                                                    {option.id}
                                                </div>
                                                <span className="text-slate-700 leading-relaxed">{option.text}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Show explanation for quiz mode after answer selected */}
                            {isQuizMode && selectedAnswer && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`rounded-2xl p-6 mb-6 ${selectedAnswer === (question as typeof quizQuestions[0]).correctAnswer
                                        ? 'bg-green-50 border-2 border-green-200'
                                        : 'bg-orange-50 border-2 border-orange-200'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        {selectedAnswer === (question as typeof quizQuestions[0]).correctAnswer ? (
                                            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                                        ) : (
                                            <XCircle className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
                                        )}
                                        <div>
                                            <p className={`font-semibold mb-2 ${selectedAnswer === (question as typeof quizQuestions[0]).correctAnswer
                                                ? 'text-green-900'
                                                : 'text-orange-900'
                                                }`}>
                                                {selectedAnswer === (question as typeof quizQuestions[0]).correctAnswer
                                                    ? 'Benar! 🎉'
                                                    : `Jawaban yang benar: ${(question as typeof quizQuestions[0]).correctAnswer}`}
                                            </p>
                                            <div className="flex items-start gap-2">
                                                <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                                <p className="text-slate-700">
                                                    <span className="font-semibold">Intinya:</span> {(question as typeof quizQuestions[0]).explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <button
                                onClick={handleNext}
                                disabled={!selectedAnswer}
                                className={`w-full py-4 rounded-xl font-bold text-white transition-all ${selectedAnswer
                                    ? isQuizMode
                                        ? 'bg-primary hover:bg-primary/90'
                                        : 'bg-rose-500 hover:bg-rose-600'
                                    : 'bg-slate-300 cursor-not-allowed'
                                    }`}
                            >
                                {currentQuestion < totalQuestions - 1 ? 'Lanjut' : 'Lihat Hasil'}
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
