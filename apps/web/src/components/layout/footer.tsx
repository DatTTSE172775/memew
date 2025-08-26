import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFE8C5] text-black">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-3 text-[17px]">
                <li>
                  <Link href="#" className="hover:underline">
                    Vận chuyển & giao hàng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Đổi trả hàng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Đơn hàng của bạn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tài khoản
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Về chúng tôi</h4>
              <ul className="space-y-3 text-[17px]">
                <li>
                  <Link href="/about" className="hover:underline">
                    Giới Thiệu
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Chính Sách</h4>
              <ul className="space-y-3 text-[17px]">
                <li>
                  <Link href="#" className="hover:underline">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Chính sách đổi trả
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-3 text-[17px]">
                <li>0559001543</li>
                <li>Mewmemes1@gmail.com</li>
              </ul>
              <div className="mt-6 flex items-center space-x-4 text-black/80">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:opacity-80"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9V12.06h2.54V9.86c0-2.5 1.5-3.88 3.79-3.88 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.85h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.95 8.44-9.94z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="YouTube"
                  className="hover:opacity-80"
                >
                  <svg
                    width="36"
                    height="26"
                    viewBox="0 0 28 20"
                    fill="currentColor"
                  >
                    <path d="M27.5 3.1a3.5 3.5 0 00-2.47-2.47C22.73 0 14 0 14 0S5.27 0 3 0.63A3.5 3.5 0 00.53 3.1C0 5.37 0 10 0 10s0 4.63.53 6.9a3.5 3.5 0 002.47 2.47C5.27 20 14 20 14 20s8.73 0 11-0.63a3.5 3.5 0 002.47-2.47C28 14.63 28 10 28 10s0-4.63-.5-6.9zM11 14.5V5.5l7.5 4.5L11 14.5z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="TikTok" className="hover:opacity-80">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8.04a6.5 6.5 0 01-2-4.78V3h-3.2v11.1a2.36 2.36 0 11-2-2.32V8.4a5.56 5.56 0 00-4 5.32 5.6 5.6 0 0011.2 0v-5.7a9.3 9.3 0 004 1v-3a6.9 6.9 0 01-4-1z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/logo_footer.svg"
                alt="MEMEW logo"
                width={127 * 3}
                height={132 * 3}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-left">
              Mew tung chiêu, triệu tim yêu! Đăng ký ngay 👇
            </p>
            <div className="w-full max-w-xl flex flex-col items-start gap-3">
              <Input
                type="email"
                placeholder="Enter email address..."
                className="w-full h-14 rounded-full bg-white placeholder-black/50"
              />
              <Button className="h-12 px-6 rounded-full bg-black text-white text-base font-semibold hover:opacity-90">
                Đăng Ký
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
