import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Về chúng tôi</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          MEMEW là thương hiệu chuyên về các sản phẩm thời trang và phụ kiện độc
          đáo, mang đến những thiết kế sáng tạo và chất lượng cao cho khách
          hàng.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-[#763737]">
              Sứ mệnh
            </h3>
            <p className="text-gray-600">
              Mang đến những sản phẩm chất lượng với thiết kế độc đáo, giúp
              khách hàng thể hiện cá tính riêng của mình.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-[#763737]">
              Tầm nhìn
            </h3>
            <p className="text-gray-600">
              Trở thành thương hiệu hàng đầu trong lĩnh vực thời trang, được yêu
              thích bởi giới trẻ Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
