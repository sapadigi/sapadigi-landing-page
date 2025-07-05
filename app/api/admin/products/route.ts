import { type NextRequest, NextResponse } from "next/server"

// Demo data - in production, this would come from a database
const demoProducts = [
  {
    id: "1",
    name: "Panduan Lengkap Digital Marketing untuk UMKM",
    description: "E-book komprehensif dengan strategi digital marketing yang terbukti efektif untuk usaha kecil",
    price: "Rp 49.000",
    category: "Education",
    rating: 4.9,
    reviews: 127,
    bestseller: true,
  },
  {
    id: "2",
    name: "Template Presentasi Bisnis Premium",
    description: "Koleksi 50+ slide template untuk presentasi bisnis yang profesional dan menarik",
    price: "Rp 35.000",
    category: "Design",
    rating: 4.8,
    reviews: 89,
    bestseller: false,
  },
  {
    id: "3",
    name: "Sistem Inventory Sederhana (Excel)",
    description: "Template Excel untuk mengelola stok barang dengan fitur otomatis dan laporan lengkap",
    price: "Rp 25.000",
    category: "Business",
    rating: 4.7,
    reviews: 156,
    bestseller: true,
  },
]

export async function GET(request: NextRequest) {
  try {
    // In production, verify JWT token here
    return NextResponse.json({
      success: true,
      products: demoProducts,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // In production, verify JWT token here
    const productData = await request.json()

    // In production, save to database
    const newProduct = {
      id: Date.now().toString(),
      ...productData,
    }

    return NextResponse.json({
      success: true,
      product: newProduct,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
