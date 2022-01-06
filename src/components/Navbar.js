import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
// import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";
export default function Navbar() {
  let [navbar, setNavbar] = useState(false);

  let changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  // hide navbar in mob on click

  return (
    <header>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg  navigation-wrap scroll-on"
            : " navbar navbar-expand-lg  navigation-wrap"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} height="80px" width="100%" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaStream />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <a
                className="nav-link nav-item active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
              <a className="nav-link nav-item" href="#about">
                About Us
              </a>
              <a className="nav-link nav-item" href="#exploreFood">
                Explore Food
              </a>
              <a className="nav-link nav-item" href="#reviews">
                Reviews
              </a>

              <a className="nav-link nav-item" href="#faq">
                FAQ
              </a>

              <button className="main-btn">03139202360</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
