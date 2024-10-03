import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import Hero from "../hero"
import Sales from "../sales"
import Ads from "../ads"
import Ads2 from "../ads2"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  // return collections.map((collection) => (
  //   <li key={collection.id}>
  //     <ProductRail collection={collection} region={region} />
  //     <InsertComponentsAfterTwo />
  //   </li>
  // ))
  const items: JSX.Element[] = []

  collections.forEach((collection, index) => {
    items.push(
      <li key={collection.id}>
        <ProductRail collection={collection} region={region} />
      </li>
    )

    // Insert a sample component after every two ProductRail components
    if ((index + 1) % 2 === 0) {
      const adIndex = Math.floor((index + 1) / 2) % 3 // Rotate between ads
      items.push(
        <li key={`ad-${index}`}>
          {adIndex === 0 && <Sales />}
          {adIndex === 1 && <Ads />}
          {adIndex === 2 && <Ads2 />}
        </li>
      )
    }
  })

  return items
}
