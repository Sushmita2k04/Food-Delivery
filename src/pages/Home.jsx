import React from "react";
import Categories from "../Category";
import Navbar from "../components/Navbar";
import "../App.css";
import FoodItems from "../components/FoodItems";

function Home() {
    return (
        <div className="bg-dark text-light min-vh-100">

            <Navbar />

            <div className="d-flex gap-3 mt-4 px-4 flex-nowrap ">

                {Categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="category-card text-center bg-light text-dark p-2 shadow-sm rounded d-flex flex-column align-items-center flex-fill"
                            style={{
                                cursor: "pointer",
                                minWidth: "70px"
                            }}
                        >
                            {/* Icon (responsive size) */}
                            <div className="fs-5 fs-md-4">
                                <Icon size={28} />
                            </div>

                            {/* Name (responsive text) */}
                            <p className="item-name mb-0 mt-1 small">                                {item.name}
                            </p>
                        </div>
                    );
                })}

            </div>
            <FoodItems/>

        </div>
    );
}

export default Home; 