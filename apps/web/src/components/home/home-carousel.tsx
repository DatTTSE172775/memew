"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselProduct } from "@/types/product.types";

interface HomeCarouselProps {
  products: CarouselProduct[];
}

export default function HomeCarousel({ products }: HomeCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  // Autoplay plugin với delay 5000ms
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Nếu không có products, không render gì
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-0">
              <div className="relative group overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="w-full h-96 md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Lớp mờ bên dưới hiển thị tên và mô tả */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 text-white">
                  <h3 className="font-semibold text-xl md:text-2xl mb-3 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-base md:text-lg text-gray-200 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
