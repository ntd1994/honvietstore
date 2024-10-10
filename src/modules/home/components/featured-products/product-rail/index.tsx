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
    <div className="px-2 md:content-container py-8 sm:py-8">
      <div className="bg-white p-4 md:p-8 rounded-3xl shadow-inner">
        <div className="flex justify-between mb-4">
          <Text className="txt-compact-xlarge-plus font-bold uppercase text-green-500">
            {collection.title}
          </Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 md:gap-x-6 gap-y-10 mx-auto max-w-[1200px]">
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
