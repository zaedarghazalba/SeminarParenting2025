"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Printer, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function WorksheetPage() {
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "Worksheet Emotional Coaching",
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header Navigation */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm print:hidden">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Kembali</span>
                        </Link>
                        <button
                            onClick={() => handlePrint()}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-sm hover:bg-primary/90 transition-colors font-semibold"
                        >
                            <Printer size={18} />
                            <span className="hidden sm:inline">Cetak / Simpan PDF</span>
                            <span className="sm:hidden">Cetak</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-teal-600 text-white relative overflow-hidden print:hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <p className="text-sm font-semibold flex items-center gap-2 justify-center">
                                <FileText className="h-4 w-4" />
                                LEMBAR KERJA PRAKTIS
                            </p>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Worksheet Emotional Coaching
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            "Name It to Tame It" – Kenali & Tenangkan Emosi Anak
                        </p>
                    </div>
                </div>
            </section>

            {/* Worksheet Content */}
            <div className="py-8 md:py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden print:shadow-none print:rounded-none">
                    <div ref={componentRef} className="p-8 md:p-12 print:p-8">
                        {/* Print-only Header */}
                        <div className="hidden print:block text-center border-b-2 border-primary/20 pb-8 mb-8">
                            <h2 className="text-3xl font-bold text-primary mb-2">WORKSHEET EMOTIONAL COACHING</h2>
                            <p className="text-xl font-medium text-slate-600">"Name It to Tame It" – Kenali & Tenangkan Emosi Anak</p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-gradient-to-br from-primary/5 to-teal-50 p-6 rounded-2xl mb-8 text-sm text-slate-700 border-2 border-primary/10">
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <strong className="block mb-2 text-slate-900 text-base">📋 Petunjuk Penggunaan:</strong>
                                    <p className="leading-relaxed">
                                        Gunakan worksheet ini untuk membantu Anda mengamati situasi yang memicu emosi anak, memberi label emosi, dan menentukan respons yang tepat. Isi sesuai pengalaman nyata dalam 1 minggu terakhir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bagian 1 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</span>
                                <h3 className="text-lg font-bold text-slate-900">Situasi Pemicu Emosi</h3>
                            </div>
                            <div className="pl-11 space-y-4">
                                <p className="text-slate-600 text-sm">Ceritakan 1 situasi ketika anak mengalami emosi kuat. (Tandai salah satu kategori)</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Saat belajar / PR</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Saat bermain</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Interaksi teman/saudara</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Di rumah / rutinitas</label>
                                    <label className="flex items-center gap-2 col-span-2"><input type="checkbox" className="rounded border-slate-300" /> Lainnya: <div className="border-b border-slate-300 w-full inline-block"></div></label>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-2">Deskripsi singkat situasi:</p>
                                </div>
                                <div>
                                    <textarea className="w-full h-24 border border-slate-200 rounded-lg bg-slate-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tuliskan deskripsi situasi di sini..."></textarea>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-2">Apa reaksi anak?</p>
                                    <div className="grid grid-cols-3 gap-2 text-sm text-slate-700">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menangis</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Marah / teriak</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Diam / menarik diri</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Mengamuk</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menolak instruksi</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Gelisah</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bagian 2 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm">2</span>
                                <h3 className="text-lg font-bold text-slate-900">Observasi Emosi Anak</h3>
                            </div>
                            <div className="pl-11 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-semibold text-sm mb-2 text-slate-700">Ekspresi Wajah</h4>
                                    <div className="space-y-1 text-sm text-slate-600">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Cemberut</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menangis</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Tegang</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Kosong / bingung</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Takut / cemas</label>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-2 text-slate-700">Bahasa Tubuh</h4>
                                    <div className="space-y-1 text-sm text-slate-600">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Bahu naik / tegang</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Memukul benda</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menutupi wajah</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Mondar-mandir</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Bersembunyi</label>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-2 text-slate-700">Perilaku</h4>
                                    <div className="space-y-1 text-sm text-slate-600">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Tidak mau bicara</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Berteriak</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menghindar</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menggigit kuku</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Menolak aktivitas</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bagian 3 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-bold text-sm">3</span>
                                <h3 className="text-lg font-bold text-slate-900">Name It to Tame It</h3>
                            </div>
                            <div className="pl-11 space-y-4">
                                <div>
                                    <p className="text-sm font-medium mb-2">Apa emosi utama yang muncul?</p>
                                    <div className="grid grid-cols-4 gap-2 text-sm text-slate-700 mb-2">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Marah</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Sedih</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Kecewa</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Takut</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Malu</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Cemas</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Kesepian</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Bingung</label>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-1">Kalimat label emosi yang Anda berikan:</p>
                                    <input type="text" className="w-full border-b border-slate-300 border-dashed py-2 text-slate-700 italic focus:outline-none focus:border-primary bg-transparent placeholder-slate-400" placeholder='"Katakan kalimat Anda di sini..."' />
                                    <p className="text-xs text-slate-400 mt-1">Contoh: "Kakak lagi kecewa karena soal PR-nya susah, ya?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Bagian 4 & 5 Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Bagian 4 */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">4</span>
                                    <h3 className="text-lg font-bold text-slate-900">Validate (Validasi)</h3>
                                </div>
                                <div className="pl-11">
                                    <p className="text-sm text-slate-600 mb-2">Bagaimana Anda menunjukkan empati?</p>
                                    <textarea className="w-full h-20 border border-slate-200 rounded-lg bg-slate-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tulis respon validasi Anda..."></textarea>
                                    <p className="text-xs text-slate-400 mt-1">Contoh: "Ayah paham kok rasanya kesal..."</p>
                                </div>
                            </div>

                            {/* Bagian 5 */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">5</span>
                                    <h3 className="text-lg font-bold text-slate-900">Guide (Arahkan)</h3>
                                </div>
                                <div className="pl-11">
                                    <p className="text-sm text-slate-600 mb-2">Langkah setelah anak tenang:</p>
                                    <div className="space-y-1 text-sm text-slate-600 mb-2">
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Memberi pilihan</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Bernapas</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" /> Istirahat</label>
                                    </div>
                                    <input type="text" className="w-full border-b border-slate-300 border-dashed py-1 text-slate-700 text-sm focus:outline-none focus:border-primary bg-transparent placeholder-slate-400" placeholder='Kalimat: "..."' />
                                </div>
                            </div>
                        </div>

                        {/* Bagian 6 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-bold text-sm">6</span>
                                <h3 className="text-lg font-bold text-slate-900">Refleksi Orang Tua</h3>
                            </div>
                            <div className="pl-11 grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Hal yang berhasil saya lakukan:</p>
                                    <textarea className="w-full h-24 border border-slate-200 rounded-lg bg-slate-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tulis keberhasilan Anda..."></textarea>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Hal yang ingin saya perbaiki:</p>
                                    <textarea className="w-full h-24 border border-slate-200 rounded-lg bg-slate-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tulis hal yang perlu diperbaiki..."></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400">
                            <span>© {new Date().getFullYear()} EduPrima - Seminar Parenting</span>
                            <span>Worksheet Emotional Coaching</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
