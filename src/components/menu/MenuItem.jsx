import React from "react"
import "./MenuItem.css"
const MenuItem = ({ itemName, imgName, price }) => {
  return (
    <>
      <div className="menuItem">
        <h5 className="menuItemName">{itemName}</h5>
        <div className="menuPrice">
          <span className="menuPrice">{price} SAR</span>
        </div>
        <img src={`/images/${imgName}`} alt="" className="cupCircle" />
      </div>
    </>
  )
}

export default MenuItem
