import React from "react"
import "./MenuItem.css"
const MenuItem = () => {
  return (
    <>
      <div className="menuItem">
        <h5 className="menuItemName">AMERICANO ROSTED GRED</h5>
        <div className="menuPrice">
          <img src="/images/rupee.png" className="rupeeIcon" alt="" />
          <span className="menuPrice">12</span>
        </div>
        <img src="/images/cupCircle.jpg" alt="" className="cupCircle" />
      </div>
    </>
  )
}

export default MenuItem
