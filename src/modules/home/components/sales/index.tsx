"use client"

import Image from "next/image"
import ads from "../../../../../public/static/images/ads3.png"

const Sales = () => {
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

export default Sales
