import { Food as FoodModel } from "../../models/food";
import useFoodsContext from "../../hooks/useFoodsContext";
import Food from "../Food";

const SearchResultList = () => {
  const { searchResults } = useFoodsContext();

  return (
    <div className="w-[30%] bg-white flex flex-col rounded-lg mt-1 max-h-[300px] 
      overflow-y-auto">
      {searchResults.map((food: FoodModel, index) => (
        <Food food={food} key={index} />
      ))}
    </div>
  );
}

export default SearchResultList;
