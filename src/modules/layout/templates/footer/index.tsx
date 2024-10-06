import { Text, clx } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

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
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-gray-300 font-semibold">Bộ Sưu Tập</span>
                <ul className="grid grid-cols-1 gap-2 text-gray-400 txt-small">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-gray-300"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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