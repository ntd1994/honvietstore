import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { CategoryPreviewType, ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import FeaturedCategories from "@modules/home/components/featured-categories"
import FeaturedThumbnails from "@modules/home/components/featured-thumbnail"
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar"
import barbecue   from "../../../../public/static/images/barbecue.png"
import drink      from "../../../../public/static/images/drink.png"
import fruit      from "../../../../public/static/images/fruit.png"
import seasoning  from "../../../../public/static/images/seasoning.png"
import softDrink  from "../../../../public/static/images/soft-drink.png"
import vegetable  from "../../../../public/static/images/vegetable.png"

const categories: CategoryPreviewType[] = [
  {
    id: "1",
    title: "Barbecue",
    thumbnail: barbecue.src,
  },
  {
    id: "2",
    title: "Drink",
    thumbnail: drink.src,
  },
  {
    id: "3",
    title: "Fruit",
    thumbnail: fruit.src,
  },
  {
    id: "4",
    title: "Seasoning",
    thumbnail: seasoning.src,
  },
  {
    id: "5",
    title: "SoftDrink",
    thumbnail: softDrink.src,
  },
  {
    id: "6",
    title: "Vegetable",
    thumbnail: vegetable.src,
  },
]

export const metadata: Metadata = {
  title: "HonVietStore",
  description:
    "HonVietStore - Nền tảng thương mại điện tử mang đến các sản phẩm chất lượng từ Việt Nam cho người tiêu dùng toàn cầu. Khám phá các mặt hàng độc đáo, an toàn và uy tín với dịch vụ giao hàng nhanh chóng, tiện lợi.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 6)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  console.log(collections)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedCategories />
        </ul>
      </div> */}
      <div className="grid grid-cols-12 gap-x-6 py-12 mt-12 pr-4 pl-8">

        {/* leftsidebar */}
        <div className="col-span-2 my-24 relative">
          <div className="sticky top-0 p-3 bg-gray-200 rounded-3xl shadow-inner min-h-[1000px]">
            <h2 className="txt-compact-xlarge-plus font-bold uppercase text-green-500 text-center pt-5">Categories</h2>
            <LeftSidebar categoryLists={categories}/>
          </div>
        </div>

        {/* content */}
        <div className="col-span-10 ">
          <ul className="flex flex-col">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
    </>
  )
}


// return (
//   <>
//     <Hero />
//     {/* <div className="py-12">
//       <ul className="flex flex-col gap-x-6">
//         <FeaturedCategories />
//       </ul>
//     </div> */}
//     <div className="py-12">
//       <ul className="flex flex-col gap-x-6">
//         <FeaturedProducts collections={collections} region={region} />
//       </ul>
//     </div>
//   </>
// )
// }
