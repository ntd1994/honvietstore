import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Navbar from "./nav"
import Image from "next/image"
import userImage from "../../../../../public/static/images/user.png"
import "../../../../styles/nav.modules.css"
import CategoryMenu from "components/MenuButton/MenuButton"
import SearchBar from "components/SearchBar/SearchBar"
import LocationDisplay from "components/LocationDisplay/LocationDisplay" 

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="fixed top-0 inset-x-0 z-50 group">
      <header className="bg-white relative mx-auto duration-200 border-ui-border-base shadow-md transition-shadow duration-300 ">
        <nav className="sticky top-0 w-full z-50 grid grid-cols-12 gap-0 txt-xsmall-plus text-ui-fg-subtle h-full text-small-regular px-8 py-4">
          <div className="col-span-12 md:col-start-1 md:col-end-12 flex items-center justify-between h-full text-small-regular">
            {/* Group 1: Honvietstore and Navbar */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center flex-shrink-0 text-black">
                <span className="font-semibold text-xl tracking-tight text-green-500">
                  Honvietstore
                </span>
              </div>
              <Navbar />
            </div>

            <SearchBar/>

            {/* Group 2: Search and Cart */}
            <div className="col-span-4 grid grid-rows-2 h-full flex-shrink-0 hidden md:block">
              {/* Hàng đầu tiên: Cart và Tài khoản */}
              <div className="flex items-center gap-x-6">
                <div className="p-2">
                  <Suspense
                    fallback={
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base flex gap-2 z-0"
                        href="/cart"
                      >
                        Cart (0)
                      </LocalizedClientLink>
                    }
                  >
                    <CartButton />
                  </Suspense>
                </div>

                <LocalizedClientLink
                  className="relative flex items-center transition-all duration-300"
                  href="/account"
                >
                  {/* Khối nội dung Tài khoản */}
                  <div className="relative flex items-center group">
                    <Image
                      src={userImage}
                      height={18}
                      width={18}
                      alt="account-icon"
                      className="mr-2"
                    />
                    <span className="text-sm font-semibold">Tài khoản</span>
                  </div>
                </LocalizedClientLink>
              </div>

              {/* Hàng thứ hai: Location */}
              <div className="flex items-center">
                <LocationDisplay />
              </div>
            </div>
            <CategoryMenu />
          </div>
        </nav>
        {/* Đường phân cách */}
        <div className="w-full h-[1px] bg-gray-300 hidden md:block"></div>

        {/* Thanh cam kết */}
        <div className="bg-white py-2 hidden md:block">
          <div className="sticky top-0 w-full z-40 grid grid-cols-12 gap-0 content-container txt-small-plus font-semibold text-gray-700">
            <div className="col-span-12 flex justify-center items-center text-xs text-gray-700">
              <div className="flex items-center mx-2">
                <i className="icon-check mr-1" /> Cam kết 100% hàng thật
              </div>
              <div className="border-l border-gray-300 h-4 mx-4"></div>
              <div className="flex items-center mx-2">
                <i className="icon-money-back mr-1" /> Hoàn 200% nếu hàng giả
              </div>
              <div className="border-l border-gray-300 h-4 mx-4"></div>
              <div className="flex items-center mx-2">
                <i className="icon-exchange mr-1" /> 30 ngày đổi trả
              </div>
              <div className="border-l border-gray-300 h-4 mx-4"></div>
              <div className="flex items-center mx-2">
                <i className="icon-fast-delivery mr-1" /> Giao nhanh 2h
              </div>
              <div className="border-l border-gray-300 h-4 mx-4"></div>
              <div className="flex items-center mx-2">
                <i className="icon-discount mr-1" /> Giá siêu rẻ
              </div>
              <div className="border-l border-gray-300 h-4 mx-4"></div>
              <div className="flex items-center mx-2">
                <i className="icon-ship mr-1" /> Free ship mọi nơi
              </div>
            </div>
          </div>
        </div>
        {/* end thanh cam kết */}
      </header>
    </div>
  );
}