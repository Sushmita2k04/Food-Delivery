import { TiThSmall } from "react-icons/ti";
import { GiFullPizza, GiChickenOven, GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { MdOutlineFreeBreakfast } from "react-icons/md";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: TiThSmall
  },
  {
    id: 2,
    name: "Chicken",
    icon: GiChickenOven
  },
  {
    id: 3,
    name: "Pizza",
    icon: GiFullPizza
  },
  {
    id: 4,
    name: "Breakfast",
    icon: MdOutlineFreeBreakfast
  },
  {
    id: 5,
    name: "Soup",
    icon: LuSoup
  },
  {
    id: 6,
    name: "Noodles",
    icon: GiNoodles
  }
];

export default Categories;