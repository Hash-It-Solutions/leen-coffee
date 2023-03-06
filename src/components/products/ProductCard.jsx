import React from "react"
import "./ProductCard.css"
const ProductCard = ({ star, productName, price }) => {
  return (
    <>
      <div className="col-md-3 col-6">
        <div className="productCard ">
          <img src="/images/coffeeGred.jpg" alt="" className="productImage" />
          <div className="starRating">{star} star</div>
          <p className="productName text-center">{productName}</p>
          <div className="productPrice text-center">PRICE - ${price}</div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
