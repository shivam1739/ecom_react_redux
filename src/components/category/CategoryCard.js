import React from "react";
import "./categoryCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "../button/Button";

// import { Button } from "bootstrap";

const CategoryCard = (props) => {
  return (
    <Container className={"bg-dark-subtle"}>
      <Row className="">
        {props.categories?.map((category, index) => (
          <Col
            key={index}
            sm={4}
            className="cat-card position-relative d-flex  justify-content-center align-items-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="img-fluid d-flex justify-content-center align-items-center rounded position-arelative"
            />
            <div className="card-name none">
              <Button
                props={{
                  name: category.name,
                  style: {
                    width: "30%",
                    height: "2.5rem",
                    backgroundColor: "#E0EFF6",
                    color: " #07484A",
                    fill: "solid",
                    fontWeight: "bolder",
                    borderRadius: "5px",
                    border: "none",
                  },
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryCard;
