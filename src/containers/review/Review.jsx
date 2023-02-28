import React from "react"
import "./Review.css"
const Review = () => {
  return (
    <>
      <div className="reviewWrapper">
        <div className="container">
          <div className="reviewContent">
            <p className="yellowHead">CUSTOMER FEEDBACK</p>
            <h1 className="headingText">OUR CUSTOMER REVIEW</h1>
            <img src="/images/quote.png" alt="" className="quoteImage" />
            <p className="customerReview text-center">
              Very good quality of food and service. Vast menu with child
              friendly items as well as local seafood and even entrees for those
              who dont like seafood. Great place! Thanks. We absolutely love
              everything there!
            </p>
            <img
              src="/images/propic.png"
              width="50px"
              height="50px"
              alt=""
              className="customerProfile"
            />
            <span className="customerName thinText">
              RASALINA DE WILLIAMSON
            </span>
            <span className="designation thinText yellowText">
              FOUNDER & CO
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
