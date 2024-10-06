import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      {/* <div className="bg-gray-200 p-8 rounded-xl"> */}
      <div className="bg-gray-200 p-8 rounded-3xl shadow-inner">
        <div className="flex justify-between mb-4">
          <Text className="txt-compact-xlarge-plus font-bold uppercase text-green-500">
            {collection.title}
          </Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-5 gap-x-6 gap-y-10 small:gap-y-10">
          {products &&
            products.map((product, index) => (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
