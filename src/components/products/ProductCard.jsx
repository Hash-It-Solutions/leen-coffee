import React from "react"
import "./ProductCard.css"
const ProductCard = ({ star, productName, price }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 col-12">
        <div className="productCard ">
          <img
            src="/images/coffeePowerPack.png"
            alt=""
            className="productImage"
          />
          <div className="starRating">{star} star</div>
          <p className="productName text-center">{productName}</p>
          <div className="productPrice text-center">PRICE - ${price}</div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
