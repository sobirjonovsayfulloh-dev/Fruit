import React from "react";
import "./ProductCards.css";

const data = [
  {
    name: "Parsely",
    price: "$4.99 / kg",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
  },
  {
    name: "Banana",
    price: "$7.99 / kg",
    img: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8"
  },
  {
    name: "Bell Papper",
    price: "$7.99 / kg",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
  },
  {
    name: "Potatoes",
    price: "$7.99 / kg",
    img: "https://images.unsplash.com/photo-1582515073490-dc6c8a5a5c5f"
  }
];

const ProductCards = () => {
  return (
    <div className="products">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="img-box">
            <img src={item.img} alt={item.name} />
            <span className="badge">Vegetable</span>
          </div>

          <div className="content">
            <h3>{item.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>

            <div className="bottom">
              <span className="price">{item.price}</span>
              <button className="btn">🛒 Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;