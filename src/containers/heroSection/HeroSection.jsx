import React from "react"
import { Button } from "react-bootstrap"
import Navbar from "../../components/navbar/Navbar"
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <>
      <div className="heroWrapper">
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="heroContent">
          <div className="heroLeft">
            <div className="heroTitleDiv">
              <span className="heroTitleText">ROOSTED COFEE FOR YOU</span>
            </div>
            <div className="heroDescriptionDiv">
              <span className="heroDescriptionText">
                The coffee if brewed by first roasting the green cofee beans
                over hot coals in a brazier. given an opportunity to sample
              </span>
            </div>
            <div className="heroButtons mt-5">
              <Button className="ms-2">Testy Coffee</Button>
              <Button className="ms-2">Read More</Button>
            </div>
          </div>
          <div className="heroRight">Mug Image</div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
