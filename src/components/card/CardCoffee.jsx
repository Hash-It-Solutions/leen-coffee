import { ArrowForward } from "@mui/icons-material"
import React from "react"
import "./CardCoffee.css"
const CardCoffee = () => {
  return (
    <>
      <div className="col-md-4 col-12 p-3">
        <div className="coffeCard roundedCorner">
          {/* <img
            src="/images/aboutCup.jpg"
            className="roundedCorner cardImage"
            alt=""
          /> */}
          <p className="cardNumber yellowText">01</p>
          <h2 className="cardTitle">PLACE TO GET LOST</h2>
          <p className="cardText ">
            Curabitur semper erat a lacusey sedn consequat, sit ametey.
          </p>
          <p className="readMore yellowText">
            Read More
            <ArrowForward />
          </p>
        </div>
      </div>
    </>
  )
}

export default CardCoffee
