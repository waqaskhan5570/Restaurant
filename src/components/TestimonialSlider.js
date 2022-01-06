import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

function TestimonialSlider() {
  let content = [
    {
      name: "waqas",
      desc: "lor sd fs sdh fasdj fasdk askd askd asd adf kjsc k asld",
      image: "./images/men.jpg",
    },
    {
      name: "ssad",
      desc: "lor sd fs sdh fasdj fasdk askd askd asd adf kjsc k asld",
      image: "./images/women.jpg",
    },
  ];
  return (
    <section id="Testimonial">
      <div className="testimonial-section">
        <div className="container text-center">
          <div className="text-center pb-4">
            <h2>Testimonial </h2>
            {/* Slider */}
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <Slider>
                  {content.map((item, index) => (
                    <div className="slider-item">
                      <img src={item.image} alt="personImg" />
                      <p>{item.desc}</p>
                      <h5>{item.name}</h5>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Slider */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
