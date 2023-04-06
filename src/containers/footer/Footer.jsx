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
import { Link } from "react-router-dom"
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
                <span className="footerText">+966 557694858</span>
              </div>
              <div className="footerAddress col-md-6 col-12">
                <div className="phoneIcon">
                  <LocationOnOutlined />
                </div>
                <span className="footerTitle">ADDRESS:</span>
                <span className="footerText">
                  LEEN COFFEE PVT LIMITED 44/186A, KN BUILDING, OPP COOPERATIVE
                  BANK,PATTARKULLAM,NERUKARA P.0 MANJERI,Malappuram,Kerala,India
                  676122
                </span>
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
                  <a
                    href={
                      "https://www.facebook.com/profile.php?id=100089564019054&mibextid=ZbWKwL"
                    }
                    className="link"
                  >
                    <div className="facebook ms-2">
                      <img src="https://img.icons8.com/color/48/null/facebook-new.png" />
                    </div>
                  </a>
                  <a
                    href={
                      "https://twitter.com/LeenCoffee?t=AWFuhrldcW-gOaY4A_U-Zg&s=08"
                    }
                    className="link"
                  >
                    <div className="twitter ms-2">
                      <img src="https://img.icons8.com/color/48/null/twitter--v1.png" />
                    </div>
                  </a>
                  <a
                    href={
                      "https://www.tiktok.com/@leencoffeesa?_t=8bF259IpMKl&_r=1"
                    }
                    className="link"
                  >
                    <div className="youtube ms-2">
                      <img src="https://img.icons8.com/color/48/null/tiktok--v1.png" />
                    </div>
                  </a>
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
