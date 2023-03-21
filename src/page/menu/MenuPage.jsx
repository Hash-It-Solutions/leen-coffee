import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Chat from "../../components/whatsapp/Chat"
import Footer from "../../containers/footer/Footer"
import ColdDrinks from "../../containers/menu/ColdDrinks"
import HotDrinks from "../../containers/menu/HotDrinks"
import Menu from "../../containers/menu/Menu"
import Sweets from "../../containers/menu/Sweets"
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
          <ColdDrinks />
          <HotDrinks />
          <Sweets />
        </div>
        <Footer />
        <Chat />
      </div>
    </>
  )
}

export default MenuPage
