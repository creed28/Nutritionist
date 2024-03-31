import Food from "./Food";
import { Food as FoodModel } from "../models/food";

interface FoodListProps {
  foods: FoodModel[],
  handleUpdate: (food: FoodModel) => void,
  handleDelete: (food: FoodModel) => void
}

const FoodList = ({ foods, handleUpdate, handleDelete }: FoodListProps) => {
  return (
    <section className="flex flex-col items-center gap-y-1 mt-2">
      {foods.map((food) => (
        <Food 
          food={food} 
          key={food._id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default FoodList;
