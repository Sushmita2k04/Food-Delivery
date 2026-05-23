import Navbar from "../components/Navbar";
import FoodItems from "../components/FoodItems";
import Categories from "../Category";
import "./Home.css";

function Home() {
    return (
        <div className="Main-body">

            <Navbar />

           <div className="MenuBar">
    
                {Categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className="category-card">
                            {/* ✅ ICON (Correct way) */}
                            <Icon size={30} color="crimson" />

                            <p className="Items-name">
                                {item.name}
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