import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import FeedBackModal from "../feedBackModal/FeedBackModal";
import "./Reviews.scss";

function Reviews({ reviews }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="reviews-container">
      <section className="review-section">
        <p>Reviews</p>
        <hr className="redLine" />
        <hr className="thickGreyLine" />
        <div className="reviews-title">
          <p>Leave A Review</p>
          <button onClick={() => setIsOpen(true)} className="pencil-icon">
            <FaPencilAlt />
          </button>
        </div>
        <hr className="thinGreyLine" />
        {reviews &&
          reviews.map((user) => (
            <div className="reviews" key={user.name}>
              <img
                src="/assets/images/avatars/avatar-1.png"
                alt="avatar"
                width="50"
                height="50"
              />
              <ul>
                <li className="name">{user.name}</li>
                <li className="date">
                  {new Date(user.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </li>
                <li className="message">{user.message}</li>
              </ul>
            </div>
          ))}
      </section>
      <FeedBackModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Reviews;
