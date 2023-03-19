import {
  FacebookOutlined,
  LocationOnOutlined,
  Smartphone,
  SmartphoneOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material"
import React from "react"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerContent">
          <div className="footerLeft ">
            <div className="row">
              <div className="footerAddress col-md-6 col-12">
                <div className="phoneIcon">
                  <SmartphoneOutlined />
                </div>
                <span className="footerTitle">PHONE:</span>
                <span className="footerText">0557694858</span>
              </div>
              <div className="footerAddress col-md-6 col-12">
                <div className="phoneIcon">
                  <LocationOnOutlined />
                </div>
                <span className="footerTitle">ADDRESS:</span>
                <span className="footerText">30 North West New</span>
              </div>
              <div className="footerDescription mt-3 col-md-7 col-12">
                <p className="footerText">
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam venenatis fringilla. Morbi vestibulum Donec et
                  nibh maximus, congue est eu, mattis nunc. Praesent ut quam
                  quis quam venenatis fringilla. Morbi vestibulum
                </p>
              </div>
              <div className="col-md-5 col-12 mt-3 footerLogo text-center">
                <img
                  src="/images/logo.png"
                  alt=""
                  className=""
                  width="80px"
                  height="80px"
                />
              </div>
              <div className="col-12">
                <ul className="footerNav">
                  <li>
                    <a href="#" className="active footerTitle">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="footerTitle" href="">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="footerTitle" href="">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="footerTitle" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" footerRight">
            <div className="row">
              <div className="col-7">
                <span className="footerText">Enter Your Email</span>
              </div>
              <div className="col-5">
                <span className="footerText">Subscribe</span>
              </div>
              <div className="col-12">
                <input
                  name=""
                  placeholder="Email"
                  className="form-control"
                  id="email"
                ></input>
              </div>
              <div className="col-12">
                <div className="socialMedia mt-2">
                  <div className="facebook ms-2">
                    <FacebookOutlined />
                  </div>
                  <div className="twitter ms-2">
                    <Twitter />
                  </div>
                  <div className="youtube ms-2">
                    <YouTube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
