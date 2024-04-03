import { Food as FoodModel } from "../../models/food";
import useFoodsContext from "../../hooks/useFoodsContext";
import SearchResultItem from "./SearchResultItem";

const SearchResultList = () => {
  const { searchResults } = useFoodsContext();

  return (
    <div className="w-[35%] bg-white flex flex-col rounded-lg mt-1 max-h-[145px] absolute top-10">
      {searchResults.map((food: FoodModel, index) => (
        <SearchResultItem food={food} key={index} />
      ))}
    </div>
  );
}

export default SearchResultList;
