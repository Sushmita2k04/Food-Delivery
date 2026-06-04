import React, { useEffect, useState } from "react";
import "./FoodItems.css";
import { MdOutlineLocationOn } from "react-icons/md";


function FoodItems({ addToCart }) {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://food-delivery-api.onrender.com/api/restaurants")
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
              className="food-image"
              src={item.image}
              alt={item.name}

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
              <div className="location-container">

                <MdOutlineLocationOn className="location-icon" />

                <p className="food-location">
                  {item.areaName}
                </p>

              </div>

              <div className="price-container">
                <p className="food-price">
                  ₹{item.costForTwo}
                </p>s
                <p className="costForTwo"> ----{">"} Cost For two</p>
              </div>

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