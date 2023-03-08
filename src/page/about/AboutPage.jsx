import { CheckBoxOutlined } from "@mui/icons-material"
import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Chat from "../../components/whatsapp/Chat"
import Footer from "../../containers/footer/Footer"
import WhyComponent from "../../containers/whychooseus/WhyComponent"
import "./AboutPage.css"
const AboutPage = () => {
  return (
    <>
      <div className="aboutPageWrapper">
        <div className="aboutHeroContentWrapper">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="aboutHero">
            <h1 className="heroTitle">ABOUT</h1>
          </div>
        </div>
        <div className="aboutSecondWrapper">
          <div className="aboutSecondLeft ">
            <img
              src="/images/teaMaker.jpg"
              className="teaMaker mx-auto"
              alt=""
            />
          </div>
          <div className="aboutSecondRight">
            <p className="yellowHead">ABOUT US</p>
            <h1 className="headingText">
              ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
            </h1>
            <p className="aboutText">
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa
              nibhtincidunt.
            </p>
            <div className="checkItems">
              <div className="checkItem">
                <CheckBoxOutlined />
                <span className="checkText">There will be some good text</span>
              </div>
              <div className="checkItem">
                <CheckBoxOutlined />
                <span className="checkText">There will be some good text</span>
              </div>
              <div className="checkItem">
                <CheckBoxOutlined />
                <span className="checkText">There will be some good text</span>
              </div>
            </div>
          </div>
        </div>
        <WhyComponent />
        <div className="aboutLastWrapper">
          <img src="/images/aboutLast.jpg" alt="" className="aboutLast" />
          <div className="bottomCard">
            <h1 className="headingText cardHead">
              TRY THE BEST COFFEE IN THE HOUSING CITY
            </h1>
            <p>
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa
              nibhtincidunt.
            </p>
            <p>
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa
              nibhtincidunt.
            </p>
          </div>
        </div>
        <Footer />
        <Chat />
      </div>
    </>
  )
}

export default AboutPage
