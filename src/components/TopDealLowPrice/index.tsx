import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import ProductCheap from "./TopDealLowPrice"

export default async function TopDealLowPrice({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  const items: JSX.Element[] = []

  if (collections.length > 0) {
    return (
      <li key={collections[0].id}>
        <ProductCheap collection={collections[0]} region={region} />
      </li>
    );
  }

    // Insert a sample component after every two ProductRail components
    // if ((index + 1) % 2 === 0) {
    //   const adIndex = Math.floor((index + 1) / 2) % 3 // Rotate between ads
    //   items.push(
    //     <li key={`ad-${index}`}>
    //       {adIndex === 0}
    //       {adIndex === 1}
    //       {adIndex === 2}
    //     </li>
    //   )
    // }

  return items
}
