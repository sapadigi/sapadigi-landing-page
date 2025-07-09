"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  BookOpen,
  ChevronDown,
  Play,
  Star,
  MessageCircle,
  Globe,
  Smartphone,
  Heart,
  ShoppingBag,
  Download,
  Zap,
  TrendingUp,
  UserCheck,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

export default function SapadigiLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{
    beranda: boolean;
    "kenapa-sapadigi": boolean;
    sapatools: boolean;
    sapamarket: boolean;
    testimoni: boolean;
  }>({
    beranda: false,
    "kenapa-sapadigi": false,
    sapatools: false,
    sapamarket: false,
    testimoni: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "👴🏻",
      title: "Orang Tua Tertinggal, Anak Jalan Sendiri",
      description:
        "Banyak orang tua yang tidak paham dunia digital — gaptek, bingung, dan akhirnya tak bisa membimbing anaknya ke arah yang sehat dan produktif di era teknologi. Anak jadi belajar sendiri, tanpa arahan, rawan salah arah.",
    },
    {
      icon: "🎓",
      title: "Pelajar & Mahasiswa Belajar, Tapi Buntu Arah",
      description:
        "Mereka rajin sekolah dan kuliah, tapi tak pernah benar-benar diperkenalkan pada potensi karier digital: Konten kreator, freelancer, startup builder, app developer. Yang mereka tahu: 'kerja kantoran setelah lulus'.",
    },
    {
      icon: "📉",
      title: "Pengangguran Banyak, Peluang Digital Dibiarkan Lewat",
      description:
        "Di saat pengangguran meningkat, justru dunia digital menawarkan banyak peluang: Jualan online, jadi desainer, editor, admin sosial media, bahkan nulis konten. Tapi sayangnya, banyak yang tidak tahu harus mulai dari mana.",
    },
    {
      icon: "🏪",
      title: "UMKM Mau Go Digital, Tapi Bingung Caranya",
      description:
        "Pemilik usaha kecil sering dengar 'harus digital', tapi... Bingung bikin konten, tidak tahu cara bikin katalog, apalagi bikin sistem sendiri. Padahal tools-nya ada — tapi tidak diajarkan dengan cara yang sederhana.",
    },
    {
      icon: "👷",
      title: "Pekerja Ingin Upgrade Skill, Tapi Terjebak Rutinitas",
      description:
        "Banyak pekerja yang ingin belajar skill digital baru. Tapi waktunya sempit. Bingung mulai dari mana, takut nggak sanggup, merasa 'udah telat'. Padahal skill digital bisa jadi jalan baru yang lebih fleksibel dan menjanjikan.",
    },
    {
      icon: "📱",
      title: "Teknologi Terlihat Rumit, Jadi Tak Tersentuh",
      description:
        "Buat banyak orang, dunia digital itu terlihat seperti dunia asing. Dipenuhi istilah teknis, coding, AI, UI/UX — padahal sebenarnya bisa dimulai dari hal sederhana. Yang dibutuhkan hanya satu hal: cara penyampaian yang membumi dan bisa disapa.",
    },
  ];

  const sapaTools = [
    {
      name: "Template Konten",
      description:
        "Template siap pakai untuk berbagai kebutuhan konten media sosial",
      icon: BookOpen,
      category: "Content",
    },
    {
      name: "Desain Promo UMKM",
      description: "Template desain promosi khusus untuk usaha kecil menengah",
      icon: TrendingUp,
      category: "Design",
    },
    {
      name: "Pembuat Landing Page",
      description: "Tool sederhana untuk membuat halaman website tanpa coding",
      icon: Globe,
      category: "Website",
    },
    {
      name: "Bot WhatsApp Dasar",
      description: "Template bot WhatsApp untuk customer service otomatis",
      icon: MessageCircle,
      category: "Automation",
    },
    {
      name: "Resume & Portofolio Generator",
      description: "Buat CV dan portofolio profesional dalam hitungan menit",
      icon: UserCheck,
      category: "Career",
    },
    {
      name: "Katalog Digital",
      description:
        "Template katalog produk digital yang menarik dan mudah dibagikan",
      icon: ShoppingBag,
      category: "Business",
    },
  ];

  const sapaMarketProducts = [
    {
      name: "E-book & Template Edukatif",
      description:
        "Panduan lengkap dan template siap pakai untuk berbagai kebutuhan digital",
      price: "Mulai dari 25K",
      category: "Education",
    },
    {
      name: "Jasa Desain Konten",
      description:
        "Layanan desain konten profesional untuk media sosial dan marketing",
      price: "Mulai dari 50K",
      category: "Service",
    },
    {
      name: "Jasa Website & Bot",
      description:
        "Pembuatan website dan bot WhatsApp sesuai kebutuhan bisnis Anda",
      price: "Mulai dari 150K",
      category: "Development",
    },
    {
      name: "Paket Edukasi + Mentorship",
      description:
        "Program belajar intensif dengan bimbingan langsung dari mentor",
      price: "Mulai dari 100K",
      category: "Mentoring",
    },
  ];

  const testimonials = [
    {
      name: "Bu Rina",
      role: "Ibu Rumah Tangga",
      content:
        "Saya ibu rumah tangga yang gaptek. Sekarang sudah bisa bantu usaha suami pakai katalog digital dari SapaTools.",
      rating: 5,
    },
    {
      name: "Aldi",
      role: "Mahasiswa",
      content:
        "Dulu bingung mau kerja apa. Sekarang saya belajar desain dan jual template lewat SapaMarket.",
      rating: 5,
    },
    {
      name: "Pak Budi",
      role: "Pemilik Warung",
      content:
        "Warung saya sekarang punya sistem pemesanan online berkat bantuan SapaTools. Omzet naik 40%!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Apakah semua tools di Sapadigi gratis?",
      answer:
        "SapaTools sebagian besar gratis untuk digunakan. Untuk produk premium dan jasa khusus, tersedia di SapaMarket dengan harga terjangkau.",
    },
    {
      question: "Saya gaptek banget, bisa ikut?",
      answer:
        "Tentu saja! Sapadigi dirancang khusus untuk pemula. Kami mengajarkan dari dasar dengan bahasa yang mudah dipahami, tanpa istilah teknis yang rumit.",
    },
    {
      question: "Apakah cocok untuk anak sekolah?",
      answer:
        "Sangat cocok! Banyak siswa dan mahasiswa yang sudah merasakan manfaat SapaTools untuk tugas sekolah, organisasi, bahkan memulai usaha kecil.",
    },
    {
      question: "Bagaimana cara menggunakan SapaMarket?",
      answer:
        "SapaMarket adalah etalase resmi produk dan jasa Sapadigi. Anda bisa langsung memesan melalui website atau menghubungi tim kami untuk konsultasi.",
    },
    {
      question: "Apakah saya bisa konsultasi atau minta arahan?",
      answer:
        "Tentu! Kami menyediakan layanan konsultasi gratis untuk membantu Anda memilih tools atau produk yang tepat sesuai kebutuhan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Sapadigi
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#beranda"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Beranda
              </a>
              <a
                href="#kenapa-sapadigi"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Tentang
              </a>
              <a
                href="#sapatools"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                SapaTools
              </a>
              <a
                href="#sapamarket"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                SapaMarket
              </a>
              <a
                href="#testimoni"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Testimoni
              </a>
              <a
                href="#kontak"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Kontak
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:inline-flex bg-gray-900 hover:bg-gray-800 text-white">
                Mulai Sekarang
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 mt-4">
                <a
                  href="#beranda"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Beranda
                </a>
                <a
                  href="#kenapa-sapadigi"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Tentang
                </a>
                <a
                  href="#sapatools"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  SapaTools
                </a>
                <a
                  href="#sapamarket"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  SapaMarket
                </a>
                <a
                  href="#testimoni"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Testimoni
                </a>
                <a
                  href="#kontak"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Kontak
                </a>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Mulai Sekarang
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Sapadigi:
                  </span>{" "}
                  Tempat Semua Orang Mulai Menyapa Digital.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kami hadir untuk bantu kamu lebih kenal, lebih paham, dan
                  lebih dekat dengan dunia teknologi — dari konten, bisnis,
                  sampai sistem digital.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Tanpa teori berat, tanpa harus punya latar belakang IT.
                  <br />
                  <strong className="text-gray-700">
                    Cukup satu langkah kecil: menyapa.
                  </strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size={"lg"}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  <span className="relative z-10">Mulai Sekarang</span>
                  {/* Flying bullet effect on button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-3 bg-transparent"
                >
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Jelajahi Sapadigi
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span>5000+ sudah mulai menyapa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-gray-400 text-gray-600" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div
              className={`${
                isVisible.beranda ? "animate-fade-in-right" : "opacity-0"
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-stone-100 rounded-3xl p-8 lg:p-12">
                  <Image
                    width={500}
                    height={400}
                    src="/placeholder.svg?height=400&width=500"
                    alt="Ilustrasi inklusif komunitas digital Sapadigi"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Satu Sapa</p>
                      <p className="text-sm text-gray-500">
                        Bisa Buka Masa Depan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Sapadigi Hadir Section */}
      <section id="kenapa-sapadigi" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bukan Sekadar Belajar Teknologi—Ini Tentang Masa Depan Kita Semua.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              <strong>
                Kenapa Sapadigi Harus Ada? Karena Ini Nyata. Ini Terjadi.
              </strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible["kenapa-sapadigi"]
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-sm">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gray-900 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              🎯 Inilah Alasan Sapadigi Ada.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Kami ingin semua orang — tanpa memandang usia, latar belakang,
              atau pendidikan — bisa menyapa dunia digital, memahami potensinya,
              dan mulai menggunakan teknologi untuk hidup yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* SapaTools Section */}
      <section id="sapatools" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kenalan Dulu Lewat SapaTools – Alat Digital Gratis Siap Pakai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami kumpulkan alat-alat praktis yang bisa langsung kamu gunakan,
              tanpa harus paham coding atau desain. Cocok untuk siswa, UMKM,
              pekerja, bahkan yang baru mulai menyapa dunia digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sapaTools.map((tool, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${
                  isVisible.sapatools ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      {tool.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {tool.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Coba Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              <Zap className="mr-2 h-5 w-5" />
              Coba SapaTools Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* SapaMarket Section */}
      <section
        id="sapamarket"
        className="py-20 bg-gradient-to-br from-gray-50 to-stone-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Butuh Solusi Siap Pakai? Cek SapaMarket
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Di sinilah kami menjual produk digital dan jasa berkualitas yang
              dibuat langsung oleh tim Sapadigi. Bukan marketplace umum — ini
              etalase resmi karya yang dirancang untuk bantu kamu mulai dari
              nol.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sapaMarketProducts.map((product, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${
                  isVisible.sapamarket ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 w-fit mb-2"
                  >
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Button variant="outline" size="sm">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Lihat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Lihat Produk & Jasa
            </Button>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sudah Banyak yang Mulai Menyapa Dunia Digital Bersama Kami.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dengar langsung dari mereka yang sudah merasakan manfaat Sapadigi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible.testimoni ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gray-400 text-gray-600"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Star className="mr-2 h-5 w-5" />
                Lihat Cerita Lainnya
              </Button>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                <Heart className="mr-2 h-5 w-5" />
                Bagikan Ceritamu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Masih Ragu? Tenang, Kami Jawab di Sini.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pertanyaan yang sering ditanyakan tentang Sapadigi
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Satu Sapa, Bisa Buka Masa Depan.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Dari orang tua sampai pelajar, dari UMKM sampai pekerja—semua bisa
              mulai dari satu langkah kecil: menyapa dunia digital.
              <br />
              <span className="text-gray-200">
                Kami bantu kamu dari &quot;halo&quot; sampai &quot;bisa&quot;.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3 font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" />
                Mulai Menyapa Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Sapadigi</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Platform edukasi digital yang membuka jalan menuju dunia digital
                untuk semua orang.
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ for a better digital future
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Smartphone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Tentang Sapadigi</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#kenapa-sapadigi"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Kenapa Sapadigi
                  </a>
                </li>
                <li>
                  <a
                    href="#sapatools"
                    className="hover:text-gray-300 transition-colors"
                  >
                    SapaTools
                  </a>
                </li>
                <li>
                  <a
                    href="#sapamarket"
                    className="hover:text-gray-300 transition-colors"
                  >
                    SapaMarket
                  </a>
                </li>
                <li>
                  <a
                    href="#testimoni"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Tools Gratis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Produk Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Jasa Pembuatan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Konsultasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Kontak & Sosial Media
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@sapadigi.id</li>
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Instagram: @sapadigi</li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Daftar Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Ajak Kolaborasi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Sapadigi. Semua hak cipta dilindungi. | Powered by
              Sapadigi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
