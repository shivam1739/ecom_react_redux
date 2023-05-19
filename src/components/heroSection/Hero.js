import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css";

const Hero = () => {
  return (
    <Carousel className="Carousel">
      <Carousel.Item interval={1000} className="CarouselItem">
        <img
          className="d-block w-100"
          src="https://picsum.photos/200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className="CarouselItem">
        <img
          className="d-block w-100"
          src="https://picsum.photos/200"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="CarouselItem">
        <img
          className="d-block w-100"
          src="http://localhost:8000/utils\\Images\\1684425001107.JPG"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
