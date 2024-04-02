import Food from "./Food";
import { Food as FoodModel } from "../models/food";
import useFoodsContext from "../hooks/useFoodsContext";

const FoodList = () => {
  const { foods } = useFoodsContext();

  return (
    <section className="flex flex-col items-center gap-y-1 mt-2">
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
