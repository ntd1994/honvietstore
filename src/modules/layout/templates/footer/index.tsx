import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import Image from "next/image";
import HonVietLogo from "../../../../../public/static/images/honvietstore_logo.jpg"

export default function Footer() {
  const categories = [
    { id: 2, title: "Trà", handle: "tra" },
    { id: 3, title: "Cà Phê", handle: "ca-phe" },
    { id: 4, title: "Cacao - Socola", handle: "cacao-socola" },
    { id: 5, title: "Trái cây sấy khô", handle: "trai-cay-say-kho" },
    { id: 6, title: "Trái cây sấy dẻo", handle: "trai-cay-say-deo" },
    { id: 7, title: "Trái cây sấy thăng hoa", handle: "trai-cay-say-thang-hoa" },
    { id: 8, title: "Gia Vị", handle: "gia-vi" },
    { id: 9, title: "Thực phẩm", handle: "thuc-pham" },
    { id: 10, title: "Rượu", handle: "ruou" },
    { id: 11, title: "Yến", handle: "yen" },
    { id: 12, title: "Sức khỏe", handle: "suc-khoe" },
    { id: 13, title: "Đồ gia dụng", handle: "do-gia-dung" },
    { id: 14, title: "Đồ thủ công mỹ nghệ", handle: "do-thu-cong-my-nghe" },
    { id: 15, title: "Thời trang nam", handle: "thoi-trang-nam" },
    { id: 16, title: "Thời trang nữ", handle: "thoi-trang-nu" },
  ]

  return (
    <footer className="bg-gray-800 text-white border-t border-gray-600 w-full">
      <div className="content-container flex flex-col w-full p-4 md:p-10">
        <div className="grid grid-cols-12 gap-y-6 gap-0 md:gap-24">
          <div className="col-span-12 md:col-span-6">
            <Link href="/" passHref className="block mb-6 hover:opacity-80 transition-opacity duration-200">
                <Image
                  src={HonVietLogo}
                  alt="Honvietstore Logo"
                  width={150} // Đặt kích thước phù hợp với footer
                  height={50} // Đặt kích thước phù hợp với footer
                  className="h-auto w-auto"
                />
            </Link>
            <p className="w-full text-gray-300 break-words whitespace-normal mt-2">
              TAP Market không chỉ là nơi mua sắm, mà còn là cầu nối văn hóa, giúp quảng bá các giá trị truyền thống và sản phẩm chất lượng cao của Việt Nam ra thế giới.
            </p>
            <p className="text-gray-300 mt-2">
              Thuộc hệ sinh thái TAP Media Inc
            </p>
            <p className="text-gray-300 mt-2">
              Email: contact@tapmediainc.com
            </p>
            <p className="text-gray-300 mt-2">
              Hotline: +13605050505
            </p>
            <p className="text-gray-300 mt-2">
              Website: <a href="https://tapmediainc.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">https://tapmediainc.com</a>
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6">

            {/* Thẻ con chiếm 6 cột cho danh mục sản phẩm */}
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6">
                <div className="txt-small-plus text-white font-semibold mb-6">
                  Danh mục sản phẩm
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-gray-300 txt-small">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <LocalizedClientLink
                        className="hover:text-white-800"
                        href={`/categories/${category.handle}`}
                      >
                        {category.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thẻ con chiếm 3 cột cho Hỗ Trợ */}
              <div className="col-span-12 sm:col-span-3">
              <div className="txt-small-plus text-white font-semibold mb-6">
                  Hỗ trợ
                </div>
                <ul className="grid grid-cols-1 gap-y-2 text-gray-300 txt-small">
                  <li>
                    <a
                      href="/shopping-guide"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Cách mua hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/feedback"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Phản hồi và biên nhận
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Thẻ con chiếm 3 cột cho Tài Khoản */}
              <div className="col-span-12 sm:col-span-3">
                <div className="txt-small-plus text-white font-semibold mb-6">
                    Tài khoản
                </div>
                <ul className="grid grid-cols-1 gap-y-2 text-gray-300 txt-small">
                  <li>
                    <a
                      href="/account"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white-300"
                    >
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-10 justify-between text-white-500">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} HONVIETSTORE. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}