import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/home/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import AboutPage from "./page/about/AboutPage"
import ContactPage from "./page/contact/ContactPage"
import MenuPage from "./page/menu/MenuPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
