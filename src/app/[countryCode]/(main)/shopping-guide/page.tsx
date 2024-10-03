"use client"

import React from "react"

import { Stepper, Step, Button } from "@material-tailwind/react"
import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"
import Step4 from "./step-4"
import Step5 from "./step-5"

const DefaultStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

  const renderParagraph = () => {
    switch (activeStep) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Step4 />
      case 4:
        return <Step5 />
      default:
        return null
    }
  }

  const paragraphs = [
    "Step 1 paragraph content",
    "Step 2 paragraph content",
    "Step 3 paragraph content",
    "Step 4 paragraph content",
    "Step 5 paragraph content",
  ]

  const renderStepper = () => (
    <Stepper
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
    >
      {paragraphs.map((_, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          {index + 1}
        </Step>
      ))}
    </Stepper>
  )

  return (
    <div className="w-full py-4 px-8 text-center">
      <h1 className="font-bold text-3xl pb-5">Shopping guide</h1>
      {renderStepper()}
      <div className="mt-16">
        {/* Render paragraph dynamically based on active step */}
        {renderParagraph()}
      </div>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default DefaultStepper
