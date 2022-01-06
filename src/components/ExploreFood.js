import React, { useState } from "react";
import FoodCard from "./FoodCard";
import foodItems from "../assets/foodItems.json";

function ExploreFood() {
  let [items, setItems] = useState(foodItems);
  return (
    <section id="explore-food">
      <div className="explore-food wrapper">
        <div className="container">
          <div div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center">
                <h2>Explore Our Foods</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolor reiciendis nobis praesentium dicta
                  reprehenderit corrupti, eum magnam illum quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <FoodCard items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreFood;
