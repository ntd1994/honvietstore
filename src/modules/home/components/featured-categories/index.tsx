"use client"

import { CategoryPreviewType } from "types/global"
import CategoryRail from "./category-rail"
import barbecue from "../../../../../public/static/images/barbecue.png"
import drink from "../../../../../public/static/images/drink.png"
import fruit from "../../../../../public/static/images/fruit.png"
import seasoning from "../../../../../public/static/images/seasoning.png"
import softDrink from "../../../../../public/static/images/soft-drink.png"
import vegetable from "../../../../../public/static/images/vegetable.png"

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

export default function FeaturedCategories() {
  return <CategoryRail categoryLists={categories} />
}
