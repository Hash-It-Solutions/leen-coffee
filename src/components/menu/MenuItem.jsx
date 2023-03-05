import React from "react"
import "./MenuItem.css"
const MenuItem = ({ itemName, imgName, price }) => {
  return (
    <>
      <div className="menuItem">
        <h5 className="menuItemName">{itemName}</h5>
        <div className="menuPrice">
          <img src="/images/rupee.png" className="rupeeIcon" alt="" />
          <span className="menuPrice">{price}</span>
        </div>
        <img src={`/images/${imgName}`} alt="" className="cupCircle" />
      </div>
    </>
  )
}

export default MenuItem
