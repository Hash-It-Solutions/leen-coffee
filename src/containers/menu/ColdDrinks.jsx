import React from "react"
import { useInView } from "react-intersection-observer"
import MenuItem from "../../components/menu/MenuItem"
import { coldDrinks } from "../../data/MenuList"
import "./ColdDrinks.css"
const ColdDrinks = () => {
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
                Cold Drinks
              </h1>
            </div>
            <div
              ref={menuRef}
              className={`menuItems ${
                menuItemsVisible ? `animateMenu` : `staticMenu`
              }`}
            >
              <div className="row mb-5">
                {coldDrinks.map((item) => {
                  return (
                    <div key={item[0]} className="col-md-6 ">
                      <MenuItem
                        itemName={item[0]}
                        imgName={"cup4.png"}
                        price={item[1]}
                      />
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

export default ColdDrinks
