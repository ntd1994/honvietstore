import { Text } from "@medusajs/ui"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      {/* Wrapper for the card with shadow and hover effect */}
      <div className="transition-transform duration-200 transform-gpu hover:scale-[1.02]">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-200 ease-in-out hover:shadow-2xl border border-gray-300 hover:border-green-700">
          <Thumbnail
            thumbnail={productPreview.thumbnail}
            size="square"
            isFeatured={isFeatured}
          />
          <div className="flex txt-compact-medium justify-between p-4">
            <Text
              className="font-medium text-lg text-gray-700 h-[48px] leading-tight overflow-hidden line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {productPreview.title}
            </Text>         
          </div>
          <div className="flex items-center gap-x-2 p-4">
              {cheapestPrice && <PreviewPrice price={cheapestPrice}/>}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}