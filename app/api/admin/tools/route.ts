import { type NextRequest, NextResponse } from "next/server"

// Demo data - in production, this would come from a database
const demoTools = [
  {
    id: "1",
    name: "Template Konten Media Sosial",
    description: "Koleksi template Instagram, Facebook, dan TikTok siap pakai untuk berbagai niche",
    category: "Content",
    downloads: "2.5K",
    rating: 4.8,
    difficulty: "Pemula",
    features: ["50+ Template", "Format PSD & Canva", "Panduan Lengkap"],
  },
  {
    id: "2",
    name: "Desain Promo UMKM",
    description: "Template desain promosi khusus untuk usaha kecil menengah dengan berbagai tema",
    category: "Design",
    downloads: "1.8K",
    rating: 4.9,
    difficulty: "Pemula",
    features: ["30+ Desain", "Mudah Edit", "Print Ready"],
  },
  {
    id: "3",
    name: "Landing Page Builder",
    description: "Tool drag & drop untuk membuat halaman website tanpa coding",
    category: "Website",
    downloads: "3.2K",
    rating: 4.7,
    difficulty: "Menengah",
    features: ["Drag & Drop", "Responsive", "SEO Friendly"],
  },
]

export async function GET(request: NextRequest) {
  try {
    // In production, verify JWT token here
    return NextResponse.json({
      success: true,
      tools: demoTools,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tools" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // In production, verify JWT token here
    const toolData = await request.json()

    // In production, save to database
    const newTool = {
      id: Date.now().toString(),
      ...toolData,
    }

    return NextResponse.json({
      success: true,
      tool: newTool,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create tool" }, { status: 500 })
  }
}
