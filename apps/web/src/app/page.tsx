export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Chào mừng đến với <span className="text-pink-600">MEMEW</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Nơi chia sẻ những khoảnh khắc đáng yêu, hài hước và ấm áp trong cuộc
          sống. Hãy cùng nhau tạo nên những kỷ niệm đáng nhớ!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Khám phá ngay
          </button>
          <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Tìm hiểu thêm
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Tại sao chọn MEMEW?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Thiết kế đẹp mắt</h3>
            <p className="text-gray-600">
              Giao diện hiện đại, thân thiện với người dùng và dễ sử dụng
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Hiệu suất cao</h3>
            <p className="text-gray-600">
              Tốc độ tải trang nhanh, trải nghiệm mượt mà trên mọi thiết bị
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Bảo mật tuyệt đối</h3>
            <p className="text-gray-600">
              Thông tin cá nhân được bảo vệ an toàn với công nghệ mã hóa tiên
              tiến
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nội dung chính
          </h2>
          <p className="text-gray-600 mb-6">
            Đây là khu vực nội dung chính của trang web. Bạn có thể thêm bất kỳ
            nội dung nào vào đây như:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Danh sách sản phẩm hoặc dịch vụ</li>
            <li>Blog posts hoặc bài viết</li>
            <li>Form liên hệ hoặc đăng ký</li>
            <li>Bảng giá hoặc thông tin chi tiết</li>
            <li>Và nhiều nội dung khác...</li>
          </ul>
          <p className="text-gray-600">
            Layout này đã được thiết kế để có header cố định với chiều cao 422px
            (như banner.svg) và footer với chiều cao 318px. Nội dung ở giữa sẽ
            tự động mở rộng để lấp đầy không gian còn lại.
          </p>
        </div>
      </section>
    </div>
  );
}
