"use client"
// src/components/LeftSidebar/LeftSidebar.tsx
import { Region } from "@medusajs/medusa"
import React, { useState } from "react";
import FeaturedCategories from "@modules/home/components/featured-categories"
import { CategoryPreviewType } from "types/global";
import CategoryPreview from "@modules/categories/components/category-preview";

export default function LeftSidebar({
  categoryLists,
}: {
  categoryLists: CategoryPreviewType[]
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const categoriesPerPage = 6

  const totalPages = Math.ceil(categoryLists.length / categoriesPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="content-container py-6 small:py-2">
      <ul className="flex justify-center flex-col gap-y-5">
        {categoryLists
          .slice(
            currentPage * categoriesPerPage,
            (currentPage + 1) * categoriesPerPage
          )
          .map((category) => (
            <li key={category.id} className="relative h-20 my-5">
              <CategoryPreview
                thumbnail={category.thumbnail}
                title={category.title}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}