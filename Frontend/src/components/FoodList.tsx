import Food from "./Food";
import { Food as FoodModel } from "../models/food";
import useFoodsContext from "../hooks/useFoodsContext";

const FoodList = () => {
  const { foods } = useFoodsContext();

  return (
    <section 
      style={{
        overflowY: "scroll", 
        overflow: "auto", 
        overflowX: "hidden", 
        height: "fit-content", 
        maxHeight: "400px", 
        display: "flex", 
        flexDirection: "column",
        gap: "4px",
        scrollbarColor: "#a1a3a0 transparent",
        scrollbarWidth: "thin"
      }}>
      {foods.map((food: FoodModel) => (
        <Food 
          food={food} 
          key={food._id}
        />
      ))}
    </section>
  );
}

export default FoodList;
