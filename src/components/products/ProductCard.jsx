import React from "react"
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <>
      <div className="col-md-3 col-6">
        <div className="productCard ">
          <img src="/images/coffeeGred.jpg" alt="" className="productImage" />
          <div className="starRating">5 star</div>
          <p className="productName text-center">BRAZIL COFFEE GRED</p>
          <div className="productPrice text-center">PRICE - $3</div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
