"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "NEW",
    "ÁO THUN",
    "STICKER",
    "LY, CỐC",
    "ỐP LƯNG",
    "MÓC KHÓA",
  ];

  // Tạm thời mock thông tin người dùng; có thể thay bằng data thật từ auth
  const user = {
    fullName: "Nguyễn Văn A",
    avatarUrl: "",
  };

  // Tạm thời mock trạng thái đăng nhập; có thể thay bằng data thật từ auth
  const isLoggedIn = false;

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-hidden transition-all duration-300 ${
        isScrolled
          ? "h-[120px] md:h-[100px] lg:h-[180px] shadow-lg backdrop-blur-md bg-opacity-95"
          : "h-[220px] md:h-[151px] lg:h-[302px]"
      }`}
      style={{
        backgroundImage: "url('/banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: isScrolled
          ? "rgba(255, 232, 197, 0.95)"
          : "transparent",
      }}
    >
      <div
        className={`relative h-full w-full transition-all duration-300 ${
          isScrolled ? "md:scale-75 lg:scale-85" : "md:scale-50 lg:scale-100"
        } origin-top`}
      >
        {/* Logo lớn trên banner (trái) */}
        <Link
          href="/"
          aria-label="Về trang chủ"
          className="absolute top-6 md:top-10 left-4 md:left-16 z-10 transition-all duration-300"
        >
          <Image
            src="/logo_memew.svg"
            alt="MEMEW logo"
            width={256}
            height={128}
            className={`select-none transition-all duration-300 ${
              isScrolled ? "w-32 md:w-40 h-auto" : "w-40 md:w-56 h-auto"
            }`}
            draggable={false}
            priority
          />
        </Link>

        {/* Topbar rộng rãi: Search + actions */}
        <div
          className={`absolute transition-all duration-300 ${
            isScrolled ? "top-2 md:top-3" : "top-4 md:top-6"
          } inset-x-0 z-10`}
        >
          <div className="mx-auto max-w-none px-4 md:px-6">
            <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
              {/* Ô tìm kiếm lớn */}
              <div className="relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-[500px] max-w-[80vw]">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70 size-5 md:size-6" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="h-12 md:h-14 w-full rounded-full border-white/20 bg-white/15 pl-12 md:pl-12 text-white placeholder:text-white/70 backdrop-blur-md focus-visible:ring-white/40"
                />
              </div>

              {/* Avatar quick-access chỉ hiện trên mobile */}
              <Link
                href={isLoggedIn ? "/account" : "/login"}
                aria-label="Tài khoản"
                className="md:hidden flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 backdrop-blur-md size-10"
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src={user.avatarUrl} alt={user.fullName} />
                  <AvatarFallback className="bg-white/20 text-white text-xs">
                    NV
                  </AvatarFallback>
                </Avatar>
              </Link>

              {/* Actions: Hiển thị theo trạng thái đăng nhập */}
              {isLoggedIn ? (
                <>
                  {/* Yêu thích */}
                  <Button
                    asChild
                    variant="secondary"
                    className="hidden md:flex h-12 md:h-14 rounded-full bg-white/15 text-white hover:bg-white/25 backdrop-blur-md px-4 md:px-5 text-sm md:text-sm"
                  >
                    <Link
                      href="/wishlist"
                      aria-label="Danh sách yêu thích"
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <Heart className="size-5 md:size-7" />
                      <span className="hidden md:inline text-base">
                        Yêu thích
                      </span>
                    </Link>
                  </Button>

                  {/* Giỏ hàng */}
                  <Button
                    asChild
                    variant="secondary"
                    className="hidden md:flex h-12 md:h-14 rounded-full bg-white/15 text-white hover:bg-white/25 backdrop-blur-md px-4 md:px-5 text-sm md:text-sm"
                  >
                    <Link
                      href="/cart"
                      aria-label="Giỏ hàng của bạn"
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <ShoppingCart className="size-5 md:size-7" />
                      <span className="hidden md:inline text-base">
                        Giỏ hàng của bạn
                      </span>
                    </Link>
                  </Button>

                  {/* Profile */}
                  <Link
                    href="/account"
                    aria-label="Trang cá nhân"
                    className="hidden md:flex items-center gap-3 md:gap-3 rounded-full bg-white/15 px-4 md:px-6 py-2 text-white backdrop-blur-md hover:bg-white/25 min-w-[220px] md:min-w-[260px]"
                  >
                    <Avatar className="h-9 w-9 md:h-10 md:w-10">
                      <AvatarImage src={user.avatarUrl} alt={user.fullName} />
                      <AvatarFallback className="bg-white/20 text-white text-base">
                        NV
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block">
                      <p className="text-base font-semibold leading-none">
                        {user.fullName}
                      </p>
                      <p className="text-sm text-white/80 leading-none">
                        Tài khoản
                      </p>
                    </div>
                    <User className="ml-1 hidden md:block size-5 text-white/80" />
                  </Link>
                </>
              ) : (
                <>
                  {/* Đăng ký */}
                  <Button
                    asChild
                    variant="default"
                    className="hidden md:flex h-12 md:h-14 rounded-full bg-[#763737] text-white hover:bg-[#AB3B3B] shadow-lg hover:shadow-xl transition-all duration-200 px-5 md:px-6 font-semibold text-sm md:text-sm"
                  >
                    <Link
                      href="/register"
                      aria-label="Đăng ký tài khoản"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm md:text-base font-semibold">
                        Đăng ký
                      </span>
                    </Link>
                  </Button>

                  {/* Đăng nhập */}
                  <Button
                    asChild
                    variant="outline"
                    className="hidden md:flex h-12 md:h-14 rounded-full bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-white hover:border-white backdrop-blur-md px-5 md:px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm md:text-sm"
                  >
                    <Link
                      href="/login"
                      aria-label="Đăng nhập"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm md:text-base font-semibold">
                        Đăng nhập
                      </span>
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Navigation sản phẩm: Link + button, đồng nhất màu sắc theo theme */}
        <section
          className={`absolute inset-x-0 transition-all duration-300 ${
            isScrolled ? "bottom-1 md:bottom-2" : "bottom-3 md:bottom-6"
          } z-20`}
        >
          <section className="w-full px-4 md:px-10">
            <div
              className={`flex items-center md:justify-center gap-3 md:gap-6 lg:gap-8 md:pl-[260px] lg:pl-[350px] overflow-x-auto no-scrollbar [-ms-overflow-style:'none'] [scrollbar-width:'none'] transition-all duration-300 ${
                isScrolled
                  ? "md:pl-[200px] lg:pl-[280px]"
                  : "md:pl-[260px] lg:pl-[350px]"
              }`}
            >
              {categories.map((label, idx) => (
                <Button
                  asChild
                  key={label}
                  className="shrink-0 rounded-full px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-xl font-semibold shadow-md bg-[#763737] text-white hover:bg-[#AB3B3B] hover:cursor-pointer"
                >
                  <Link href={idx === 0 ? "/new" : `/category/${idx}`}>
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        </section>
      </div>
    </header>
  );
}
