import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAbout } from "../../redux/about/aboutAction";
import "./About.scss";

function About() {
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.about.about);

  useEffect(() => {
    dispatch(getAbout());
  }, []);

  return (
    <div className="about-container">
      <article>
        <section>
          <h2 className="history">The History</h2>
          <p>{aboutData.history}</p>
        </section>
        <section>
          <div className="image-left">
            <img src="assets/images/others/about-1.jpg" alt="Our story image" />
            <div className="info">
              <h4>Our Story</h4>
              <p>{aboutData.ourStory}</p>
            </div>
          </div>
        </section>
        <section>
          <div className="image-right">
            <img
              src="assets/images/others/about-2.jpg"
              alt="Since 1987 image"
            />
            <div className="info">
              <h4>Since 1987</h4>
              <p>{aboutData.since}</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default About;
