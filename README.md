# 🎓 LMS Seminar Parenting 2025

Platform Learning Management System (LMS) untuk Seminar Parenting yang menyediakan materi pembelajaran, kuis interaktif, worksheet, dan sertifikat digital.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Struktur Proyek](#-struktur-proyek)
- [Halaman dan Fitur](#-halaman-dan-fitur)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)

## ✨ Fitur Utama

- **📚 Materi Pembelajaran**: Akses ke berbagai materi seminar parenting
- **📝 Kuis Interaktif**: Holland Test untuk mengidentifikasi tipe kepribadian
- **📄 Worksheet**: Worksheet Emotional Coaching yang dapat diisi dan dicetak
- **🏆 Sertifikat Digital**: Generate dan download sertifikat kehadiran
- **📍 Informasi Lokasi**: Detail lokasi dan jadwal acara
- **🎨 UI/UX Modern**: Desain responsif dengan animasi smooth menggunakan Framer Motion
- **🌙 Dark Mode Support**: Mendukung tema terang dan gelap

## 🛠 Teknologi yang Digunakan

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Print Functionality**: [React-to-Print](https://github.com/MatthewHerbst/react-to-print)

## 📦 Prasyarat

Pastikan Anda telah menginstal:

- **Node.js** versi 18.x atau lebih tinggi
- **npm**, **yarn**, **pnpm**, atau **bun** sebagai package manager

## 🚀 Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd LmsSeminar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

## 💻 Menjalankan Aplikasi

### Development Mode

Jalankan server development:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi.

### Production Build

Build aplikasi untuk production:

```bash
npm run build
npm run start
```

### Linting

Jalankan ESLint untuk memeriksa kode:

```bash
npm run lint
```

## 📁 Struktur Proyek

```
LmsSeminar/
├── public/                    # Asset statis (gambar, font, dll)
├── src/
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── emotion-vocabulary/    # Halaman Kamus Emosi
│   │   ├── materials/             # Halaman Materi
│   │   ├── quiz/                  # Halaman Holland Test
│   │   ├── worksheet/             # Halaman Worksheet
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   └── globals.css            # Global styles
│   ├── components/            # React components
│   │   ├── home/                  # Komponen untuk homepage
│   │   │   ├── Hero.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   ├── SessionMaterials.tsx
│   │   │   ├── Rundown.tsx
│   │   │   ├── Resources.tsx
│   │   │   ├── Certificate.tsx
│   │   │   └── Location.tsx
│   │   ├── layout/                # Komponen layout
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── modals/                # Modal components
│   │       └── HollandTestModal.tsx
│   └── lib/                   # Utility functions
│       └── utils.ts               # Helper functions (cn, dll)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 Halaman dan Fitur

### 1. Homepage (`/`)
Halaman utama yang menampilkan:
- Hero section dengan informasi seminar
- Detail acara dan jadwal
- Materi sesi yang tersedia
- Rundown acara
- Resources dan referensi
- Form sertifikat
- Informasi lokasi

### 2. Materi (`/materials`)
Halaman yang menampilkan semua materi pembelajaran yang tersedia dalam seminar.

### 3. Holland Test (`/quiz`)
Kuis interaktif untuk mengidentifikasi tipe kepribadian berdasarkan Holland Career Test dengan:
- Modal instruksi
- Pertanyaan interaktif
- Hasil dan analisis

### 4. Worksheet Emotional Coaching (`/worksheet`)
Worksheet yang dapat diisi secara interaktif dengan fitur:
- Input fields untuk setiap bagian
- Fungsi print/download
- Auto-save (jika diimplementasikan)

### 5. Kamus Emosi (`/emotion-vocabulary`)
Referensi kosakata emosi untuk membantu peserta mengidentifikasi dan mengekspresikan perasaan.

## 🎨 Komponen Utama

### Layout Components
- **Navbar**: Navigasi utama dengan responsive menu
- **Footer**: Footer dengan informasi tambahan

### Home Components
- **Hero**: Banner utama dengan CTA
- **EventDetails**: Informasi detail acara
- **SessionMaterials**: Daftar materi sesi
- **Rundown**: Jadwal acara
- **Resources**: Sumber daya dan referensi
- **Certificate**: Form generate sertifikat
- **Location**: Peta dan informasi lokasi

### Modal Components
- **HollandTestModal**: Modal instruksi untuk Holland Test

## 🌐 Deployment

### Deploy di Vercel (Recommended)

Cara termudah untuk deploy aplikasi Next.js adalah menggunakan [Vercel Platform](https://vercel.com):

1. Push kode ke GitHub/GitLab/Bitbucket
2. Import project di [Vercel](https://vercel.com/new)
3. Vercel akan otomatis mendeteksi Next.js dan mengkonfigurasi build settings
4. Deploy!

### Deploy di Platform Lain

Aplikasi ini juga dapat di-deploy di:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Project ini dibuat untuk keperluan Seminar Parenting 2025.

## 📞 Kontak

Untuk pertanyaan atau dukungan, silakan hubungi:
- **Email**: [email@example.com]
- **GitHub**: [@zaedarghazalba](https://github.com/zaedarghazalba)

---

**Dibuat dengan ❤️ untuk Seminar Parenting 2025**
