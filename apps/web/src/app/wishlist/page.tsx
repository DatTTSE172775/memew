import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  // Mock wishlist data - replace with real data from user context
  const wishlistItems = [
    {
      id: 1,
      name: "Áo thun MEMEW Cat",
      price: 299000,
      image: "/placeholder-product.jpg",
      size: "L",
      inStock: true,
    },
    {
      id: 2,
      name: "Sticker Mèo Dễ Thương",
      price: 25000,
      image: "/placeholder-product.jpg",
      inStock: true,
    },
    {
      id: 3,
      name: "Ly sứ MEMEW",
      price: 150000,
      image: "/placeholder-product.jpg",
      inStock: false,
    },
    {
      id: 4,
      name: "Ốp lưng điện thoại MEMEW",
      price: 89000,
      image: "/placeholder-product.jpg",
      inStock: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          <Heart className="mx-auto h-24 w-24 text-gray-400 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Danh sách yêu thích trống</h2>
          <p className="text-gray-600 mb-8">
            Bạn chưa có sản phẩm nào trong danh sách yêu thích. Hãy khám phá và thêm sản phẩm yêu thích!
          </p>
          <Link href="/">
            <Button className="bg-[#763737] hover:bg-[#AB3B3B]">
              Khám phá sản phẩm
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Danh sách yêu thích</h1>
          <p className="text-gray-600 mt-2">
            Bạn có {wishlistItems.length} sản phẩm trong danh sách yêu thích
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
                
                {!item.inStock && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Hết hàng
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>
                
                {item.size && (
                  <p className="text-sm text-gray-600 mb-2">Kích thước: {item.size}</p>
                )}
                
                <p className="text-lg font-semibold text-[#763737] mb-4">
                  {formatPrice(item.price)}
                </p>
                
                <div className="space-y-2">
                  {item.inStock ? (
                    <Button className="w-full bg-[#763737] hover:bg-[#AB3B3B]">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Thêm vào giỏ hàng
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      Hết hàng
                    </Button>
                  )}
                  
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Xem chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Tiếp tục mua sắm
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
