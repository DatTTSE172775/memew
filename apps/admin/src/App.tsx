import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Admin Dashboard
        </h1>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Click vào nút để kiểm tra Tailwind CSS hoạt động:
          </p>

          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Đã click {count} lần
          </button>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-700">
              Nếu bạn thấy styling này đẹp, Tailwind CSS đã hoạt động! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
