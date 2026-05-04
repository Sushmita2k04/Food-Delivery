import Navbar from "../components/Navbar";
import FoodItems from "../components/FoodItems";
import Categories from "../Category";
import "../App.css"

function Home() {
    return (
        <div className="bg-dark text-light min-vh-100">

            <Navbar />

           <div className="MenuBar">
    
                {Categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className="category-card">
                            {/* ✅ ICON (Correct way) */}
                            <Icon size={30} />

                            <p style={{ marginTop: "5px", fontSize: "14px" }}>
                                {item.name}
                            </p>
                        </div>
                    );
                })}

            </div>

            <FoodItems />

        </div>
    );
}

export default Home;