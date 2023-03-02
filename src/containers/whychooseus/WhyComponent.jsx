import React from "react"
import "./WhyComponent.css"
const WhyComponent = () => {
  return (
    <>
      <div className="whyWrapper">
        <div className="container">
          <div className="whyHead text-center">
            <p className="yellowHead">WHY CHOOSE US</p>
            <h1 className="headingText">
              WE ARE PROVIDE BEST SERVICE IN YOUR CITY
            </h1>
          </div>
          <div className="dataCards">
            <div className="card dataCard p-5">
              <h1 className="headingText">12K+</h1>
              <h4>Happy Customer</h4>
            </div>
            <div className="card dataCard p-5">
              <h1 className="headingText">91+</h1>
              <h4>Certified Barista</h4>
            </div>
            <div className="card dataCard p-5">
              <h1 className="headingText">15+</h1>
              <h4>Years Experience</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyComponent
