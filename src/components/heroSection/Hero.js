import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css";

const Hero = () => {
  return (
    <Carousel className="Carousel w-100">
      <Carousel.Item interval={1000} className="CarouselItem">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-35611.appspot.com/o/06032019-D-KCP-TopBanner-AllKurtas.webp?alt=media&token=ecf01837-6a53-4888-883e-630857ad4865"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500} className="CarouselItem">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-35611.appspot.com/o/11052023-UHP-AJIOMania-D-TopBanner.gif?alt=media&token=dc2e6e00-f6f8-441d-9063-e4bbfff94b74"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="CarouselItem">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-35611.appspot.com/o/18052023-UHP-D-Top-P4-AvaasaSiyaahi-Min50.avif?alt=media&token=fad462be-6020-467b-93b7-b10c3730619a"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
