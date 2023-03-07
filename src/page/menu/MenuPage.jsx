import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Menu from "../../containers/menu/Menu"
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
        <div className="menuPageContentWrapper ">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default MenuPage
