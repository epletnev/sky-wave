import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.scss";

function HomePageCarousel() {
  return (
    <div className="App">
      <div className="carousel">
        <Carousel
          autoPlay
          interval="2000"
          infiniteLoop
          showThumbs={false}
          swipeable={false}
          animationHandler="fade"
          showStatus={false}
          stopOnHover={false}
        >
          <div>
            <img
              src="assets/images/carousel/3.jpg"
              alt="First food image background"
            />
          </div>
          <div>
            <img
              src="assets/images/carousel/2.jpg"
              alt="Second food image background"
            />
          </div>
          <div>
            <img
              src="assets/images/carousel/1.jpg"
              alt="Third food image background"
            />
          </div>
        </Carousel>
      </div>
      <div className="carousel-title-description">
        <h1>Welcome to SkyWave Restaurant</h1>
        <h3>HEALTHY, AUTHENTIC & TASTY FOOD</h3>
      </div>
    </div>
  );
}

export default HomePageCarousel;
