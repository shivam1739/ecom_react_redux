import React from "react";
import "./categoryCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const CategoryCard = (props) => {
  return (
    <Container>
      <Row>
        {props.categories?.map((category, index) => (
          <Col key={index} sm={4}>
            <Image
              src={category.image}
              alt={category.name}
              className="img-fluid"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryCard;
