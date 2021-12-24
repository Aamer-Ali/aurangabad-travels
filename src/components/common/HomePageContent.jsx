import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/banner.jpg";

function HomePageContent({ imageToLeft, content }) {
  return (
    <Container >
      <Row m={3}>
        {imageToLeft === true ? (
          <React.Fragment>
            <Col xs={3} sm={3} md={3} lg={3} xlg={3}>
              <Image
                className="mt-4"
                width="100%"
                height={200}
                src={banner}
                alt="First slide"
                rounded
              />
            </Col>
            <Col className="align-me text-start">{content}</Col>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Col className="align-me text-start">{content}</Col>
            <Col xs={3} sm={3} md={3} lg={3} xlg={3}>
              <Image
                className="mt-4 mb-5"
                width="100%"
                height={200}
                src={banner}
                alt="First slide"
                rounded
              />
            </Col>
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
}

export default HomePageContent;
