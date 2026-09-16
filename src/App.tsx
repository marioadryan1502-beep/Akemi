import React, { useState } from 'react';
import akemiLogo from './assets/images/akemi_logo_1789526674997.jpg';
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Menu,
  X,
  Plane,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Compass,
  FileCheck,
  ShieldCheck,
  Building,
  GraduationCap
} from 'lucide-react';

const WA_NUMBER = '6281215788259';
const WA_DISPLAY = '+62 812 1578 8259';
const ADDRESS_DISPLAY = 'Jalur Sutera Timur 10A no 11';
const INSTAGRAM_URL = 'https://www.instagram.com/lpkakemi?stkn=aWp5NWxpYjY2cGQy';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    wa: '',
    minat: 'Kelas Bahasa Jepang',
    pesan: '',
  });

  // Modal Tes Minat & Bakat
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    pendidikan: 'SMA / SMK Sederajat',
    bidang: 'Manufaktur & Pabrik Komponen',
    pengalaman: 'Belum ada pengalaman bahasa Jepang',
    target: 'Kerja resmi via Tokutei Ginou (SSW)',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedName = encodeURIComponent(formData.nama.trim());
    const encodedWa = encodeURIComponent(formData.wa.trim());
    const encodedMinat = encodeURIComponent(formData.minat);
    let msg = `Halo Akemi, saya *${encodedName}* (No. WA: ${encodedWa}).%0ASaya tertarik dengan program: *${encodedMinat}*.`;
    if (formData.pesan.trim()) {
      msg += `%0APesan tambahan: ${encodeURIComponent(formData.pesan.trim())}`;
    }
    const targetUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Tim Konsultan Akemi, saya sudah mengisi *Tes Minat & Bakat* di website:%0A%0A` +
      `• Pendidikan: ${encodeURIComponent(quizAnswers.pendidikan)}%0A` +
      `• Minat Bidang: ${encodeURIComponent(quizAnswers.bidang)}%0A` +
      `• Level Bahasa: ${encodeURIComponent(quizAnswers.pengalaman)}%0A` +
      `• Target Program: ${encodeURIComponent(quizAnswers.target)}%0A%0A` +
      `Mohon rekomendasi langkah persiapan kelas & jadwal wawancara perusahaan mitra di Jepang. Terima kasih!`;
    const targetUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setQuizOpen(false);
  };

  const openWhatsAppDirect = (topic?: string) => {
    const defaultText = topic
      ? `Halo Akemi, saya ingin konsultasi mengenai ${encodeURIComponent(topic)}.`
      : `Halo Akemi, saya ingin konsultasi mengenai program pelatihan bahasa Jepang dan kerja ke Jepang.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${defaultText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-[#1B1912] font-zen selection:bg-[#A63A2B] selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-[#152238] text-[#D8C79A] text-xs py-2 px-4 border-b border-[#213A63]">
        <div className="max-w-[1180px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Pendaftaran Angkatan Baru Dibuka • Pendampingan dari Nol hingga Terbang ke Jepang</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A63A2B]" />
              <span>{WA_DISPLAY}</span>
            </a>
            <span className="hidden sm:inline text-[#3E5D93]">|</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E4DEC9]" />
              <span>@lpkakemi</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- NAV ---------- */}
      <header id="site-header" className="sticky top-0 z-50 bg-[#F6F1E3]/95 backdrop-blur-md border-b border-[#D8CEB0] transition-all">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <img
              src={akemiLogo}
              alt="Logo Akemi LPK Bahasa Jepang"
              referrerPolicy="no-referrer"
              className="w-11 h-11 object-cover rounded-full border border-[#D8CEB0] shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mincho text-2xl font-bold text-[#152238] tracking-tight">Akemi</span>
                <span className="text-xs font-semibold text-[#A63A2B] tracking-widest font-mincho">明美</span>
              </div>
              <span className="text-[10px] text-[#514C3E] uppercase tracking-wider font-semibold">LPK Bahasa Jepang & Kerja ke Jepang</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] text-[#514C3E]">
            <a href="#program" className="hover:text-[#152238] transition-colors py-1 border-b-2 border-transparent hover:border-[#152238]">
              Program
            </a>
            <a href="#proses" className="hover:text-[#152238] transition-colors py-1 border-b-2 border-transparent hover:border-[#152238]">
              Proses
            </a>
            <a href="#alumni" className="hover:text-[#152238] transition-colors py-1 border-b-2 border-transparent hover:border-[#152238]">
              Alumni
            </a>
            <a href="#legalitas" className="hover:text-[#152238] transition-colors py-1 border-b-2 border-transparent hover:border-[#152238]">
              Legalitas
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-white/80 hover:bg-white text-[#152238] px-3 py-1.5 rounded border border-[#D8CEB0] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#A63A2B]" />
              <span>Instagram</span>
            </a>
            <a
              href="#kontak"
              className="bg-[#A63A2B] hover:bg-[#8A2E22] text-white px-4 py-2 rounded text-sm font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </nav>

          {/* Mobile Burger Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#152238] hover:bg-[#EAE1C8] rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F6F1E3] border-b border-[#D8CEB0] px-6 py-4 flex flex-col gap-3.5 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <a
              href="#program"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#D8CEB0]/60 text-[#152238] font-medium"
            >
              Program Pelatihan
            </a>
            <a
              href="#proses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#D8CEB0]/60 text-[#152238] font-medium"
            >
              Proses Menuju Jepang
            </a>
            <a
              href="#alumni"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#D8CEB0]/60 text-[#152238] font-medium"
            >
              Kisah Alumni
            </a>
            <a
              href="#legalitas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#D8CEB0]/60 text-[#152238] font-medium"
            >
              Legalitas & Izin LPK
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#152238] py-2"
            >
              <Instagram className="w-4 h-4 text-[#A63A2B]" />
              <span>Instagram: @lpkakemi</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#A63A2B] text-white text-center py-2.5 rounded font-bold mt-2 shadow-sm"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="hero-section" className="relative bg-gradient-to-br from-[#152238] via-[#213A63] to-[#3E5D93] text-[#F6F1E3] pt-16 sm:pt-20 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-6 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/15 text-[#D8C79A] text-xs sm:text-sm font-medium mb-6">
              <span className="font-mincho text-white font-bold">明美</span>
              <span>•</span>
              <span className="tracking-wide">日本語からキャリアへ — Dari Bahasa Menuju Karier di Jepang</span>
            </div>

            <h1 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-white max-w-xl">
              Belajar Bahasa Jepang, Berangkat Kerja ke Jepang
            </h1>

            <p className="mt-6 text-[#E4DEC9] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Akemi mendampingi setiap langkah: kelas intensif bahasa Jepang, pemahaman etika kerja, hingga penempatan resmi di perusahaan mitra melalui program magang (Kenshusei) dan Tokutei Ginou (SSW).
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                id="btn-hero-quiz"
                onClick={() => setQuizOpen(true)}
                className="bg-[#A63A2B] hover:bg-[#8A2E22] text-white px-7 py-3.5 rounded font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Ikuti Tes Minat & Bakat</span>
              </button>
              <a
                href="#program"
                className="border border-[#7C8CAE] hover:border-[#F6F1E3] text-[#F6F1E3] hover:text-white px-6 py-3.5 rounded font-bold text-sm sm:text-base transition-all bg-white/5 hover:bg-white/10"
              >
                Lihat Program Kelas
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs text-[#DCE2ED]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>LPK Resmi & Terdaftar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mitra Kumiai & SO di Jepang</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparan Tanpa Biaya Tersembunyi</span>
              </div>
            </div>
          </div>

          {/* SVG Flight Art & Torii */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-3 right-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[11px] text-[#D8C79A] uppercase tracking-wider font-semibold">Jalur Penerbangan Resmi</span>
              </div>

              <svg viewBox="0 0 420 320" className="w-full h-auto drop-shadow-md" role="img" aria-label="Ilustrasi rute dari Indonesia menuju Jepang">
                <defs>
                  <linearGradient id="routeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A63A2B" />
                    <stop offset="50%" stopColor="#D8C79A" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                {/* Dashed background arc */}
                <path d="M40,250 C130,120 260,90 370,60" fill="none" stroke="#4C608A" strokeWidth="1.5" strokeDasharray="3 6" />
                {/* Animated flight path */}
                <path id="flightpath" d="M40,250 C130,120 260,90 370,60" fill="none" stroke="url(#routeGrad)" strokeWidth="2.5" />
                
                {/* Indonesia Pin */}
                <circle cx="40" cy="250" r="7" fill="#A63A2B" />
                <circle cx="40" cy="250" r="13" fill="#A63A2B" opacity="0.3" className="animate-ping" />
                <text x="40" y="278" fill="#F6F1E3" fontSize="13" fontWeight="bold" fontFamily="Zen Kaku Gothic New" textAnchor="middle">
                  Indonesia
                </text>

                {/* Japan Pin */}
                <circle cx="370" cy="60" r="7" fill="#A63A2B" />
                <circle cx="370" cy="60" r="13" fill="#A63A2B" opacity="0.3" />
                <text x="370" y="40" fill="#F6F1E3" fontSize="13" fontWeight="bold" fontFamily="Zen Kaku Gothic New" textAnchor="middle">
                  Jepang (日本)
                </text>

                {/* Animated Airplane */}
                <g>
                  <path d="M0,0 l16,4 l-16,9 l4,-9 z" fill="#FFFFFF" stroke="#152238" strokeWidth="0.8">
                    <animateMotion dur="2.6s" begin="0.4s" fill="freeze" path="M40,250 C130,120 260,90 370,60" rotate="auto" />
                  </path>
                </g>

                {/* Japanese Torii Silhouette */}
                <g transform="translate(165,145)" opacity="0.95">
                  <rect x="-46" y="18" width="8" height="64" fill="#D8C79A" />
                  <rect x="38" y="18" width="8" height="64" fill="#D8C79A" />
                  <rect x="-58" y="10" width="116" height="9" rx="2" fill="#D8C79A" />
                  <rect x="-50" y="-4" width="100" height="7" rx="2" fill="#D8C79A" />
                  <rect x="-6" y="10" width="12" height="14" fill="#D8C79A" />
                </g>
              </svg>

              <div className="flex justify-between items-center text-xs text-[#B8C2DA] border-t border-white/10 pt-3 mt-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A63A2B]"></span>
                  <span>Keberangkatan Terstruktur</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8C79A]"></span>
                  <span>Penempatan Kerja Sah</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Seigaiha Wave Divider */}
        <div className="w-full h-11 overflow-hidden leading-none">
          <svg className="w-full h-11 block" viewBox="0 0 1180 44" preserveAspectRatio="none">
            <defs>
              <pattern id="seigaiha" width="58" height="30" patternUnits="userSpaceOnUse">
                <path d="M0,30 a29,29 0 0 1 58,0 z" fill="#F6F1E3" />
              </pattern>
            </defs>
            <rect width="1180" height="44" fill="url(#seigaiha)" />
          </svg>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section id="stats-section" className="bg-[#F6F1E3] py-14 border-b border-[#D8CEB0]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-[#A63A2B] pl-4">
              <div className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">1.200+</div>
              <div className="text-sm text-[#514C3E] mt-1.5 leading-snug">Alumni bekerja di berbagai wilayah Jepang</div>
            </div>
            <div className="border-l-2 border-[#A63A2B] pl-4">
              <div className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">87%</div>
              <div className="text-sm text-[#514C3E] mt-1.5 leading-snug">Kelulusan JLPT N4 dalam 6 bulan pertama</div>
            </div>
            <div className="border-l-2 border-[#A63A2B] pl-4">
              <div className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">40+</div>
              <div className="text-sm text-[#514C3E] mt-1.5 leading-snug">Perusahaan dan Kumiai mitra di Jepang</div>
            </div>
            <div className="border-l-2 border-[#A63A2B] pl-4">
              <div className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">9 Tahun</div>
              <div className="text-sm text-[#514C3E] mt-1.5 leading-snug">Mendampingi calon pekerja migran Indonesia</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAM ============ */}
      <section id="program" className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-[#A63A2B] text-xs font-bold uppercase tracking-widest mb-2 font-zen">Jalur Persiapan Komprehensif</div>
            <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">Dua Jalur, Satu Tujuan</h2>
            <p className="text-[#514C3E] mt-4 text-base sm:text-lg leading-relaxed">
              Program kelas dan program penyaluran kerja dirancang berkesinambungan, supaya kemampuan bahasa yang dipelajari langsung terpakai di tempat kerja di Jepang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Card A: Buku / Halaman Kelas */}
            <div className="relative bg-[#F6F1E3] border border-[#D8CEB0] p-8 sm:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
              <div className="absolute top-6 right-6 w-14 h-14 border-2 border-[#A63A2B]/80 rounded-full flex items-center justify-center opacity-85 pointer-events-none">
                <span className="font-mincho text-[#A63A2B] text-xs font-bold rotate-12">教室</span>
              </div>

              <div>
                <div className="inline-block text-xs font-bold text-[#152238] bg-[#EAE1C8] px-3 py-1 rounded mb-4">
                  Tahap Akademik & Percakapan
                </div>
                <h3 className="font-mincho text-2xl sm:text-3xl font-bold text-[#152238]">Kelas Bahasa Jepang</h3>
                <p className="text-[#514C3E] text-sm mt-2 mb-6">
                  Fokus pada penguasaan tata bahasa, kosakata teknis kerja, dan simulasi wawancara tatap muka.
                </p>

                <ul className="space-y-3.5 border-t border-[#D8CEB0] pt-5 text-[15px] text-[#1B1912]">
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#A63A2B] font-bold text-sm mt-0.5">字</span>
                    <span>Kelas JLPT N5 sampai N3, tersedia jadwal pagi dan malam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#A63A2B] font-bold text-sm mt-0.5">字</span>
                    <span>Kelas percakapan kerja (kaiwa) intensif untuk wawancara user</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#A63A2B] font-bold text-sm mt-0.5">字</span>
                    <span>Pemahaman budaya kerja, kedisiplinan, dan etika hou-ren-so</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#A63A2B] font-bold text-sm mt-0.5">字</span>
                    <span>Kelas tatap muka dan kelas interaktif daring bersertifikat</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D8CEB0]">
                <button
                  onClick={() => openWhatsAppDirect('Pendaftaran Kelas Bahasa Jepang')}
                  className="w-full bg-[#213A63] hover:bg-[#152238] text-white py-3 px-4 rounded text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Daftar Kelas Bahasa Jepang</span>
                </button>
              </div>
            </div>

            {/* Card B: Tiket Keberangkatan */}
            <div className="relative bg-[#152238] text-[#F6F1E3] p-8 sm:p-10 rounded shadow-md flex flex-col justify-between overflow-hidden border border-[#213A63]">
              <div>
                <div className="inline-block text-xs font-bold text-[#152238] bg-[#D8C79A] px-3 py-1 rounded mb-4">
                  出発 Keberangkatan Resmi
                </div>
                <h3 className="font-mincho text-2xl sm:text-3xl font-bold text-white">Penyaluran Kerja ke Jepang</h3>
                <p className="text-[#DCE2ED] text-sm mt-2 mb-6">
                  Penempatan resmi dengan kontrak kerja sah, perlindungan asuransi, dan fasilitas tempat tinggal di Jepang.
                </p>

                <ul className="space-y-3.5 border-t border-[#4C608A] pt-5 text-[15px] text-[#DCE2ED]">
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#D8C79A] font-bold text-sm mt-0.5">発</span>
                    <span>Program Magang / Kenshusei (Ginou Jisshu) 3 – 5 Tahun</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#D8C79A] font-bold text-sm mt-0.5">発</span>
                    <span>Program Specified Skilled Worker (Tokutei Ginou / SSW) gaji standar Jepang</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#D8C79A] font-bold text-sm mt-0.5">発</span>
                    <span>Sektor: manufaktur, pertanian, perawatan lansia (kaigo), konstruksi, perhotelan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mincho text-[#D8C79A] font-bold text-sm mt-0.5">発</span>
                    <span>Pendampingan penuh dokumen legalitas, paspor, visa, hingga Certificate of Eligibility (COE)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#4C608A]">
                <button
                  onClick={() => openWhatsAppDirect('Program Penyaluran Kerja (Magang / SSW)')}
                  className="w-full bg-[#A63A2B] hover:bg-[#8A2E22] text-white py-3 px-4 rounded text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Plane className="w-4 h-4" />
                  <span>Konsultasi Penyaluran Kerja</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROSES ============ */}
      <section id="proses" className="py-24 bg-[#EAE1C8] border-y border-[#D8CEB0]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-[#A63A2B] text-xs font-bold uppercase tracking-widest mb-2 font-zen">Tahapan Transparan</div>
            <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">Proses Menuju Jepang</h2>
            <p className="text-[#514C3E] mt-4 text-base sm:text-lg leading-relaxed">
              Lima tahap yang dijalani setiap peserta, dari pendaftaran pertama sampai bekerja di perusahaan mitra di Jepang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            <div className="bg-[#F6F1E3] md:bg-transparent p-5 md:p-0 rounded border md:border-none border-[#D8CEB0] md:border-t-4 md:border-t-[#152238] md:pt-6">
              <span className="font-mincho text-2xl font-bold text-[#A63A2B] block mb-2">01</span>
              <h4 className="font-bold text-[#152238] text-base mb-2">Pendaftaran & Tes Minat Bakat</h4>
              <p className="text-sm text-[#514C3E] leading-relaxed">
                Wawancara awal, pemeriksaan fisik dasar, dan pemetaan minat sektor pekerjaan yang paling sesuai.
              </p>
            </div>

            <div className="bg-[#F6F1E3] md:bg-transparent p-5 md:p-0 rounded border md:border-none border-[#D8CEB0] md:border-t-4 md:border-t-[#152238] md:pt-6">
              <span className="font-mincho text-2xl font-bold text-[#A63A2B] block mb-2">02</span>
              <h4 className="font-bold text-[#152238] text-base mb-2">Pelatihan Bahasa & Budaya</h4>
              <p className="text-sm text-[#514C3E] leading-relaxed">
                Kelas intensif tata bahasa, percakapan kerja harian, dan latihan simulasi ritme kehidupan di Jepang.
              </p>
            </div>

            <div className="bg-[#F6F1E3] md:bg-transparent p-5 md:p-0 rounded border md:border-none border-[#D8CEB0] md:border-t-4 md:border-t-[#152238] md:pt-6">
              <span className="font-mincho text-2xl font-bold text-[#A63A2B] block mb-2">03</span>
              <h4 className="font-bold text-[#152238] text-base mb-2">Interview Perusahaan Mitra</h4>
              <p className="text-sm text-[#514C3E] leading-relaxed">
                Sesi wawancara langsung atau daring dengan pimpinan Kumiai dan perusahaan penerima di Jepang.
              </p>
            </div>

            <div className="bg-[#F6F1E3] md:bg-transparent p-5 md:p-0 rounded border md:border-none border-[#D8CEB0] md:border-t-4 md:border-t-[#152238] md:pt-6">
              <span className="font-mincho text-2xl font-bold text-[#A63A2B] block mb-2">04</span>
              <h4 className="font-bold text-[#152238] text-base mb-2">Dokumen, Visa & COE</h4>
              <p className="text-sm text-[#514C3E] leading-relaxed">
                Penyusunan berkas kontrak resmi, legalisir Certificate of Eligibility (COE), dan penerbitan visa kerja.
              </p>
            </div>

            <div className="bg-[#F6F1E3] md:bg-transparent p-5 md:p-0 rounded border md:border-none border-[#D8CEB0] md:border-t-4 md:border-t-[#152238] md:pt-6">
              <span className="font-mincho text-2xl font-bold text-[#A63A2B] block mb-2">05</span>
              <h4 className="font-bold text-[#152238] text-base mb-2">Keberangkatan & Pendampingan</h4>
              <p className="text-sm text-[#514C3E] leading-relaxed">
                Pembekalan final di bandara dan pendampingan berkelanjutan selama masa kontrak di Jepang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALUMNI ============ */}
      <section id="alumni" className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-[#A63A2B] text-xs font-bold uppercase tracking-widest mb-2 font-zen">Bukti Nyata</div>
            <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">Cerita dari Jepang</h2>
            <p className="text-[#514C3E] mt-4 text-base sm:text-lg leading-relaxed">
              Kisah alumni Akemi yang kini aktif bekerja dengan bangga di berbagai prefektur Jepang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F6F1E3] border border-[#D8CEB0] p-8 rounded flex flex-col justify-between shadow-sm">
              <p className="text-base text-[#1B1912] leading-relaxed italic">
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">「</span>
                Kelas kaiwa sangat membantu saat interview dengan fasilitas kaigo di Osaka. Sekarang saya sudah tahun kedua bekerja di sana dan bisa mengirim tabungan untuk orang tua setiap bulan.
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">」</span>
              </p>
              <div className="mt-8 pt-5 border-t border-[#D8CEB0]">
                <div className="font-bold text-[#152238] text-base">Rina Aprilia</div>
                <div className="text-xs text-[#514C3E] mt-0.5">Perawatan Lansia (Kaigo) — Osaka, Jepang</div>
              </div>
            </div>

            <div className="bg-[#F6F1E3] border border-[#D8CEB0] p-8 rounded flex flex-col justify-between shadow-sm">
              <p className="text-base text-[#1B1912] leading-relaxed italic">
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">「</span>
                Pendampingan dokumen visa dan COE-nya rapi, tidak ada yang mendadak. Berangkat sesuai jadwal ke pabrik komponen di Aichi dengan bimbingan sensei yang ramah.
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">」</span>
              </p>
              <div className="mt-8 pt-5 border-t border-[#D8CEB0]">
                <div className="font-bold text-[#152238] text-base">Bayu Saputra</div>
                <div className="text-xs text-[#514C3E] mt-0.5">Tokutei Ginou Manufaktur — Aichi, Jepang</div>
              </div>
            </div>

            <div className="bg-[#F6F1E3] border border-[#D8CEB0] p-8 rounded flex flex-col justify-between shadow-sm">
              <p className="text-base text-[#1B1912] leading-relaxed italic">
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">「</span>
                Simulasi budaya kerja sebelum berangkat bikin saya tidak kaget dengan ritme kerja di lahan pertanian Ibaraki. Komunikasi dengan shacho juga lancar berkat latihan rutin.
                <span className="text-xl font-mincho text-[#A63A2B] font-bold not-italic">」</span>
              </p>
              <div className="mt-8 pt-5 border-t border-[#D8CEB0]">
                <div className="font-bold text-[#152238] text-base">Siti Nur Halimah</div>
                <div className="text-xs text-[#514C3E] mt-0.5">Program Magang Pertanian — Ibaraki, Jepang</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEGALITAS ============ */}
      <section id="legalitas" className="py-20 bg-[#152238] text-[#F6F1E3] border-y border-[#213A63]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#D8C79A] text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Kepatuhan & Integritas Hukum</span>
              </div>
              <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-white max-w-md leading-tight">
                Legal, Transparan, Terdaftar
              </h2>

              <ul className="mt-8 space-y-4 text-sm sm:text-base text-[#DCE2ED]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Lembaga Pelatihan Kerja (LPK) berizin resmi Kementerian Ketenagakerjaan RI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bekerja sama dengan Sending Organization (SO) berizin legal & bereputasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bermitra dengan Kumiai (Supervising Organization) terdaftar resmi di Jepang</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rincian biaya program dipaparkan secara terbuka sejak sesi konsultasi pertama</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1D3055] border border-[#354A72] p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-[#D8C79A]" />
                <strong className="font-mincho text-xl text-white">Prinsip Tanpa Biaya Tersembunyi</strong>
              </div>
              <p className="text-sm leading-relaxed text-[#C9D2E4]">
                Semua komponen biaya — pelatihan bahasa, medical check-up, legalisasi dokumen, tiket pesawat, hingga asuransi keberangkatan — dijelaskan secara tertulis sebelum calon peserta menandatangani komitmen kerja sama.
              </p>
              <div className="mt-6 pt-5 border-t border-[#354A72] flex flex-wrap gap-4 text-xs text-[#D8C79A]">
                <span className="bg-[#152238] px-3 py-1.5 rounded border border-[#354A72]">✓ Surat Perjanjian Resmi</span>
                <span className="bg-[#152238] px-3 py-1.5 rounded border border-[#354A72]">✓ Kwitansi Sah Bermaterai</span>
                <span className="bg-[#152238] px-3 py-1.5 rounded border border-[#354A72]">✓ Bimbingan Visa Penuh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KONTAK & KONSULTASI ============ */}
      <section id="kontak" className="py-24 bg-[#F6F1E3]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div>
              <div className="text-[#A63A2B] text-xs font-bold uppercase tracking-widest mb-2 font-zen">Pendaftaran & Tanya Jawab</div>
              <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#152238]">Konsultasi Gratis Sekarang</h2>
              <p className="text-[#514C3E] mt-4 text-base leading-relaxed max-w-lg">
                Ceritakan minat kamu — mau mulai dari kelas bahasa Jepang dari nol, atau sudah siap mendaftar program penyaluran kerja (Magang / SSW). Tim kami akan merespons langsung lewat WhatsApp.
              </p>

              <div className="mt-8 space-y-5 text-[15px]">
                <div className="flex items-start gap-3.5 p-4 bg-white/70 rounded border border-[#D8CEB0]">
                  <MapPin className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#514C3E] tracking-wider mb-0.5">Alamat Kantor</span>
                    <strong className="text-[#152238] font-semibold">{ADDRESS_DISPLAY}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white/70 rounded border border-[#D8CEB0]">
                  <Phone className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#514C3E] tracking-wider mb-0.5">WhatsApp Konsultasi</span>
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#152238] hover:text-[#A63A2B] font-bold text-base transition-colors"
                    >
                      {WA_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white/70 rounded border border-[#D8CEB0]">
                  <Instagram className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#514C3E] tracking-wider mb-0.5">Akun Instagram Resmi</span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#152238] hover:text-[#A63A2B] font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <span>@lpkakemi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white/70 rounded border border-[#D8CEB0]">
                  <Clock className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#514C3E] tracking-wider mb-0.5">Jam Pelayanan</span>
                    <span className="text-[#152238] font-medium">Senin – Sabtu, 09.00 – 17.00 WIB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-[#D8CEB0] p-8 sm:p-10 rounded shadow-md">
              <div className="flex items-center gap-2 text-[#152238] font-mincho text-xl font-bold mb-6 pb-3 border-b border-[#D8CEB0]">
                <span>Formulir Pengajuan Konsultasi</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="form-nama" className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                    Nama Lengkap <span className="text-[#A63A2B]">*</span>
                  </label>
                  <input
                    id="form-nama"
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 border border-[#D8CEB0] rounded bg-white text-[#1B1912] focus:outline-none focus:ring-2 focus:ring-[#A63A2B] text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="form-wa" className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-[#A63A2B]">*</span>
                  </label>
                  <input
                    id="form-wa"
                    type="tel"
                    required
                    value={formData.wa}
                    onChange={(e) => setFormData({ ...formData, wa: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 border border-[#D8CEB0] rounded bg-white text-[#1B1912] focus:outline-none focus:ring-2 focus:ring-[#A63A2B] text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="form-minat" className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                    Minat Program <span className="text-[#A63A2B]">*</span>
                  </label>
                  <select
                    id="form-minat"
                    value={formData.minat}
                    onChange={(e) => setFormData({ ...formData, minat: e.target.value })}
                    className="w-full px-4 py-3 border border-[#D8CEB0] rounded bg-white text-[#1B1912] focus:outline-none focus:ring-2 focus:ring-[#A63A2B] text-sm"
                  >
                    <option>Kelas Bahasa Jepang (JLPT N5-N3 & Kaiwa)</option>
                    <option>Program Magang Jepang (Kenshusei)</option>
                    <option>Program Specified Skilled Worker (Tokutei Ginou / SSW)</option>
                    <option>Belum yakin, ingin konsultasi & tes minat bakat dulu</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-pesan" className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                    Catatan / Pertanyaan (Opsional)
                  </label>
                  <textarea
                    id="form-pesan"
                    rows={3}
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    placeholder="Ceritakan latar belakang pendidikan atau bidang pekerjaan yang kamu minati..."
                    className="w-full px-4 py-3 border border-[#D8CEB0] rounded bg-white text-[#1B1912] focus:outline-none focus:ring-2 focus:ring-[#A63A2B] text-sm resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A63A2B] hover:bg-[#8A2E22] text-white py-3.5 px-6 rounded font-bold text-sm tracking-wide transition-all shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim & Terhubung ke WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#514C3E] text-center leading-normal">
                  Pesan konsultasi akan otomatis tersusun rapi dan terhubung ke tim Akemi di nomor <strong>{WA_DISPLAY}</strong>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#152238] text-[#9FB0CC] py-14 border-t border-[#213A63] text-sm">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#213A63]">
            {/* Col 1: Brand & Logo */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={akemiLogo}
                  alt="Logo Akemi"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-cover rounded-full border border-[#3E5D93]"
                />
                <div>
                  <span className="font-mincho text-xl font-bold text-[#F6F1E3] block leading-none">Akemi</span>
                  <span className="text-xs text-[#D8C79A]">明美 — LPK Bahasa Jepang</span>
                </div>
              </div>
              <p className="text-xs text-[#C9D2E4] leading-relaxed max-w-sm">
                Lembaga Pelatihan Kerja (LPK) khusus bahasa Jepang dan penyaluran kerja resmi program Magang dan Tokutei Ginou (SSW).
              </p>
            </div>

            {/* Col 2: Alamat & Kontak Resmi */}
            <div>
              <div className="text-xs uppercase font-bold text-[#D8C79A] tracking-wider mb-3">Kontak & Lokasi</div>
              <ul className="space-y-2.5 text-xs text-[#C9D2E4]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#A63A2B] shrink-0 mt-0.5" />
                  <span>{ADDRESS_DISPLAY}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A63A2B] shrink-0" />
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: {WA_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#A63A2B] shrink-0" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">
                    Instagram: @lpkakemi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Program & Nav */}
            <div>
              <div className="text-xs uppercase font-bold text-[#D8C79A] tracking-wider mb-3">Navigasi Singkat</div>
              <ul className="space-y-2 text-xs text-[#C9D2E4]">
                <li><a href="#program" className="hover:text-white transition-colors">Kelas Bahasa Jepang (JLPT N5-N3)</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Penyaluran Magang (Ginou Jisshu)</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Tokutei Ginou / SSW</a></li>
                <li><a href="#legalitas" className="hover:text-white transition-colors">Izin LPK & Ketenagakerjaan</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7C8CAE]">
            <div>© {new Date().getFullYear()} Akemi. Lembaga Pelatihan Kerja & Kursus Bahasa Jepang. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram @lpkakemi</span>
              </a>
              <span>•</span>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WA: {WA_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ---------- FLOATING WHATSAPP BUTTON ---------- */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Akemi,%20saya%20ingin%20konsultasi%20mengenai%20kelas%20bahasa%20dan%20kerja%20ke%20Jepang.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp Akemi"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-110 group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pr-1">
          Chat WhatsApp
        </span>
      </a>

      {/* ---------- MODAL TES MINAT & BAKAT ---------- */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F6F1E3] border border-[#D8CEB0] rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-[#1B1912] animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#514C3E] hover:text-[#152238] rounded-full hover:bg-[#EAE1C8]"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#A63A2B] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Simulasi & Rekomendasi Karir</span>
            </div>
            <h3 className="font-mincho text-2xl font-bold text-[#152238] mb-2">Tes Minat & Bakat Kerja ke Jepang</h3>
            <p className="text-xs text-[#514C3E] mb-6">
              Pilih profil kamu untuk mendapatkan rekomendasi sektor kerja dan jalur keberangkatan paling tepat.
            </p>

            <form onSubmit={handleQuizSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                  1. Pendidikan Terakhir
                </label>
                <select
                  value={quizAnswers.pendidikan}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, pendidikan: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8CEB0] rounded text-sm text-[#1B1912]"
                >
                  <option>SMA / SMK Sederajat</option>
                  <option>Diploma (D3)</option>
                  <option>Sarjana (S1)</option>
                  <option>Pendidikan Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                  2. Sektor / Bidang yang Paling Diminati
                </label>
                <select
                  value={quizAnswers.bidang}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, bidang: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8CEB0] rounded text-sm text-[#1B1912]"
                >
                  <option>Manufaktur & Pabrik Komponen Mesin</option>
                  <option>Perawatan Lansia (Kaigo / Caregiver)</option>
                  <option>Pertanian Modern & Hortikultura</option>
                  <option>Konstruksi & Teknik Bangunan</option>
                  <option>Perhotelan, Kuliner & Restoran</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                  3. Tingkat Kemampuan Bahasa Jepang Saat Ini
                </label>
                <select
                  value={quizAnswers.pengalaman}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, pengalaman: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8CEB0] rounded text-sm text-[#1B1912]"
                >
                  <option>Belum ada pengalaman (mulai dari nol / huruf Kana)</option>
                  <option>Sudah pernah belajar mandiri / dasar N5</option>
                  <option>Sudah memiliki sertifikat JLPT N4 / N3 / JFT-Basic</option>
                  <option>Pernah magang di Jepang sebelumnya (Ex-Kenshusei)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#514C3E] uppercase tracking-wider mb-1.5">
                  4. Rencana Target Penempatan
                </label>
                <select
                  value={quizAnswers.target}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, target: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8CEB0] rounded text-sm text-[#1B1912]"
                >
                  <option>Kerja resmi via Tokutei Ginou (SSW) gaji penuh</option>
                  <option>Program Magang (Ginou Jisshu) 3 - 5 Tahun</option>
                  <option>Fokus lulus JLPT N4 terlebih dahulu</option>
                </select>
              </div>

              <div className="pt-3 border-t border-[#D8CEB0]">
                <button
                  type="submit"
                  className="w-full bg-[#A63A2B] hover:bg-[#8A2E22] text-white py-3 rounded font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dapatkan Rekomendasi via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#514C3E] text-center mt-2">
                  Konsultan Akemi di nomor {WA_DISPLAY} akan menganalisis profil dan memberikan jadwal interview.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
