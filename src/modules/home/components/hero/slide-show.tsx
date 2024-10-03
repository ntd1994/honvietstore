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
    <div className="relative w-[100vw] h-[90vh] overflow-hidden">
      {images.map((image, index) => (
        <img
          alt="image"
          key={index}
          src={image}
          className={`absolute top-0 left-0transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }  w-full object-contain `}
        />
      ))}
    </div>

    // <div className="relative w-full h-[75vh] overflow-hidden">
    //   {images.map((image, index) => (
    //     <img
    //       key={index}
    //       src={image}
    //       className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
    //         index === currentImageIndex ? 'opacity-100' : 'opacity-0'
    //       }`}
    //       alt={`Slideshow Image ${index + 1}`}
    //     />
    //   )}
    // </div>
  )
}

export default Slideshow
