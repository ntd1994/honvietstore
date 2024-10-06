// NavbarClient.tsx
'use client'; // Đánh dấu là Client Component

import { useEffect, useState } from "react";
import { listRegions } from "@lib/data"; // Thư viện dữ liệu
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import Image from "next/image";
import userImage from "../../../public/static/images/user.png";
import { Region } from "@medusajs/medusa";

export default function NavbarClient() {
  const [regions, setRegions] = useState<Region[]>([]); // Khởi tạo state cho regions
  const [isSticky, setIsSticky] = useState(false); // Khởi tạo state cho sticky

  // Lấy dữ liệu regions từ server
  // Sử dụng useEffect để fetch data khi component được mount
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const fetchedRegions = await listRegions();

        // Kiểm tra nếu fetchedRegions không phải là null
        if (fetchedRegions) {
          setRegions(fetchedRegions);
        } else {
          setRegions([]); // Nếu là null, đặt thành mảng rỗng
        }
      } catch (error) {
        console.error("Error fetching regions:", error);
        setRegions([]); // Nếu có lỗi, đặt thành mảng rỗng
      }
    };

    fetchRegions();
  }, []); // Chạy một lần khi component được mount

  // Hàm xử lý scroll để kiểm tra xem navbar có nên sticky hay không
  const handleScroll = () => {
    if (window.scrollY >= 32) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Thêm sự kiện scroll khi component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp sự kiện khi component unmount
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}> {/* Thêm class sticky khi cần */}
      <header className="relative h-16 mx-auto duration-200 border-ui-border-base">
        <nav className="bg-white sticky top-0 w-full z-50 grid grid-cols-12 gap-0 content-container txt-xsmall-plus text-ui-fg-subtle h-full text-small-regular rounded-full shadow-2xl transition-shadow duration-300">
          {/* Nội dung navbar */}
          <div className="col-span-12 md:col-start-1 md:col-end-12 flex items-center justify-between h-full text-small-regular">
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  Honvietstore
                </span>
              </div>
              {/* Hiển thị các region đã lấy được */}
              {regions.map(region => (
                <LocalizedClientLink key={region.id} href={`/regions/${region.id}`}>
                  {region.name}
                </LocalizedClientLink>
              ))}
            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-x-6 h-full flex-shrink-0">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/account">
                  <Image src={userImage} height={18} width={18} alt="account-icon" />
                </LocalizedClientLink>
              </div>
              <CartButton />
              <div className="flex items-center gap-x-6 h-full flex-1 justify-end">
                <div id="google_translate_element"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

/* styles/nav.modules.css */
// .navbar {
//     transition: background-color 0.3s;
//   }
  
//   .navbar.sticky {
//     position: sticky;
//     top: 0;
//     background-color: white; /* Hoặc màu bạn muốn */
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Thêm bóng cho navbar */
//     z-index: 1000; /* Đảm bảo navbar luôn nằm trên cùng */
//   }