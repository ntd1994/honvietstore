"use client";

import React, { useState } from 'react';
import { FaBars, FaHome, FaSignInAlt, FaListUl, FaPhone, FaInfoCircle, FaQuestionCircle, FaLeaf, FaCoffee, FaCookieBite, FaAppleAlt, FaPepperHot, FaWineBottle, FaFeather, FaHeartbeat, FaHome as FaHouse, FaPaintBrush, FaMale, FaFemale } from 'react-icons/fa';

const categories = [
  { name: "Trà", icon: <FaLeaf />, url: "/collections/tra" },
  { name: "Cà Phê", icon: <FaCoffee />, url: "/collections/ca-phe" },
  { name: "Cacao - Socola", icon: <FaCookieBite />, url: "/collections/cacao-socola" },
  { name: "Trái cây sấy khô", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-kho" },
  { name: "Trái cây sấy dẻo", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-deo" },
  { name: "Trái cây sấy thăng hoa", icon: <FaAppleAlt />, url: "/collections/trai-cay-say-thang-hoa" },
  { name: "Gia Vị", icon: <FaPepperHot />, url: "/collections/gia-vi" },
  { name: "Thực phẩm", icon: <FaHouse />, url: "/categorcollectionsies/thuc-pham" },
  { name: "Rượu", icon: <FaWineBottle />, url: "/collections/ruou" },
  { name: "Yến", icon: <FaFeather />, url: "/collections/yen" },
  { name: "Sức khỏe", icon: <FaHeartbeat />, url: "/collections/suc-khoe" },
  { name: "Đồ gia dụng", icon: <FaHouse />, url: "/collections/do-gia-dung" },
  { name: "Đồ thủ công mỹ nghệ", icon: <FaPaintBrush />, url: "/collections/do-thu-cong-my-nghe" },
  { name: "Thời trang nam", icon: <FaMale />, url: "/collections/thoi-trang-nam" },
  { name: "Thời trang nữ", icon: <FaFemale />, url: "/collections/thoi-trang-nu" },
];

const menuItems = [
  { name: "Đăng nhập/Đăng ký", icon: <FaSignInAlt />, url: "/account" },
  { name: "Home", icon: <FaHome />, url: "/" },
  { name: "Danh mục sản phẩm", icon: <FaListUl />, subItems: categories, url: "#" }, // Tạm thời để URL là "#"
  { name: "Hỗ trợ", icon: <FaQuestionCircle />, url: "#" }, // Tạm thời để URL là "#"
  { name: "Về chúng tôi", icon: <FaInfoCircle />, url: "/about" },
  { name: "Liên hệ", icon: <FaPhone />, url: "/contact" },
];

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="block md:hidden relative z-10">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200"
        aria-label="Menu"
      >
        <FaBars size={24} />
      </button>

      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      <div className={`fixed top-18 right-0 bg-white shadow-lg rounded-lg w-60 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.url}
                onClick={item.subItems ? toggleSubMenu : toggleMenu}
                className="flex items-center py-3 px-4 w-full text-left text-sm font-medium text-gray-700 hover:bg-green-100 transition-colors duration-200"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
              {/* Submenu cho Danh mục sản phẩm */}
              {item.subItems && isSubMenuOpen && (
                <ul className="pl-4 max-h-72 overflow-y-auto border-t border-gray-300 mt-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative flex items-center">
                      <span className="mr-2">{subItem.icon}</span>
                      <a
                        href={subItem.url}
                        className="block py-2 text-sm text-gray-600 hover:bg-green-100 transition-colors duration-200 flex-grow"
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {/* Divider */}
              {index < menuItems.length - 1 && (
                <div className="border-b border-gray-300"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}