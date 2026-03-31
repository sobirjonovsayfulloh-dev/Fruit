import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container">
      {/* Card 1 */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
          alt="apples"
        />
        <div className="card-info green">
          <p>Fresh Apples</p>
          <h3>20% OFF</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
          alt="strawberry"
        />
        <div className="card-info gray">
          <p>Tasty Fruits</p>
          <h3>Free delivery</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1582515073490-dc6c8a5a5c5f"
          alt="broccoli"
        />
        <div className="card-info orange">
          <p>Exotic Vegetable</p>
          <h3>Discount 30$</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;