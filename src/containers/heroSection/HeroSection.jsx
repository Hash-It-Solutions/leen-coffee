import { FacebookOutlined, Twitter, YouTube } from "@mui/icons-material"
import React from "react"
import { Button } from "react-bootstrap"
import Navbar from "../../components/navbar/Navbar"
// import.meta.env.BASE_URL
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <>
      <div className="heroWrapper">
        <img src="/images/hero.jpg" alt="" className="heroBg" />
        <div className="heroContentWrapper">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="heroContent">
            <div className="heroLeft">
              <div className="heroTitleDiv">
                <span className="heroTitleText">ROOSTED COFFEE FOR YOU</span>
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
              <div className="socialMedia mt-5">
                <div className="facebook ms-2">
                  <FacebookOutlined />
                  FACEBOOK
                </div>
                <div className="twitter ms-2">
                  <Twitter />
                  TWITTER{" "}
                </div>
                <div className="youtube ms-2">
                  <YouTube />
                  YOUTUBE
                </div>
              </div>
              <div className="heroCup mt-5">
                <img src="/images/cup.jpg" className="cupImage" alt="" />
              </div>
            </div>
            <div className="heroRight">
              <img
                src="/images/arabic jug 1.svg"
                alt=""
                className="arabicJug"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
