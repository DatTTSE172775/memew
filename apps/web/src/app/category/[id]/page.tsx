import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = params.id;

  // Mock category data - replace with real data from API
  const categoryNames = {
    "1": "ÁO THUN",
    "2": "STICKER",
    "3": "LY, CỐC",
    "4": "ỐP LƯNG",
    "5": "MÓC KHÓA",
  };

  const categoryName =
    categoryNames[categoryId as keyof typeof categoryNames] || "Danh mục";

  // Mock products data - replace with real data from API
  const products = [
    {
      id: 1,
      name: "Áo thun MEMEW Cat",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.8,
      reviewCount: 127,
      discount: 25,
    },
    {
      id: 2,
      name: "Áo thun MEMEW Dog",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.7,
      reviewCount: 89,
      discount: 25,
    },
    {
      id: 3,
      name: "Áo thun MEMEW Bird",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.6,
      reviewCount: 56,
      discount: 25,
    },
    {
      id: 4,
      name: "Áo thun MEMEW Fish",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.5,
      reviewCount: 203,
      discount: 25,
    },
    {
      id: 5,
      name: "Áo thun MEMEW Rabbit",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.4,
      reviewCount: 78,
      discount: 25,
    },
    {
      id: 6,
      name: "Áo thun MEMEW Turtle",
      price: 299000,
      originalPrice: 399000,
      image: "/placeholder-product.jpg",
      rating: 4.3,
      reviewCount: 45,
      discount: 25,
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
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập {categoryName.toLowerCase()} độc đáo từ MEMEW
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Bộ lọc
            </Button>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              aria-label="Sắp xếp sản phẩm"
            >
              <option>Sắp xếp theo</option>
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
              <option>Đánh giá cao nhất</option>
              <option>Mới nhất</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">
            Hiển thị {products.length} sản phẩm
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

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
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount})
                  </span>
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

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <Button variant="outline" size="sm">
            Trước
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button size="sm" className="bg-[#763737] hover:bg-[#AB3B3B]">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Sau
          </Button>
        </div>
      </div>
    </div>
  );
}
