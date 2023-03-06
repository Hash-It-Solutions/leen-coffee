import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import ProductCard from "../../components/products/ProductCard"
import "./Popularproducts.css"
const products = [
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
  { star: 5, proName: "BRAZIL COFFEE GRED", proPrice: 5 },
]
const Popularproducts = () => {
  const [limit, setLimit] = useState(4)
  const [hasData, setHasData] = useState(true)
  const loadProducts = () => {
    setLimit((prev) => prev + 4)
  }
  useEffect(() => {
    if (limit > products.length) {
      setHasData(false)
    }
  }, [limit])
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
            {products
              .filter((item, index) => {
                return index < limit
              })
              .map((item) => {
                return (
                  <ProductCard
                    productName={item.proName}
                    price={item.proPrice}
                    star={item.star}
                  />
                )
              })}
          </div>
          {hasData && (
            <div className="loadMore text-center">
              <Button variant="contained" onClick={loadProducts}>
                LOAD MORE
              </Button>
              {/* <img
                src="/images/arrow.jpg"
                alt=""
                className="productsRightArrow"
                onClick={loadProducts}
              /> */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Popularproducts
