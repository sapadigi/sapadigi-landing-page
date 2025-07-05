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
    icon: "BookOpen",
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
    icon: "TrendingUp",
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
    icon: "Globe",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // In production, verify JWT token here
    const tool = demoTools.find((t) => t.id === params.id)

    if (!tool) {
      return NextResponse.json({ error: "Tool not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      tool,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tool" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // In production, verify JWT token here
    const updateData = await request.json()

    // In production, update in database
    const updatedTool = {
      id: params.id,
      ...updateData,
    }

    return NextResponse.json({
      success: true,
      tool: updatedTool,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update tool" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // In production, verify JWT token here
    // In production, delete from database

    return NextResponse.json({
      success: true,
      message: "Tool deleted successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete tool" }, { status: 500 })
  }
}
