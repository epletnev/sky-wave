import React from "react";
import HomePageCarousel from "../../component/carousel/Carousel";
import TabMenu from "../../component/tabMenu/TabMenu";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="App">
      <HomePageCarousel />
      <div className="menu-container">
        <h4 className="menu">Menu</h4>
        <hr className="line" />
        <p className="quote">
          IF MORE OF US VALUED FOOD AND CHEER AND SONG ABOVE HOARDED GOLD, IT
          WOULD BE A MERRIER WORLD
        </p>
        <TabMenu />
      </div>
    </div>
  );
}

export default HomePage;
