import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

// Demo admin credentials (in production, use proper database and hashing)
const ADMIN_CREDENTIALS = {
  email: "admin@sapadigi.id",
  password: "admin123", // In production, this should be hashed
  name: "Admin Sapadigi",
  role: "admin",
}

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password harus diisi" }, { status: 400 })
    }

    // Check credentials
    if (email !== ADMIN_CREDENTIALS.email || password !== ADMIN_CREDENTIALS.password) {
      return NextResponse.json({ error: "Email atau password salah" }, { status: 401 })
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        email: ADMIN_CREDENTIALS.email,
        name: ADMIN_CREDENTIALS.name,
        role: ADMIN_CREDENTIALS.role,
      },
      JWT_SECRET,
      { expiresIn: "24h" },
    )

    return NextResponse.json({
      success: true,
      token,
      user: {
        email: ADMIN_CREDENTIALS.email,
        name: ADMIN_CREDENTIALS.name,
        role: ADMIN_CREDENTIALS.role,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
