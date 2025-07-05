"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Search,
  Download,
  BookOpen,
  TrendingUp,
  Globe,
  MessageCircle,
  UserCheck,
  ShoppingBag,
  Palette,
  Code,
  BarChart3,
  FileText,
  Camera,
  Smartphone,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function SapaToolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const categories = [
    { name: "All", count: 24 },
    { name: "Content", count: 6 },
    { name: "Design", count: 5 },
    { name: "Website", count: 4 },
    { name: "Automation", count: 3 },
    { name: "Career", count: 3 },
    { name: "Business", count: 3 },
  ]

  const tools = [
    {
      name: "Template Konten Media Sosial",
      description: "Koleksi template Instagram, Facebook, dan TikTok siap pakai untuk berbagai niche",
      icon: BookOpen,
      category: "Content",
      downloads: "2.5K",
      rating: 4.8,
      difficulty: "Pemula",
      features: ["50+ Template", "Format PSD & Canva", "Panduan Lengkap"],
    },
    {
      name: "Desain Promo UMKM",
      description: "Template desain promosi khusus untuk usaha kecil menengah dengan berbagai tema",
      icon: TrendingUp,
      category: "Design",
      downloads: "1.8K",
      rating: 4.9,
      difficulty: "Pemula",
      features: ["30+ Desain", "Mudah Edit", "Print Ready"],
    },
    {
      name: "Landing Page Builder",
      description: "Tool drag & drop untuk membuat halaman website tanpa coding",
      icon: Globe,
      category: "Website",
      downloads: "3.2K",
      rating: 4.7,
      difficulty: "Menengah",
      features: ["Drag & Drop", "Responsive", "SEO Friendly"],
    },
    {
      name: "Bot WhatsApp Customer Service",
      description: "Template bot WhatsApp untuk customer service otomatis dengan fitur lengkap",
      icon: MessageCircle,
      category: "Automation",
      downloads: "1.5K",
      rating: 4.6,
      difficulty: "Menengah",
      features: ["Auto Reply", "Menu Interaktif", "Integrasi Mudah"],
    },
    {
      name: "CV & Portfolio Generator",
      description: "Buat CV dan portofolio profesional dalam hitungan menit",
      icon: UserCheck,
      category: "Career",
      downloads: "4.1K",
      rating: 4.9,
      difficulty: "Pemula",
      features: ["10+ Template", "ATS Friendly", "Export PDF"],
    },
    {
      name: "Katalog Digital Interaktif",
      description: "Template katalog produk digital yang menarik dan mudah dibagikan",
      icon: ShoppingBag,
      category: "Business",
      downloads: "2.8K",
      rating: 4.8,
      difficulty: "Pemula",
      features: ["Interactive Design", "Mobile Friendly", "Easy Share"],
    },
    {
      name: "Brand Kit Generator",
      description: "Tool untuk membuat brand identity lengkap dengan logo, warna, dan font",
      icon: Palette,
      category: "Design",
      downloads: "1.9K",
      rating: 4.7,
      difficulty: "Menengah",
      features: ["Logo Generator", "Color Palette", "Font Pairing"],
    },
    {
      name: "Website Template Collection",
      description: "Koleksi template website untuk berbagai kebutuhan bisnis",
      icon: Code,
      category: "Website",
      downloads: "2.3K",
      rating: 4.8,
      difficulty: "Menengah",
      features: ["20+ Template", "Responsive", "Easy Customize"],
    },
    {
      name: "Social Media Analytics Tool",
      description: "Tool sederhana untuk tracking performa media sosial",
      icon: BarChart3,
      category: "Business",
      downloads: "1.2K",
      rating: 4.5,
      difficulty: "Menengah",
      features: ["Multi Platform", "Visual Reports", "Export Data"],
    },
    {
      name: "Content Calendar Template",
      description: "Template perencanaan konten untuk media sosial dan blog",
      icon: FileText,
      category: "Content",
      downloads: "3.5K",
      rating: 4.9,
      difficulty: "Pemula",
      features: ["Monthly View", "Content Ideas", "Tracking System"],
    },
    {
      name: "Photo Editor Templates",
      description: "Template editing foto untuk konten media sosial yang menarik",
      icon: Camera,
      category: "Design",
      downloads: "2.7K",
      rating: 4.6,
      difficulty: "Pemula",
      features: ["Filter Presets", "Frame Templates", "Text Overlays"],
    },
    {
      name: "Mobile App Mockup Kit",
      description: "Kit mockup untuk presentasi aplikasi mobile yang profesional",
      icon: Smartphone,
      category: "Design",
      downloads: "1.4K",
      rating: 4.8,
      difficulty: "Menengah",
      features: ["Multiple Devices", "High Resolution", "Easy to Use"],
    },
  ]

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Pemula":
        return "bg-green-100 text-green-700"
      case "Menengah":
        return "bg-yellow-100 text-yellow-700"
      case "Lanjutan":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Kembali</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  SapaTools
                </span>
              </div>
            </div>
            <Link href="/sapamarket">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                Lihat SapaMarket
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              SapaTools: Alat Digital{" "}
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Gratis</span>{" "}
              Siap Pakai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koleksi lengkap tools praktis yang bisa langsung kamu gunakan, tanpa harus paham coding atau desain. Semua
              gratis, semua mudah, semua untuk bantu kamu mulai menyapa dunia digital.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Cari tools yang kamu butuhkan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24+</div>
              <div className="text-gray-600">Tools Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Total Download</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Tools */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {tool.category}
                      </Badge>
                      <Badge className={getDifficultyColor(tool.difficulty)}>{tool.difficulty}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{tool.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Gratis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada tools yang ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Butuh Tools Khusus?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kalau tools yang ada belum sesuai kebutuhan, cek SapaMarket untuk solusi custom atau konsultasi langsung
            dengan tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sapamarket">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Lihat SapaMarket
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
