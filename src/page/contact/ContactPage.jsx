import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../containers/footer/Footer"
import "./ContactPage.css"
const ContactPage = () => {
  return (
    <>
      <div className="contactPageWrapper">
        <div className="aboutHeroContentWrapper">
          <div className="navContainer">
            <Navbar />
          </div>
          <div className="aboutHero">
            <h1 className="heroTitle">GET IN TOUCH</h1>
          </div>
        </div>
        <div className="contactFormWrapper">
          <div className="formContent">
            <div className="row">
              <div className="col-12 ps-2">
                <div className="row">
                  <div className="col-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactMail.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="headingText">MAIL</h3>
                        <p className="mailText">
                          Israfilsupol836@gmail.com 088 - 01869018907
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactLoc.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="headingText">MAIL</h3>
                        <p className="mailText">
                          Israfilsupol836@gmail.com 088 - 01869018907
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactTime.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="headingText">MAIL</h3>
                        <p className="mailText">
                          Israfilsupol836@gmail.com 088 - 01869018907
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-2">
                <input
                  className="form-control contactInput"
                  placeholder="Your Name:"
                  type="text"
                />
              </div>
              <div className="col-6 ps-2">
                <input
                  className="form-control contactInput"
                  placeholder="Your Mail:"
                  type="text"
                />
              </div>
              <div className="col-12 ps-2">
                <input
                  className="form-control contactInput"
                  placeholder="Enter Your Subject:"
                  type="text"
                />
              </div>
              <div className="col-12 ps-2">
                <input
                  className="form-control contactInput"
                  placeholder="Your Message:"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ContactPage
