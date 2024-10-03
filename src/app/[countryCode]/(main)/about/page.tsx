import React from "react"
import Image from "next/image"

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto item-center">
      <div className="flex flex-col items-center pt-5">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          About Us
        </h1>
      </div>
      <div>
        {/* <div className="relative w-full h-[80vh] overflow-hidden ">
                    <img
                        src="https://medusa-s3-tap-market.s3.ap-southeast-1.amazonaws.com/HonVietStore.png"
                        alt="Description of the image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
            </div> */}
      </div>
      <div className="flex justify-center items-center md:pt-4 p-3">
        <div className="md:w-4/5 lg:w-9/10 xl:w-4/5  md:px-0 pt-4">
          <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
            Welcome to Honvietstore, your ultimate destination for all things
            special in e-commerce!
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">
            At Honvietstore, we believe in delivering exceptional products and
            an unparalleled shopping experience to our customers. Whether you
            are looking for the latest gadgets, trendy fashion items, or unique
            gifts, we have got you covered.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">
            Our team is dedicated to curating a diverse selection of
            high-quality products from trusted brands around the world. We are
            constantly updating our inventory to bring you the most exciting
            finds and must-have items.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">
            With our user-friendly interface and secure payment options,
            shopping at Honvietstore is convenient and stress-free. Plus, our
            responsive customer support team is always here to assist you with
            any questions or concerns you may have.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400 text-justify">
            Thank you for choosing Honvietstore for all your online shopping
            needs. Happy shopping!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
