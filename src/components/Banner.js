import React from "react";
import { FaShoppingBasket, FaAngleRight } from "react-icons/fa";

function Banner() {
  return (
    <section id="home">
      <div className="container-fluid px-0 top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1>Good Food choices are money spent good.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                voluptatibus omnis quam ab.
              </p>
              <div className="mt-4">
                <button className="main-btn">
                  Order Now <FaShoppingBasket />
                </button>
                <button className="white-btn ms-lg-4 mt-lg-0 mt-4 ms-2">
                  Order Now <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
