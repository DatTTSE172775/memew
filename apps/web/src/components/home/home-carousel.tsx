"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Áo thun mèo siêu dễ thương",
    price: 199000,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e5ca93e2?w=400&h=400&fit=crop&crop=center",
    category: "Áo thun",
    isNew: true,
  },
  {
    id: 2,
    name: "Sticker mèo hoạt hình cute",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Sticker",
  },
  {
    id: 3,
    name: "Ly sứ mèo ngủ gật",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1513360371669-4af64e8b0d28?w=400&h=400&fit=crop&crop=center",
    category: "Ly, cốc",
  },
  {
    id: 4,
    name: "Ốp lưng điện thoại mèo",
    price: 129000,
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop&crop=center",
    category: "Ốp lưng",
  },
];

export default function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Sản phẩm nổi bật
          </h2>
          <p className="text-gray-600">
            Khám phá những sản phẩm độc đáo và đáng yêu nhất của chúng tôi
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                        MỚI
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button
                        className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                        title="Thêm vào yêu thích"
                        aria-label="Thêm vào yêu thích"
                      >
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                        title="Thêm vào giỏ hàng"
                        aria-label="Thêm vào giỏ hàng"
                      >
                        <ShoppingCart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-orange-600">
                      {formatPrice(product.price)}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current - 1 ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                title={`Chuyển đến slide ${index + 1}`}
                aria-label={`Chuyển đến slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
