import React from "react"
import Navbar from "../../components/navbar/Navbar"
import "./MenuPage.css"
const MenuPage = () => {
  return (
    <>
      <div className="menuPageWrapper">
        <div className="aboutHeroContentWrapper">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="aboutHero">
            <h1 className="heroTitle">Menu</h1>
          </div>
        </div>
        <div className="menuContentWrapper"></div>
      </div>
    </>
  )
}

export default MenuPage
