import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";

// import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jpg";
import './carousel.styles.scss';

const CarouselSlider = ({carouselHeight}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imageArray = [slider2, slider4, slider5];
  const carouselImageHeight = carouselHeight;

  return (
    <div>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        indicators={true}
        interval={4000}
        controls={false}
      >
        {imageArray.map((img) => (
          <Carousel.Item>
            <div
              className="d-block w-100"
              style={{
                height: carouselImageHeight,
                backgroundImage: `url('${img}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backgroundBlendMode: "overlay",
              }}
            />
            <Carousel.Caption
              className='carousel-caption-container'
              
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h1 class='carousel-caption-section'>Shop with ease, Product Variety, <br/> Secure Payment</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
