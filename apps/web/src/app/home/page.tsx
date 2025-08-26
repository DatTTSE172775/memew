import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Chào mừng đến với MEMEW
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Khám phá bộ sưu tập sản phẩm độc đáo của chúng tôi
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Áo thun</h3>
          <p className="text-gray-600">
            Những chiếc áo thun với thiết kế độc đáo
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Sticker</h3>
          <p className="text-gray-600">Bộ sưu tập sticker đa dạng</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Ly, cốc</h3>
          <p className="text-gray-600">Ly cốc với thiết kế đẹp mắt</p>
        </div>
      </div>
    </div>
  );
}
