import React from "react";
import LazyLoad from "react-lazyload";
import { BsTagFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiScales3Fill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";
import "./MenuDetails.scss";

export default ({ menuDetails }) => {
  return (
    <div className="menuDetails-container">
      <LazyLoad height={200}>
        {menuDetails.image && (
          <img
            src={`/${menuDetails.image.small}`}
            alt="Menu item"
            width="400"
            height="400"
          />
        )}
      </LazyLoad>
      <section className="card-description">
        <h5>{menuDetails.name}</h5>
        <p className="price">£ {menuDetails.price}</p>
        <ul className="categories">
          <li>
            <BsTagFill className="icons" />
            Category: {menuDetails.categoryId}
          </li>
          <li>
            <BsCheckCircleFill className="icons" />
            Availability: {menuDetails.availibilityCount}
          </li>
          <li>
            <RiScales3Fill className="icons" />
            Weight: {menuDetails.weight}
          </li>
          <li>
            <FaLeaf className="icons" />
            Vegetarian: {menuDetails.isVegetarian ? "Yes" : "No"}
          </li>
        </ul>
        <h6>Ingredients</h6>
        <p>{menuDetails.description}</p>
        <hr />
        <p>What are you waiting for?</p>
        <ul>
          <li>Come and Taste the Food at our Restaurant</li>
          <li>Don't like our food. Share your feedback! Love to listen!</li>
          <li>Visit us today!</li>
        </ul>
      </section>
    </div>
  );
};
