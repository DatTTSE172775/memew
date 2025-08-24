export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Tailwind CSS v4 Test
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Đây là một ví dụ đơn giản để kiểm tra Tailwind CSS v4 hoạt động với
          Next.js
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-white font-semibold mb-2">Responsive Design</h3>
            <p className="text-white/80 text-sm">
              Grid và flexbox hoạt động tốt
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-white font-semibold mb-2">Colors & Effects</h3>
            <p className="text-white/80 text-sm">Gradient và backdrop-blur</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-pink-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-white font-semibold mb-2">Typography</h3>
            <p className="text-white/80 text-sm">Font weights và sizing</p>
          </div>
        </div>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Test Button
        </button>
      </div>
    </div>
  );
}
