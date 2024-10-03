"use client"

import Image from "next/image"
import ads from "../../../../../public/static/images/ads1.png"

const Ads = () => {
  return (
    <div className="flex justify-center hidden md:flex justify-center transform transition-transform ease-in duration-500 hover:translate-x-1">
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

export default Ads
