"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Tabs, { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LogOut, Plus, Edit, Trash2, Users, Download, ShoppingBag, BarChart3, Settings, Eye, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface User {
  email: string
  name: string
  role: string
}

interface Tool {
  id: string
  name: string
  description: string
  category: string
  downloads: string
  rating: number
  difficulty: string
  features: string[]
}

interface Product {
  id: string
  name: string
  description: string
  price: string
  category: string
  rating: number
  reviews: number
  bestseller: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [tools, setTools] = useState<Tool[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/login")
      return
    }

    // Decode token to get user info (in production, verify with server)
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      setUser(payload)
      loadData()
    } catch (error) {
      console.error("Invalid token:", error)
      localStorage.removeItem("adminToken")
      router.push("/login")
    }
  }, [router])

  const loadData = async () => {
    try {
      // Load tools and products data
      const [toolsRes, productsRes] = await Promise.all([fetch("/api/admin/tools"), fetch("/api/admin/products")])

      if (toolsRes.ok) {
        const toolsData = await toolsRes.json()
        setTools(toolsData.tools || [])
      }

      if (productsRes.ok) {
        const productsData = await productsRes.json()
        setProducts(productsData.products || [])
      }
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/login")
  }

  const handleDeleteTool = async (toolId: string) => {
    if (!confirm("Yakin ingin menghapus tool ini?")) return

    try {
      const response = await fetch(`/api/admin/tools/${toolId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })

      if (response.ok) {
        setTools(tools.filter((tool) => tool.id !== toolId))
      }
    } catch (error) {
      console.error("Error deleting tool:", error)
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return

    try {
      const response = await fetch(`/api/admin/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })

      if (response.ok) {
        setProducts(products.filter((product) => product.id !== productId))
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Lihat Website
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="tools">
              <Settings className="mr-2 h-4 w-4" />
              SapaTools
            </TabsTrigger>
            <TabsTrigger value="products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              SapaMarket
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="mr-2 h-4 w-4" />
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Tools</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{tools.length}</div>
                  <p className="text-xs text-muted-foreground">Tools tersedia</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Produk</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{products.length}</div>
                  <p className="text-xs text-muted-foreground">Produk & jasa</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15.2K</div>
                  <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating Rata-rata</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">Dari semua produk</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tools Populer</CardTitle>
                  <CardDescription>Tools dengan download terbanyak</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tools.slice(0, 5).map((tool) => (
                      <div key={tool.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{tool.name}</p>
                          <p className="text-sm text-gray-500">{tool.category}</p>
                        </div>
                        <Badge variant="secondary">{tool.downloads}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Produk Terlaris</CardTitle>
                  <CardDescription>Produk dengan penjualan terbaik</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products
                      .filter((p) => p.bestseller)
                      .slice(0, 5)
                      .map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.price}</p>
                          </div>
                          <Badge className="bg-red-100 text-red-700">Bestseller</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Kelola SapaTools</h2>
              <Link href="/admin/tools/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Tool Baru
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {tools.map((tool) => (
                <Card key={tool.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription className="mt-2">{tool.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={`/admin/tools/${tool.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteTool(tool.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="secondary">{tool.category}</Badge>
                      <span>{tool.downloads} downloads</span>
                      <span>Rating: {tool.rating}</span>
                      <Badge
                        className={
                          tool.difficulty === "Pemula"
                            ? "bg-green-100 text-green-700"
                            : tool.difficulty === "Menengah"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }
                      >
                        {tool.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Kelola SapaMarket</h2>
              <Link href="/admin/products/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Produk Baru
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription className="mt-2">{product.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={`/admin/products/${product.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="secondary">{product.category}</Badge>
                      <span className="font-medium text-gray-900">{product.price}</span>
                      <span>
                        Rating: {product.rating} ({product.reviews} ulasan)
                      </span>
                      {product.bestseller && <Badge className="bg-red-100 text-red-700">Bestseller</Badge>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Kelola Users</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Admin Baru
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Daftar Admin</CardTitle>
                <CardDescription>Kelola akses admin dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Badge>{user.role}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
