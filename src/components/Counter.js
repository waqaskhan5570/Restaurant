import React, { useEffect } from "react";

function Counter() {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }
  useEffect(() => {
    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 1500, 3000);
    counter("count3", 0, 2200, 3000);
    counter("count4", 0, 267, 3000);
  });

  return (
    <section id="counter">
      <section className="counter-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count1"></span>+
              </h2>
              <p>SAVINGS</p>
            </div>

            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count2"></span>+
              </h2>
              <p>PHOTOS</p>
            </div>

            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count3"></span>+
              </h2>
              <p>CUSTOMERS</p>
            </div>

            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count4"></span>+
              </h2>
              <p>GLOBES</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Counter;
