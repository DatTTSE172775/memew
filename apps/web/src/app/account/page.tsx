import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, ShoppingBag, Heart, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  // Mock user data - replace with real data from auth context
  const user = {
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    avatarUrl: "",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tài khoản của tôi</h1>
          <p className="text-gray-600 mt-2">Quản lý thông tin cá nhân và đơn hàng</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatarUrl} alt={user.fullName} />
                    <AvatarFallback className="bg-[#763737] text-white text-xl">
                      NV
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{user.fullName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Link
                    href="/account"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-[#763737] text-white"
                  >
                    <User className="h-5 w-5" />
                    <span>Thông tin cá nhân</span>
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Đơn hàng</span>
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Yêu thích</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Cài đặt</span>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Đăng xuất
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
                <CardDescription>
                  Cập nhật thông tin cá nhân của bạn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Họ
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        defaultValue="Nguyễn"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Tên
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        defaultValue="Văn A"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={user.email}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Số điện thoại
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      defaultValue={user.phone}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Địa chỉ
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Nhập địa chỉ của bạn"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">Hủy</Button>
                    <Button className="bg-[#763737] hover:bg-[#AB3B3B]">
                      Lưu thay đổi
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
