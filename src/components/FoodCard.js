import React from "react";

function FoodCard(props) {
  return (
    <div className="row pt-5">
      {props.items.map((item) => (
        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="card">
            <img src={item.image} alt="item-img" className="img-fluid" />
            <div className="pt-3">
              <h4>{item.title}</h4>
              <p>{item.time}</p>
              <span>
                {item.priceNew} <del>{item.priceOriginal}</del>{" "}
              </span>
              <button className="mt-4 main-btn">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;

// {/* <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
//       <div className="card">
//         <img src={hamburger} alt="hamburger" className="img-fluid" />
//         <div className="pt-3">
//           <h4>Hamburger</h4>
//           <p>Time: 15-20minutes | Serves: 1</p>
//           <span>
//             $12.50 <del>$15.80</del>
//           </span>
//           <button className="mt-4 main-btn">Order Now</button>
//         </div>
//       </div>
//     </div> */}
