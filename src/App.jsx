import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/home/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import AboutPage from "./page/about/AboutPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
