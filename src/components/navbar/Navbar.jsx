import { Close, Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false)
  const [navBar, setNavBar] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 150) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener("scroll", changeBg)
  return (
    <>
      <header
        className={navBar ? "navBarWrapper active g-0" : "navBarWrapper g-0"}
      >
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" width="80px" height="80px" />
        </a>
        <ul className={`navBar${menuClick ? " open" : ""}`}>
          <li>
            <Link to={"/"}>Home</Link>
            {/* <a href="#" className="active">
              Home
            </a> */}
          </li>
          <li>
            {/* <a href="">About</a> */}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="main">
          <div
            className={menuClick ? "d-none" : "menuIcon"}
            onClick={() => setMenuClick(true)}
          >
            <Menu />
          </div>
          <div
            className={menuClick ? "menuIcon" : "d-none"}
            onClick={() => setMenuClick(false)}
          >
            <Close />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

{
  /* <div className="navResponsiveWrapper">
        <div className={menuClick ? "navWrapperColumn" : "navWrapper"}>
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
        <div className="navMenu" onClick={() => setMenuClick(true)}>
          <Menu />
        </div>
      </div> */
}
