import React from "react";
import "./Header.scss";

function Header(props) {
  const { backgroundImage, title, description } = props;
  return (
    <div className="header-container">
      <img
        className="background-image"
        src={backgroundImage}
        alt="Background image"
      />
      <div className="title-description">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Header;
