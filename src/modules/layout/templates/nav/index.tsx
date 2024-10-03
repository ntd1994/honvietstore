import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Navbar from "./nav"
import Image from "next/image"
import userImage from "../../../../../public/static/images/user.png"
import "../../../../styles/nav.modules.css"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  // document.getElementById('mega-menu-dropdown-button')!.addEventListener('click', toggleDropdown);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        {/* <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          

          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
            </svg>
            <span className="font-semibold text-xl tracking-tight">Honvietstore</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow flex items-center">
              <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Category
              </a>
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Support
              </a>
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                About Us
              </a>
              
              <div className="group">
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0 focus:outline-none ">Download</a>
                <div className="absolute hidden bg-white text-gray-800 rounded mt-2 group-hover:block">
                  <div className="flex flex-col">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                  </div>
                  <div className="flex flex-col">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 4</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              HONVIETSTORE
            </LocalizedClientLink>
          </div>

           */}
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 text-black mr-6 ">
            <span className="font-semibold text-xl tracking-tight">
              Honvietstore
            </span>
          </div>
          <Navbar />
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
              >
                <Image
                  src={userImage}
                  height={18}
                  width={18}
                  alt="account-icon"
                />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div id="google_translate_element" ></div>
          </div>
        </nav>
      </header>
    </div>
  )
}
