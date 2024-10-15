"use client"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Suspense } from "react"

const Navbar = () => {
  function toggleDropdown() {
    const dropdownMenu = document.getElementById("mega-menu-dropdown")!
    const isVisible = dropdownMenu.classList.contains("hidden")
    if (isVisible) {
      dropdownMenu.classList.remove("hidden")
    } else {
      dropdownMenu.classList.add("hidden")
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-2 ml-4">
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"></div>
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-sm font-semibold text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Trang Chủ
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                id="mega-menu-dropdown-button"
                data-dropdown-toggle="mega-menu-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 text-sm font-semibold text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hỗ Trợ{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="mega-menu-dropdown"
                className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
              >
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul
                    className="space-y-4"
                    aria-labelledby="mega-menu-dropdown-button"
                  >
                    <li>
                      <a
                        href="/shopping-guide"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Cách Mua Hàng
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feedback"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Phản Hồi Và Trả Hàng
                      </a>
                    </li>
                    <li>
                      <a
                        href="/faq"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Câu Hỏi Thường Gặp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/account"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Đăng Nhập
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/contact"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Liên hệ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Trung Tâm Hỗ Trợ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                      >
                        Điều Khoản
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-sm font-semibold text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Về Chúng Tôi
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-sm font-semibold text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Liên Hệ
              </a>
            </li>     
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar