import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/banner.jpg";

function HomePageCarousel() {
  const numberOfCarousel = [1, 2, 3, 4];
  return (
    <Container >
      <Carousel>
        {numberOfCarousel.map((carousel, index) => (
          <Carousel.Item interval={2000} key={index}>
            <img
              width="100%"
              height={400}
              className=""
              src={banner}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aurangabad Tours and Travels</h3>
              <p>We will make your journry unforgatable </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HomePageCarousel;
