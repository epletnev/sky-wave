import React from "react";
import Header from "../../component/header/Header";
import About from "../../component/about/About";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="App">
      <Header
        backgroundImage="assets/images/others/about.jpg"
        title="About Us"
        description="RESTORING AUTHENTICITY TO FOOD FROM THE GROUND UP IS THE MISSION THAT DRIVES US. RESTAURATION IS THE REALIZATION OF A DREAM"
      />
      <About />
    </div>
  );
}

export default AboutUs;
