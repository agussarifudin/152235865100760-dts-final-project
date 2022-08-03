import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ url }) => {
  return (
    <Carousel variant="dark">
      {url.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${item.src}`}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
