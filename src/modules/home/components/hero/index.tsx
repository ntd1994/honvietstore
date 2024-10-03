"use client"

import Slideshow from "./slide-show"

const images = [
  "https://medusa-s3-tap-market.s3.ap-southeast-1.amazonaws.com/static/home1.png",
  "https://medusa-s3-tap-market.s3.ap-southeast-1.amazonaws.com/static/home2.png",
  "https://medusa-s3-tap-market.s3.ap-southeast-1.amazonaws.com/static/home3.png",
  //"https://medusa-s3-tap-market.s3.ap-southeast-1.amazonaws.com/static/home4.png",
]

const Hero = () => {
  return (
    <div className="w-full relative">
      <Slideshow images={images} />
    </div>
  )
}

export default Hero
