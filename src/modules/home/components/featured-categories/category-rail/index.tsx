"use client"

import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import CategoryPreview from "@modules/categories/components/category-preview"
import { CategoryPreviewType } from "types/global"

// export default function CategoryRail({
//     categoryLists
// }: { categoryLists: CategoryPreviewType[]}){
//     return (
//         <div className="content-container py-12 small:py-24">
//             <div className="flex justify-between mb-8">
//                 <Text className="">Market Category</Text>
//                 <InteractiveLink href="">
//                     View all
//                 </InteractiveLink>
//             </div>
//             <ul className="grid grid-cols-2 small:grid-cols-5 gap-x-6 gap-y-10 small:gap-y-10">
//                 {
//                     categoryLists && categoryLists.map((category) => (
//                         <li key={category.id}>
//                             <CategoryPreview
//                                 thumbnail={category.thumbnail}
//                                 title={category.title}
//                             />
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

import { useState } from "react"

export default function CategoryRail({
  categoryLists,
}: {
  categoryLists: CategoryPreviewType[]
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 6

  const totalPages = Math.ceil(categoryLists.length / productsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="content-container py-12 small:py-40">
      <div className="">
        <ul className="grid grid-cols-2 small:grid-cols-6 gap-x-5 small:gap-y-5">
          {categoryLists
            .slice(
              currentPage * productsPerPage,
              (currentPage + 1) * productsPerPage
            )
            .map((category) => (
              <li key={category.id}>
                <CategoryPreview
                  thumbnail={category.thumbnail}
                  title={category.title}
                />
              </li>
            ))}
        </ul>
      </div>
      {/* <div className="flex justify-center">
        <ul className="flex gap-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                className={`px-4 py-2 rounded-full focus:outline-none ${
                  index === currentPage
                    ? "bg-green-500 text-white"
                    : "bg-white text-black-600"
                }`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}
