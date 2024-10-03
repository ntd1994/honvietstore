"use client"

import Image from "next/image"
import ads from "../../../../../public/static/images/ads2.png"

const Ads2 = () => {
  return (
    <div className="flex justify-center hidden md:flex justify-center">
      <Image
        src={ads}
        alt="Description of the image"
        className="max-w-full"
        width={1200}
        height={400}
      />
    </div>
  )
}

export default Ads2
