import { Button } from "@mui/material"
import React from "react"
import "./About.css"
const About = () => {
  return (
    <>
      <div className="aboutWrapper">
        <div className="customContainer">
          <div className="row">
            <div className="col-12">
              <Button variant="contained" disabled className="yellowBg">
                About Us
              </Button>
            </div>
            <div className="col-md-6 col-12">
              <h1 className="subHeading">ABOUT LEEN COFFEE</h1>
              <p className="paraText">
                Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                mmodo mattis. Aliquam erat volutpat.mattis nunc. Praesent ut
                quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                mmodo mattis. Aliquam erat volutpat.mattis nunc. Praesent ut
                quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                mmodo mattis.
              </p>
              <Button variant="contained" className="primaryButton">
                READ MORE
              </Button>
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/images/about1.jpg"
                alt=""
                className="aboutImg roundedCorner"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
