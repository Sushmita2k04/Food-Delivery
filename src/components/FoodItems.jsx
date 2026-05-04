import React, { useEffect, useState } from "react";

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
    <div style={{ padding: "20px" }}>

     

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>

        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover"
              }}
            />

            {/* Content */}
            <div style={{ padding: "10px" }}>

              <p style={{ fontWeight: "bold", margin: "5px 0" }}>
                {item.name}
              </p>

              <p style={{ fontSize: "14px", color: "#555", margin: "3px 0" }}>
                ⭐ {item.avgRating}
                {item.deliveryTime && ` • ${item.deliveryTime}`}
              </p>

              <p style={{ fontSize: "13px", color: "#777", margin: "3px 0" }}>
                {item.cuisines.join(", ")}
              </p>

              <p style={{ fontSize: "13px", color: "#777", margin: "3px 0" }}>
                {item.areaName}
              </p>

              <p style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}>
                ₹{item.costForTwo}
              </p>

              <button
                onClick={() => addToCart && addToCart(item)}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
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