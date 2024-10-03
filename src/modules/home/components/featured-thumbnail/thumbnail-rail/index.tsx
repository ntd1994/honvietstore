import { ThumbnailPreviewType } from "types/global"
import Thumbnail from "./thumbnail"
import firstImage from "../../../../../../public/static/images/1.png"
import secondImage from "../../../../../../public/static/images/2.png"
import thirdImage from "../../../../../../public/static/images/3.png"

const thumbnailImages: ThumbnailPreviewType[] = [
  {
    id: "1",
    thumbnail: firstImage.src,
  },
  {
    id: "2",
    thumbnail: secondImage.src,
  },
  {
    id: "3",
    thumbnail: thirdImage.src,
  },
]

export default function ThumbnailRail() {
  return (
    <div className="content-container py-12 small:py-24">
      <ul className="grid grid-cols-1 small:grid-cols-3 gap-x-6 gap-y-10 small:gap-y-10">
        {thumbnailImages &&
          thumbnailImages.map((thumbnailImage) => (
            <li key={thumbnailImage.id}>
              <Thumbnail thumbnail={thumbnailImage.thumbnail} />
            </li>
          ))}
      </ul>
    </div>
  )
}
