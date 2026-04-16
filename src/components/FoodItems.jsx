import React from "react";
import FoodData from "../FoodData";

function FoodItems() {
  return (
    <div className="container mt-4">

      <div className="row">

        {FoodData.map((item) => (
          <div
            key={item.id}
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
          >
            <div
              className="bg-light text-dark shadow-sm rounded p-2 h-100 d-flex flex-column align-items-center"
              style={{ cursor: "pointer" }}
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid rounded"
                style={{
                  height: "100px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              {/* Name */}
              <p className="mt-2 mb-0 fw-semibold text-center small">
                {item.name}
              </p>

              {/* Price */}
              <p className="mb-0 text-success fw-bold">
                ₹{item.price}
              </p>
              <button className="btn btn-danger">
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