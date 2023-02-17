import React from "react";
import { Link } from "react-router-dom";
import { BsTagFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiScales3Fill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";
import "./Card.scss";

function MenuCard({ item }) {
  return (
    <div className="card-container" key={item.id}>
      <Link to={`/menu/${item.id}`}>
        <img src={item.image.small} alt="Menu item" />
        <section className="card-description">
          <h6>{item.name}</h6>
          <p>{item.description}</p>
          <ul>
            <li>
              <BsTagFill className="icons" />
              Category: {item.categoryId}
            </li>
            <li>
              <BsCheckCircleFill className="icons" />
              Availability: {item.availibilityCount}
            </li>
            <li>
              <RiScales3Fill className="icons" />
              Weight: {item.weight}
            </li>
            <li>
              <FaLeaf className="icons" />
              Vegetarian: {item.isVegetarian ? "Yes" : "No"}
            </li>
          </ul>
          <hr />
          <p className="price">£ {item.price}</p>
        </section>
      </Link>
    </div>
  );
}

export default MenuCard;
