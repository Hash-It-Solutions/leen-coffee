import React from "react"
import { useInView } from "react-intersection-observer"
import MenuItem from "../../components/menu/MenuItem"
import { coldDrinks, sweets } from "../../data/MenuList"
import "./Sweets.css"
const Sweets = () => {
  const { ref: myRef, inView: cupIsVisible } = useInView()
  const { ref: menuRef, inView: menuItemsVisible } = useInView()
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
              <h1 ref={myRef} className="headingText">
                Sweets
              </h1>
            </div>
            <div
              ref={menuRef}
              className={`menuItems ${
                menuItemsVisible ? `animateMenu` : `staticMenu`
              }`}
            >
              <div className="row mb-5">
                {sweets.map((item) => {
                  return (
                    <div key={item[0]} className="col-md-6 ">
                      <div className="menuItem">
                        <h5 className="menuItemName">{item[0]}</h5>
                        <div className="menuPrice">
                          <span className="menuPrice">{item[1]} SAR</span>
                        </div>
                        <img
                          src={`/images/${item[2]}`}
                          alt=""
                          className="sweets"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sweets
