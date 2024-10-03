import React from "react"

const AboutPage: React.FC = () => {
  return (
    <div className="pl-4 pb-5">
      <h2 className="mb-14 text-center text-3xl font-semibold">
        Feedback and Return policies
      </h2>
      <ol className="space-y-3">
        <li className="text-body-color dark:text-dark-6 flex text-base">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white bg-green-500">
            1
          </span>
          <h4 className="text-xl font-bold text-gray-800  pb-1">
            Time for Feedback
          </h4>
        </li>
        <div>
          <p>
            Time for receive and report feedback related to Honvietstore product
            is as below
          </p>
          <p>
            - In 24 hours with product like vegetable, fruit , seafoods,
            anti-inflammatory food, glitter cave
          </p>
          <p>
            - In 48 hours with product like drink, candy, flavour, dry foods
          </p>
        </div>
        <li className="text-body-color dark:text-dark-6 flex text-base">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white bg-green-500">
            2
          </span>
          <h4 className="text-xl font-bold text-gray-800  pb-1">
            Support return cases
          </h4>
        </li>
        <div>
          <p>- Product is damaged through shipping.</p>
          <p>- Product is not like information provide on website</p>
          <p>- Orther reason that cause by the provider</p>
        </div>
        <li className="text-body-color dark:text-dark-6 flex text-base blue">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white bg-green-500">
            3
          </span>
          <h4 className="text-xl font-bold text-gray-800  pb-1">
            How to feedback
          </h4>
        </li>
        <div>
          <p>
            When you find out your product have one of the above problems, you
            must record and reshot that product and contact to our customer
            services through below approach
          </p>
          <p>
            - Send email with Feedback product subject with the picture to
            email: honvietstore@gmail.com
          </p>
          <p>- Contact through our fanpage</p>
        </div>
        <li className="text-body-color dark:text-dark-6 flex text-base">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white bg-green-500">
            4
          </span>
          <h4 className="text-xl font-bold text-gray-800  pb-1">
            Time for money return
          </h4>
        </li>
        <div>
          <p>
            After verify the feedback, we will start the return process. Depend
            on the card you use, it may take longer
          </p>
        </div>
        <li className="text-body-color dark:text-dark-6 flex text-base">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white bg-green-500">
            5
          </span>
          <h4 className="text-xl font-bold text-gray-800  pb-1">
            Money return for wrong payment
          </h4>
        </li>
        <div>
          <p>
            In this case, client will responsibily for the transaction money
          </p>
        </div>
      </ol>
    </div>
  )
}

export default AboutPage
