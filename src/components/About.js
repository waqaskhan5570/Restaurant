import React from "react";
import ramen from "../assets/images/ramen.jpg";
import pizza from "../assets/images/pizza.jpg";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="about-section wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
              <div className="card border-0">
                <img src={ramen} alt="aboutImg" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 text-sec">
              <h2>
                We pride ourselves on making fppd from the best ingredients/
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore, pariatur obcaecati iusto nulla magni aspernatur
                voluptate quam ven.
              </p>
              <button className="main-btn mt-4">Learn More</button>
            </div>
          </div>
        </div>
        <div className="container food-type mt-5">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
              <h2>
                We make everything by hand with the best possible ingredients by
                the best Chef.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, quasi?
              </p>
              <ul className="list-unstyled py-3">
                <li>
                  <FaCheck style={{ color: "#a82c48", marginRight: "5px" }} />
                  Lorem, ipsum dolor.
                </li>
                <li>
                  <FaCheck style={{ color: "#a82c48", marginRight: "5px" }} />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <FaCheck style={{ color: "#a82c48", marginRight: "5px" }} />
                  Lorem ipsum dolor sit.
                </li>
              </ul>
              <button className="main-btn mt-4">Learn More</button>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card border-0">
                <img src={pizza} alt="pizzaImg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
