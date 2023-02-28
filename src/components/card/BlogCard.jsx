import React from "react"
import "./BlogCard.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
const BlogCard = () => {
  return (
    <>
      <div className="col-md-4 col-12 mb-3">
        <Card style={{ maxWidth: "20rem" }}>
          <Card.Img variant="top" src="/images/blog1.png" />
          <Card.Body className="blodBody">
            <Card.Text>BY: RASALINA\LEE\23.01.2017</Card.Text>
            <Card.Title>Build A Cool Morning With Cafena Coffee</Card.Title>
            <Card.Text>READ MORE</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default BlogCard
