import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail/index"
import { Text } from "@medusajs/ui"

export default function CategoryPreview({
  title,
  thumbnail,
}: {
  title: string
  thumbnail: string
}) {
  return (
    <LocalizedClientLink href={`/products`} className="group">
      <div className="flex justify-center transition-transform duration-200 transform-gpu hover:scale-[1.1] hover:z-10">
        <Thumbnail thumbnail={thumbnail} size="square" />
        <div className="flex txt-compact-medium mt-4 justify-center items-center">
          {/* <Text className="text-ui-fg-subtle text-center text-green-500">{title}</Text> */}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
        {/* transition-transform duration-200 transform-gpu hover:scale-[1.02] */}
