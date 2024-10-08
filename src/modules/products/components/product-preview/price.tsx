import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-gray-500">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("font-bold text-lg", {
          "text-yellow-600": price.price_type === "sale",
          "text-custom-red": price.price_type !== "sale",
        })}
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
