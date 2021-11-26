import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../theme/variables.scss";
import "./Navbar.scss";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  return (
    <nav
      style={{ position: "sticky" }}
      className={
        location.pathname === "/menu-detail"
          ? sidebar
            ? "navbar  navbar-light sticky-top  nav-menu active scroll"
            : "navbar  navbar-light sticky-top scroll"
          : show
          ? sidebar
            ? "navbar  navbar-light sticky-top  nav-menu active scroll"
            : "navbar  navbar-light sticky-top scroll"
          : sidebar
          ? "navbar  navbar-light sticky-top  nav-menu active noscroll"
          : "navbar   sticky-top noscroll"
      }
    >
      <Link to="#" className="menu-bars">
        {!sidebar ? (
          <FaIcons.FaBars style={{ color: "#c62828" }} onClick={showSidebar} />
        ) : (
          <BsX onClick={showSidebar} className="nav-close" />
        )}
      </Link>

      {sidebar ? (
        ""
      ) : (
        <a href="/">
          <img src="/assets/SkyWave-logo-D.png" alt="logo" />
        </a>
      )}
      <ul
        className={
          sidebar ? "nav flex-column nav-i" : "nav justify-content-end"
        }
      >
        <li className="nav-item">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link link" : "nav-link"}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/menu"
            className={
              location.pathname === "/menu" ? "nav-link link" : "nav-link"
            }
          >
            MENU
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about-us"
            className={
              location.pathname === "/about-us" ? "nav-link link" : "nav-link"
            }
          >
            ABOUT US
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact-us"
            className={
              location.pathname === "/contact-us" ? "nav-link link" : "nav-link"
            }
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
