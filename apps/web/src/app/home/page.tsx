import React from "react";
import HomeCarousel from "@/components/home/home-carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Products Carousel */}
      <HomeCarousel />

      {/* Placeholder for other sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-500">
          <p>Các section khác sẽ được thêm vào đây:</p>
          <ul className="mt-4 space-y-2">
            <li>• Sản phẩm mới nhất</li>
            <li>• Sản phẩm bán chạy nhất</li>
            <li>• Sản phẩm có ý tưởng thú vị</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
