import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/home/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
