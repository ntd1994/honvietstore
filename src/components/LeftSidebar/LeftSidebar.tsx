"use client";
// src/components/LeftSidebar/LeftSidebar.tsx
import React from "react";
import { FaLeaf, FaCoffee, FaCookieBite, FaAppleAlt, FaHotdog, FaPepperHot, FaWineBottle, FaFeather, FaHeartbeat, FaHome, FaPaintBrush, FaMale, FaFemale } from "react-icons/fa";

export default function LeftSidebar() {
  // Danh sách danh mục với các icon và URL tương ứng
  const categories = [
    { name: "Trà", icon: <FaLeaf />, url: "/collections/tra" },
    { name: "Cà Phê", icon: <FaCoffee />, url: "/collections/ca-phe" },
    { name: "Cacao - Socola", icon: <FaCookieBite />, url: "/collections/cacao-socola" },
    { name: "Trái cây sấy khô", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-kho" },
    { name: "Trái cây sấy dẻo", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-deo" },
    { name: "Trái cây sấy thăng hoa", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-thang-hoa" },
    { name: "Gia Vị", icon: <FaPepperHot />, url: "/collections/gia-vi" },
    { name: "Thực phẩm", icon: <FaHotdog />, url: "/collections/thuc-pham" },
    { name: "Rượu", icon: <FaWineBottle />, url: "/collections/ruou" },
    { name: "Yến", icon: <FaFeather />, url: "/collections/yen" },
    { name: "Sức khỏe", icon: <FaHeartbeat />, url: "/collections/suc-khoe" },
    { name: "Đồ gia dụng", icon: <FaHome />, url: "/collections/do-gia-dung" },
    { name: "Đồ thủ công mỹ nghệ", icon: <FaPaintBrush />, url: "/collections/thu-cong-my-nghe" },
    { name: "Thời trang nam", icon: <FaMale />, url: "/collections/thoi-trang-nam" },
    { name: "Thời trang nữ", icon: <FaFemale />, url: "/collections/thoi-trang-nu" },
  ];

  return (
    <div className="content-container py-6 small:py-2">
      <ul className="flex flex-col gap-y-1">
        {categories.map((category, index) => (
          <li key={index} className="relative flex items-center">
            <span className="mr-3">{category.icon}</span>
            <a
              href={category.url} // Sử dụng URL từ danh mục
              className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-green-100 transition-colors duration-200 flex-grow"
            >
              {category.name}
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