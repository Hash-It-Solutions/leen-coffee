import React from "react"
import MenuItem from "../../components/menu/MenuItem"
import "./Menu.css"
const Menu = () => {
  return (
    <>
      <div className="menuWrapper">
        <img src="/images/menuCup.png" alt="" className="menuCup" />
        <div className="menuContentWrapper">
          <div className="row">
            <div className="col-6 menuHead text-center offset-3 mb-5">
              <p className="yellowHead">MENU</p>
              <h1 className="headingText">CAFENA POPULAR MENU</h1>
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
            <div className="col-md-6 ">
              <MenuItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
