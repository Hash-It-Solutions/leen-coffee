import React from "react"
import ProductCard from "../../components/products/ProductCard"
import "./Popularproducts.css"
const Popularproducts = () => {
  return (
    <>
      <div className="popularProWrapper">
        <div className="populatTopSection ">
          <div className="headLeft ">
            <p className="yellowHead">POPULAR PRODUCTS</p>
            <h1 className="headingText">CAFENA POPULAR PRODUCT</h1>
          </div>
          <div className="headRight">
            <p className="brownButton ">VIEW ALL PRODUCTS</p>
          </div>
        </div>
        <div className="popularProducts">
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <img src="/images/arrow.jpg" alt="" className="productsRightArrow" />
        </div>
      </div>
    </>
  )
}

export default Popularproducts
