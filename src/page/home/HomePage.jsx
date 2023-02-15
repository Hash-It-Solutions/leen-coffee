import React from "react"
import HeroSection from "../../containers/heroSection/HeroSection"
import Footer from "../../containers/footer/Footer"
import "./HomePage.css"
import About from "../../containers/about/About"
import History from "../../containers/history/History"
import Menu from "../../containers/menu/Menu"
import Popularproducts from "../../containers/popularProducts/Popularproducts"
import Review from "../../containers/review/Review"
import Blog from "../../containers/blog/Blog"

const HomePage = () => {
  return (
    <>
      <div className="homePageWrapper">
        <HeroSection />
        <About />
        <History />
        <Menu />
        <Popularproducts />
        <Review />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
