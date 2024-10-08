import React, { useState, useEffect } from "react"
import Image from "next/image"

interface SlideshowProps {
  images: string[]
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <div className="flex w-full h-auto items-center justify-between px-8 mt-24">
      {/* Image 1 */}
      <div className="w-[calc(50%-16px)] relative rounded-lg shadow-xl">
        <img
          alt={`Image 1 - Slide ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
          className={`transition-transform duration-1000 rounded-lg w-full h-auto object-contain shadow-xl`}
        />
      </div>

      {/* Image 2 */}
      <div className="w-[calc(50%-16px)] relative rounded-lg shadow-xl">
        <img
          alt={`Image 2 - Slide ${currentImageIndex + 1}`}
          src={images[(currentImageIndex + 1) % images.length]}
          className={`transition-transform duration-1000 rounded-lg w-full h-auto object-contain shadow-xl`}
        />
      </div>
    </div>
  )
}

export default Slideshow
