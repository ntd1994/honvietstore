import React, { useState, useEffect } from "react"
import Image from "next/image"

interface SlideshowProps {
  images: string[]
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", updateMedia);
    updateMedia(); // Initial check

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds
    return () => {
      window.removeEventListener("resize", updateMedia);
      clearInterval(intervalId);
    }
  }, [images.length])

  return (
    <div className={`flex w-full h-auto items-center justify-between ${isMobile ? "px-0 mt-24" : "px-8  mt-36"}`}>
      {/* Image 1 */}
      <div className={` relative  shadow-xl ${isMobile ? "w-full": "w-[calc(50%-16px)] rounded-lg" }`}>
        <img
          alt={`Image 1 - Slide ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
          className="transition-transform duration-1000 rounded-lg w-full h-auto object-cover shadow-xl"
        />
      </div>

      {/* Image 2 */}
      <div className="hidden md:block w-[calc(50%-16px)] relative rounded-lg shadow-xl">
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
