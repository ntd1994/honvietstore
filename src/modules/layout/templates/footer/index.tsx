import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

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
      <div className="content-container flex flex-col w-full p-10">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-white hover:text-gray-400 uppercase font-bold"
            >
              HONVIETSTORE
            </LocalizedClientLink>
            <p className="text-gray-400 mt-2">
              TAP Market không chỉ là nơi mua sắm, mà còn là cầu nối văn hóa, giúp quảng bá các giá trị truyền thống và sản phẩm chất lượng cao của Việt Nam ra thế giới.
            </p>
            <p className="text-gray-400 mt-2">
              Thuộc hệ sinh thái TAP Media Inc
            </p>
            <p className="text-gray-400 mt-2">
              Email: contact@tapmediainc.com
            </p>
            <p className="text-gray-400 mt-2">
              Hotline: +13605050505
            </p>
            <p className="text-gray-400 mt-2">
              Website: <a href="https://tapmediainc.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">https://tapmediainc.com</a>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-gray-300 font-semibold">Danh Mục Sản Phẩm</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 txt-small">
                {categories.map((category) => (
                  <li key={category.id}>
                    <LocalizedClientLink
                      className="hover:text-gray-300"
                      href={`/categories/${category.handle}`}
                    >
                      {category.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-gray-300 font-semibold">Hỗ Trợ</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 txt-small">
                <li>
                  <a
                    href="/shopping-guide"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Cách Mua Hàng
                  </a>
                </li>
                <li>
                  <a
                    href="/feedback"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Phản Hồi Và Biên Nhận
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Câu Hỏi Thường Gặp
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-gray-300 font-semibold">Tài Khoản</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 txt-small">
                <li>
                  <a
                    href="/account"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Đăng Nhập
                  </a>
                </li>
                <li>
                  <a
                    href="/account"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-300"
                  >
                    Đăng Ký
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-10 justify-between text-gray-500">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} HONVIETSTORE. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}