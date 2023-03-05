import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import BlogCard from "../../components/card/BlogCard"
import "./Blog.css"
const blogData = [
  {
    authorName: "RASALINALEE23.01.2017",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
  {
    authorName: "RASALINALEE23.01.2019",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
  {
    authorName: "RASALINALEE23.01.2017",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
  {
    authorName: "RASALINALEE23.01.2018",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
  {
    authorName: "RASALINALEE23.01.2017",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
  {
    authorName: "RASALINALEE23.01.2017",
    blogTitle: "Build A Cool Morning With Cafena Coffee",
    imgUrl: "/images/blog1.png",
  },
]
const Blog = () => {
  const [blogCount, setBlogCount] = useState(1)
  const [lastIndex, setLastIndex] = useState(-1)
  const [nextIndex, setNextIndex] = useState(3)
  const [animateCards, setAnimateCards] = useState(false)
  const [blogLength, setBlogLength] = useState(blogData.length)
  const handleNext = () => {
    setAnimateCards((prev) => !prev)
    if (blogLength <= nextIndex) {
      firstPage()
      return
    }
    setLastIndex(blogCount * 3 - 1)
    setBlogCount((prev) => prev + 1)
    setNextIndex((prev) => prev + 3)
  }
  const handlePrev = () => {
    if (lastIndex === -1) {
      return
    }
    setAnimateCards((prev) => !prev)
    setBlogCount((prev) => prev - 1)
    setLastIndex((prev) => prev - 3)
    setNextIndex((prev) => prev - 3)
  }
  const firstPage = () => {
    setBlogCount(1)
    setLastIndex(-1)
    setNextIndex(3)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="blogWrapper">
        <div className="blogContent">
          <p className="yellowHead">FROM OUR BLOG</p>
          <h1 className="headingText text-center">OUR NEWS & ARTICLES</h1>
          <div
            className={`blogs ${animateCards ? "animateCards" : "reanimate"}`}
          >
            <div className="row">
              {blogData
                .filter((item, index) => {
                  return lastIndex < index && index < nextIndex
                  // < 3 * blogCount < nextIndex
                })
                .map((item, index) => {
                  // console.log("condition=", lastIndex)
                  return (
                    <BlogCard
                      author={item.authorName}
                      title={item.blogTitle}
                      imgUrl={item.imgUrl}
                    />
                  )
                })}
            </div>
          </div>
          <div className="blogButton">
            <img
              src="/images/arrowRight.jpg"
              width="30px"
              alt=""
              className="rightBArrow arrow ms-2"
              onClick={handlePrev}
            />
            <img
              src="/images/arrow.jpg"
              width="30px"
              alt=""
              className="rightBArrow arrow ms-2"
              onClick={handleNext}
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Blog
