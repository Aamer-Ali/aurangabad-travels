import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/banner.jpg";
import HomePageCarousel from "../common/HomePageCarousel";
import HomePageContent from "../common/HomePageContent";

function Home() {
  return (
    <React.Fragment>
      <HomePageCarousel />
      <HomePageContent
        imageToLeft={true}
        content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima sapiente at nobis optio laudantium et, quaerat temporibus
          maxime beatae distinctio exercitationem eligendi corporis debitis?
          Sunt nihil placeat inventore soluta? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Reprehenderit doloremque, omnis magnam
          consequuntur ut, ab, asperiores facilis quae enim dignissimos
          laboriosam ipsa iure non architecto cumque. Rem ea culpa blanditiis,
          fugiat, molestiae voluptate ipsam cupiditate, unde et pariatur
          sapiente! Doloremque aliquam optio, corporis numquam nulla placeat quo
          tenetur rerum autem."
      />
      <HomePageContent
        imageToLeft={false}
        content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima sapiente at nobis optio laudantium et, quaerat temporibus
          maxime beatae distinctio exercitationem eligendi corporis debitis?
          Sunt nihil placeat inventore soluta? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Reprehenderit doloremque, omnis magnam
          consequuntur ut, ab, asperiores facilis quae enim dignissimos
          laboriosam ipsa iure non architecto cumque. Rem ea culpa blanditiis,
          fugiat, molestiae voluptate ipsam cupiditate, unde et pariatur
          sapiente! Doloremque aliquam optio, corporis numquam nulla placeat quo
          tenetur rerum autem."
      />
      <HomePageContent
        imageToLeft={true}
        content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima sapiente at nobis optio laudantium et, quaerat temporibus
          maxime beatae distinctio exercitationem eligendi corporis debitis?
          Sunt nihil placeat inventore soluta? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Reprehenderit doloremque, omnis magnam
          consequuntur ut, ab, asperiores facilis quae enim dignissimos
          laboriosam ipsa iure non architecto cumque. Rem ea culpa blanditiis,
          fugiat, molestiae voluptate ipsam cupiditate, unde et pariatur
          sapiente! Doloremque aliquam optio, corporis numquam nulla placeat quo
          tenetur rerum autem."
      />
      <HomePageContent
        imageToLeft={false}
        content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima sapiente at nobis optio laudantium et, quaerat temporibus
          maxime beatae distinctio exercitationem eligendi corporis debitis?
          Sunt nihil placeat inventore soluta? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Reprehenderit doloremque, omnis magnam
          consequuntur ut, ab, asperiores facilis quae enim dignissimos
          laboriosam ipsa iure non architecto cumque. Rem ea culpa blanditiis,
          fugiat, molestiae voluptate ipsam cupiditate, unde et pariatur
          sapiente! Doloremque aliquam optio, corporis numquam nulla placeat quo
          tenetur rerum autem."
      />
    </React.Fragment>
  );
}

export default Home;
