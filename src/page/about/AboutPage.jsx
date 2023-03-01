import React from "react"
import Navbar from "../../components/navbar/Navbar"
import "./AboutPage.css"
const AboutPage = () => {
  return (
    <>
      <div className="aboutPageWrapper">
        <img src="/images/hero.jpg" alt="" className="heroBg" />
        <div className="heroContentWrapper">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="aboutHero">
            <h1 className="heroTitle">ABOUT</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
