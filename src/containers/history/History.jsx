import React from "react"
import "./History.css"
const History = () => {
  return (
    <>
      <div className="historyWrapper">
        <div className="container historyContainer">
          <div className="row">
            <div className="col-md-7 p-2">
              <img src="/images/history.png" className="historyImage" alt="" />
            </div>
            <div className="col-md-5 p-2 my-auto">
              <div className="historyContent">
                <p className="yellowHead">Our History</p>
                <h1 className="headingText">CREATE A NEW STORY WITH US</h1>
                <p className="historyDescription">
                  Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod
                  nisl suscipit ligula volutpat, a feugiat urna maximus. Cras
                  massa nibhtincidunt.
                </p>
                <p className="historyDescription">
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                  mmodo mattis. Aliquam erat volutpat.
                </p>
                <p className="brownButton">TESTY COFFEE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
