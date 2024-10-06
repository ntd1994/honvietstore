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

  return (
    <div className="fixed top-0 inset-x-0 z-50 group">
      <header className="bg-white relative h-16 mx-auto duration-200 border-ui-border-base shadow-2xl transition-shadow duration-300">
        <nav className="sticky top-0 w-full z-50 grid grid-cols-12 gap-0 content-container txt-xsmall-plus text-ui-fg-subtle h-full text-small-regular">
          <div className="col-span-12 md:col-start-1 md:col-end-12 flex items-center justify-between h-full text-small-regular">
            {/* Group 1: Honvietstore and Navbar */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  Honvietstore
                </span>
              </div>
              <Navbar />
            </div>

            {/* Space between Group 1 and Group 2 */}
            <div className="flex-1" />

            {/* Group 2: Search and Cart */}
            <div className="flex items-center gap-x-6 h-full flex-shrink-0">
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
              <div className="flex items-center gap-x-6 h-full flex-1 justify-end">
                <div id="google_translate_element"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}