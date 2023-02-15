import React from "react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="navWrapper">
        <div className="navItem">
          <span className="navText">Home</span>
        </div>
        <div className="navItem">
          <span className="navText">About</span>
        </div>
        <div className="navItem">
          <span className="navText">Menu</span>
        </div>
        <div className="navItem">
          <span className="navText">Reservation</span>
        </div>
        <div className="navItem">
          <span className="navText">Contact</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
