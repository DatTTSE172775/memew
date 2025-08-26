import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewProductsPage() {
  // Mock new products data - replace with real data from API
  const newProducts = [
    {
      id: 1,
      name: "Áo thun MEMEW Cat 2024",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.8,
      reviewCount: 127,
      isNew: true,
      discount: 25,
    },
    {
      id: 2,
      name: "Sticker Mèo Dễ Thương Limited",
      price: 25000,
      originalPrice: 30000,
      image: "/placeholder-product.jpg",
      rating: 4.9,
      reviewCount: 89,
      isNew: true,
      discount: 17,
    },
    {
      id: 3,
      name: "Ly sứ MEMEW Premium",
      price: 180000,
      originalPrice: 200000,
      image: "/placeholder-product.jpg",
      rating: 4.7,
      reviewCount: 56,
      isNew: true,
      discount: 10,
    },
    {
      id: 4,
      name: "Ốp lưng điện thoại MEMEW",
      price: 89000,
      originalPrice: 120000,
      image: "/placeholder-product.jpg",
      rating: 4.6,
      reviewCount: 203,
      isNew: true,
      discount: 26,
    },
    {
      id: 5,
      name: "Móc khóa Mèo MEMEW",
      price: 45000,
      originalPrice: 50000,
      image: "/placeholder-product.jpg",
      rating: 4.5,
      reviewCount: 78,
      isNew: true,
      discount: 10,
    },
    {
      id: 6,
      name: "Túi vải MEMEW Cat",
      price: 120000,
      originalPrice: 150000,
      image: "/placeholder-product.jpg",
      rating: 4.8,
      reviewCount: 45,
      isNew: true,
      discount: 20,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sản phẩm mới nhất 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những sản phẩm mới nhất từ MEMEW với thiết kế độc đáo và chất lượng cao
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button variant="outline" className="rounded-full">
            Tất cả
          </Button>
          <Button variant="outline" className="rounded-full">
            Áo thun
          </Button>
          <Button variant="outline" className="rounded-full">
            Phụ kiện
          </Button>
          <Button variant="outline" className="rounded-full">
            Đồ dùng
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {product.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        MỚI
                      </span>
                    </div>
                  )}
                  
                  {product.discount > 0 && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviewCount})</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#763737] transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-[#763737]">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full bg-[#763737] hover:bg-[#AB3B3B]">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Thêm vào giỏ hàng
                  </Button>
                  
                  <Link href={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full">
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem thêm sản phẩm
          </Button>
        </div>
      </div>
    </div>
  );
}
