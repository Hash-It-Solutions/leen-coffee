import React from "react"
import CardCoffee from "../../components/card/CardCoffee"
import "./Carousel.css"
const Carousel = () => {
  return (
    <>
      <div className="carouselWrapper">
        <div className="row">
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
        </div>
      </div>
    </>
  )
}

export default Carousel
