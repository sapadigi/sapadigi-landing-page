"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Tabs, { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Search,
  ShoppingBag,
  BookOpen,
  Palette,
  Users,
  Star,
  Clock,
  CheckCircle,
  MessageCircle,
  Zap,
  TrendingUp,
  Globe,
  Camera,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function SapaMarketPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeTab, setActiveTab] = useState("produk")

  const productCategories = [
    { name: "All", count: 16 },
    { name: "Education", count: 5 },
    { name: "Design", count: 4 },
    { name: "Business", count: 4 },
    { name: "Content", count: 3 },
  ]

  const serviceCategories = [
    { name: "All", count: 12 },
    { name: "Development", count: 4 },
    { name: "Design", count: 3 },
    { name: "Marketing", count: 3 },
    { name: "Consulting", count: 2 },
  ]

  const products = [
    {
      name: "Panduan Lengkap Digital Marketing untuk UMKM",
      description: "E-book komprehensif dengan strategi digital marketing yang terbukti efektif untuk usaha kecil",
      price: "Rp 49.000",
      originalPrice: "Rp 99.000",
      category: "Education",
      rating: 4.9,
      reviews: 127,
      bestseller: true,
      features: ["150+ halaman", "Case study nyata", "Template bonus", "Update gratis"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Template Presentasi Bisnis Premium",
      description: "Koleksi 50+ slide template untuk presentasi bisnis yang profesional dan menarik",
      price: "Rp 35.000",
      originalPrice: "Rp 75.000",
      category: "Design",
      rating: 4.8,
      reviews: 89,
      bestseller: false,
      features: ["50+ slide template", "Format PPT & Keynote", "Easy to customize", "Commercial license"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sistem Inventory Sederhana (Excel)",
      description: "Template Excel untuk mengelola stok barang dengan fitur otomatis dan laporan lengkap",
      price: "Rp 25.000",
      originalPrice: "Rp 50.000",
      category: "Business",
      rating: 4.7,
      reviews: 156,
      bestseller: true,
      features: ["Auto calculation", "Stock alerts", "Monthly reports", "Tutorial video"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Content Calendar & Planning Kit",
      description: "Template perencanaan konten lengkap dengan ide konten untuk 12 bulan",
      price: "Rp 30.000",
      originalPrice: "Rp 60.000",
      category: "Content",
      rating: 4.9,
      reviews: 203,
      bestseller: true,
      features: ["365 content ideas", "Monthly planner", "Hashtag research", "Analytics tracker"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Brand Identity Starter Pack",
      description: "Paket lengkap untuk membangun identitas brand dari nol hingga siap implementasi",
      price: "Rp 75.000",
      originalPrice: "Rp 150.000",
      category: "Design",
      rating: 4.8,
      reviews: 67,
      bestseller: false,
      features: ["Logo templates", "Color palettes", "Font combinations", "Brand guidelines"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Kursus Online: Memulai Bisnis Digital",
      description: "Video course lengkap untuk memulai bisnis digital dari nol hingga profit pertama",
      price: "Rp 199.000",
      originalPrice: "Rp 399.000",
      category: "Education",
      rating: 4.9,
      reviews: 312,
      bestseller: true,
      features: ["10+ jam video", "Live Q&A session", "Private community", "Certificate"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const services = [
    {
      name: "Pembuatan Website Profesional",
      description: "Jasa pembuatan website custom sesuai kebutuhan bisnis Anda dengan desain modern dan responsif",
      price: "Mulai Rp 1.500.000",
      category: "Development",
      rating: 4.9,
      reviews: 45,
      deliveryTime: "7-14 hari",
      features: ["Custom design", "Responsive", "SEO optimized", "1 tahun maintenance"],
      icon: Globe,
    },
    {
      name: "Desain Logo & Brand Identity",
      description: "Layanan desain logo profesional dengan konsep brand identity yang kuat dan memorable",
      price: "Mulai Rp 500.000",
      category: "Design",
      rating: 4.8,
      reviews: 78,
      deliveryTime: "3-5 hari",
      features: ["3 konsep desain", "Unlimited revisi", "File vector", "Brand guideline"],
      icon: Palette,
    },
    {
      name: "Setup & Optimasi Media Sosial",
      description: "Jasa setup dan optimasi akun media sosial untuk bisnis dengan strategi konten yang tepat",
      price: "Mulai Rp 750.000",
      category: "Marketing",
      rating: 4.7,
      reviews: 92,
      deliveryTime: "5-7 hari",
      features: ["Multi platform setup", "Content strategy", "Bio optimization", "Analytics setup"],
      icon: TrendingUp,
    },
    {
      name: "Bot WhatsApp Custom",
      description: "Pembuatan bot WhatsApp sesuai kebutuhan bisnis dengan fitur auto reply dan integrasi sistem",
      price: "Mulai Rp 800.000",
      category: "Development",
      rating: 4.8,
      reviews: 34,
      deliveryTime: "5-10 hari",
      features: ["Custom flow", "Auto reply", "Integration ready", "Training included"],
      icon: MessageCircle,
    },
    {
      name: "Konsultasi Strategi Digital",
      description: "Sesi konsultasi 1-on-1 untuk merancang strategi digital yang tepat untuk bisnis Anda",
      price: "Rp 300.000/sesi",
      category: "Consulting",
      rating: 4.9,
      reviews: 156,
      deliveryTime: "1-2 hari",
      features: ["1 jam konsultasi", "Action plan", "Follow up support", "Recording session"],
      icon: Users,
    },
    {
      name: "Fotografi Produk Profesional",
      description: "Jasa foto produk berkualitas tinggi untuk kebutuhan e-commerce dan marketing",
      price: "Mulai Rp 400.000",
      category: "Design",
      rating: 4.8,
      reviews: 67,
      deliveryTime: "2-3 hari",
      features: ["High resolution", "Multiple angles", "Basic editing", "Commercial license"],
      icon: Camera,
    },
  ]

  const currentCategories = activeTab === "produk" ? productCategories : serviceCategories
  const currentItems = activeTab === "produk" ? products : services

  const filteredItems = currentItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                  SapaMarket
                </span>
              </div>
            </div>
            <Link href="/sapatools">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                Lihat SapaTools
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
              SapaMarket: Solusi{" "}
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Premium</span>{" "}
              Siap Pakai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Etalase resmi produk digital dan jasa berkualitas yang dibuat langsung oleh tim Sapadigi. Bukan
              marketplace umum — ini karya yang dirancang khusus untuk bantu kamu mulai dari nol.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Cari produk atau jasa yang kamu butuhkan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="produk" className="text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Produk Digital
              </TabsTrigger>
              <TabsTrigger value="jasa" className="text-lg">
                <Settings className="mr-2 h-5 w-5" />
                Jasa & Layanan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="produk">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {currentCategories.map((category) => (
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

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((product, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.bestseller && (
                        <Badge className="absolute top-3 left-3 bg-red-500 text-white">Bestseller</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                          <span>{product.rating}</span>
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded flex items-center"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Beli Sekarang
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jasa">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {currentCategories.map((category) => (
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

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((service, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {service.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{service.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded flex items-center"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Rating & Reviews */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
                            <span>{service.rating}</span>
                            <span>({service.reviews} ulasan)</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>

                        {/* Action Button */}
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Konsultasi Sekarang
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada item yang ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Butuh Solusi Custom?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kalau produk dan jasa yang ada belum sesuai kebutuhan spesifik kamu, konsultasi langsung dengan tim kami
            untuk solusi yang tepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
            <Link href="/sapatools">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Zap className="mr-2 h-5 w-5" />
                Coba Tools Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
