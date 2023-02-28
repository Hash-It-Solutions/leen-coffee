import React from "react"
import BlogCard from "../../components/card/BlogCard"
import "./Blog.css"
const Blog = () => {
  return (
    <>
      <div className="blogWrapper">
        <div className="blogContent">
          <p className="yellowHead">FROM OUR BLOG</p>
          <h1 className="headingText text-center">OUR NEWS & ARTICLES</h1>
          <div className="blogs">
            <div className="row">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
          <div className="blogButton">
            <img
              src="/images/arrowRight.jpg"
              width="30px"
              alt=""
              className="rightBArrow ms-2"
            />
            <img
              src="/images/arrow.jpg"
              width="30px"
              alt=""
              className="rightBArrow ms-2"
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Blog
