import React, { useEffect, useState } from "react";
import "./FoodItems.css";

function FoodItems({ addToCart }) {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/restaurants")
      .then(res => res.json())
      .then(data => setItems(data.restaurants))
      .catch(err => console.error(err));

  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="food-container">

      <div className="food-grid">

        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="food-card"
          >

            <img
              src={item.image}
              alt={item.name}
              className="food-image"
            />

            <div className="food-content">

              <p className="food-name">
                {item.name}
              </p>

              <p className="food-rating">
                ⭐ {item.avgRating}
                {item.deliveryTime && ` • ${item.deliveryTime}`}
              </p>

              <p className="food-cuisines">
                {item.cuisines.join(", ")}
              </p>

              <p className="food-location">
                {item.areaName}
              </p>

              <p className="food-price">
                ₹{item.costForTwo}
              </p>

              <button
                onClick={() => addToCart && addToCart(item)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default FoodItems;