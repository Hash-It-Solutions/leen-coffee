import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import MenuItem from "../../components/menu/MenuItem"
import "./Menu.css"
const Menu = () => {
  const { ref: myRef, inView: cupIsVisible } = useInView()
  const { ref: menuRef, inView: menuItemsVisible } = useInView()
  // const myRef = useRef()
  // const menuRef = useRef()
  // const [cupIsVisible, setCupIsVisible] = useState()
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setCupIsVisible(entry.isIntersecting)
  //     console.log("entry", entry)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  return (
    <>
      <div id="menu" className="menuWrapper">
        <img
          src="/images/menuCup.png"
          alt=""
          className={`menuCup${cupIsVisible ? ` animateCup` : ``}`}
        />
        <div className="menuContentWrapper">
          <div className="row">
            <div className="col-6 menuHead text-center offset-3 mb-5">
              <p ref={myRef} className="yellowHead">
                MENU
              </p>
              <h1 className="headingText">CAFENA POPULAR MENU</h1>
            </div>
            <div
              ref={menuRef}
              className={`menuItems ${
                menuItemsVisible ? `animateMenu` : `staticMenu`
              }`}
            >
              <div className="row">
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"AMERICANO ROSTED GRED"}
                    imgName={"cup3.png"}
                    price={"12"}
                  />
                </div>
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"JAPANIS COFFEE GRED"}
                    imgName={"cup4.png"}
                    price={"12"}
                  />
                </div>
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"VIRGIN COFFEE GRED"}
                    imgName={"cupCircle.jpg"}
                    price={"12"}
                  />
                </div>
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"JAPANIS ROSTED GRED"}
                    imgName={"cup3.png"}
                    price={"12"}
                  />
                </div>
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"CAFE AU LAIT COFFEE"}
                    imgName={"cup2.png"}
                    price={"12"}
                  />
                </div>
                <div className="col-md-6 ">
                  <MenuItem
                    itemName={"EXPRESSO RISTRETTO"}
                    imgName={"cupCircle.jpg"}
                    price={"12"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
