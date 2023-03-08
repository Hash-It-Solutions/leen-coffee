import React, { useEffect, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../containers/footer/Footer"
import emailjs from "@emailjs/browser"
import "./ContactPage.css"
import { toast, ToastContainer } from "react-toastify"
import Chat from "../../components/whatsapp/Chat"
const ContactPage = () => {
  const form = useRef()

  useEffect(() => {
    console.log("serviceid", import.meta.env.VITE_MAILJS_SERVICEID)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_MAILJS_SERVICEID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_MAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success("Message has been sent")
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
          toast.error("Something went Wrong!")
        }
      )
  }
  return (
    <>
      <ToastContainer position="top-right" />
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
                  <div className="col-sm-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactMail.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="contactHead">CONTACT US</h3>
                        <p className="mailText">
                          Israfilsupol836@gmail.com 088 - 01869018907
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactLoc.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="contactHead">OUR LOCATION</h3>
                        <p className="mailText">
                          Hera Road 2344-78 Australia 897- South Side Melbon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contactItem">
                      <img
                        src="/images/contactTime.jpg"
                        alt=""
                        className="contactIcon"
                      />
                      <div className="contactText">
                        <h3 className="contactHead">OPENING HOURS</h3>
                        <p className="mailText">
                          Mon - Sat (8:00 - 6:00) Sunday - Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 col-12 ps-2">
                    <input
                      className="form-control contactInput"
                      placeholder="Your Name:"
                      type="text"
                      name="from_name"
                    />
                  </div>
                  <div className="col-12 col-md-6 ps-2">
                    <input
                      className="form-control contactInput"
                      placeholder="Your Mail:"
                      type="text"
                      name="user_email"
                    />
                  </div>
                  <div className="col-12 ps-2">
                    <input
                      className="form-control contactInput"
                      placeholder="Enter Your Subject:"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="col-12 ps-2">
                    <input
                      className="form-control contactInput"
                      placeholder="Your Message:"
                      type="text"
                      name="message"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      id="brownButton"
                      className="brownButton btn  contactInput mx-auto"
                      type="submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", marginTop: "50px", padding: "1em" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165450.61165537397!2d75.79370920151526!3d11.239175435668763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1678014042584!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
        <Chat />
      </div>
    </>
  )
}

export default ContactPage
