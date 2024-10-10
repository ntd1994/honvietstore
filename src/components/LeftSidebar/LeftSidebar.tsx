"use client"
// src/components/LeftSidebar/LeftSidebar.tsx
import React, { useState, useEffect } from "react";
import CategoryPreview from "@modules/categories/components/category-preview";

export default function LeftSidebar() {
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect(()=> {
  //   const updateMedia = () => {
  //     setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
  //   };

  //   window.addEventListener("resize", updateMedia);
  //   updateMedia(); // Initial check

  //   return () => {
  //     window.removeEventListener("resize", updateMedia);
  //   };
  // },[]);
  

  
  // Danh sách danh mục
  const categories = [
    "Bữa em chế",
    "Trà",
    "Cà Phê",
    "Cacao - Socola",
    "Trái cây sấy khô",
    "Trái cây sấy dẻo",
    "Trái cây sấy thăng hoa",
    "Gia Vị",
    "Thực phẩm",
    "Rượu",
    "Yến",
    "Sức khỏe",
    "Đồ gia dụng",
    "Đồ thủ công mỹ nghệ",
    "Thời trang nam",
    "Thời trang nữ",
  ];

  return (
    <div className="content-container py-6 small:py-2">
      <ul className="flex flex-col gap-y-1">
        {categories.map((category, index) => (
          <li key={index} className="relative">
            <a
              href="#"
              className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-green-100 transition-colors duration-200"
            >
              {category}
            </a>
            {/* Divider */}
            {index < categories.length - 1 && (
              <div className="border-b border-gray-300"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}