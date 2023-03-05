import React from "react"
import "./BlogCard.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
const BlogCard = ({ author, title, imgUrl }) => {
  return (
    <>
      <div className="col-md-4 col-12 mb-3">
        <Card className="mx-auto" style={{ maxWidth: "20rem" }}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body className="blodBody">
            <Card.Text>{author}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Text>READ MORE</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default BlogCard
