"use client"; // Thêm dòng này ở đầu file

import React, { useState } from 'react';
import { FaBars, FaHome, FaSignInAlt, FaListUl, FaPhone, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa'; // Thêm icon mới

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

const menuItems = [
  { name: "Đăng nhập/Đăng ký", icon: <FaSignInAlt /> },
  { name: "Home", icon: <FaHome /> },
  { name: "Danh mục sản phẩm", icon: <FaListUl />, subItems: categories }, // Danh mục sản phẩm
  { name: "Hỗ trợ", icon: <FaQuestionCircle /> },
  { name: "Về chúng tôi", icon: <FaInfoCircle /> },
  { name: "Liên hệ", icon: <FaPhone /> },
];

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Trạng thái cho submenu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="block md:hidden relative"> {/* Chỉ hiển thị trên smartphone và tablet */}
      {/* Icon Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200"
        aria-label="Menu"
      >
        <FaBars size={24} /> {/* Sử dụng biểu tượng Hamburger */}
      </button>

      {/* Drawer Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      <div className={`fixed top-0 right-0 bg-white shadow-lg rounded-lg w-60 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={item.subItems ? toggleSubMenu : toggleMenu} // Nếu có subItems thì mở submenu
                className="flex items-center py-3 px-4 w-full text-left text-sm font-medium text-gray-700 hover:bg-green-100 transition-colors duration-200"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </button>
              {/* Submenu cho Danh mục sản phẩm */}
              {item.subItems && isSubMenuOpen && (
                <ul className="pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative">
                      <a
                        href="#"
                        className="block py-2 text-sm text-gray-600 hover:bg-green-100 transition-colors duration-200"
                        onClick={toggleMenu} // Đóng menu khi click vào danh mục
                      >
                        {subItem}
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