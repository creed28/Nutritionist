import { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";

const useFoodsContext = () => {
  const context = useContext(FoodContext);
  
  if (context === null) {
    throw new Error("useFoodsContext must be used within an FoodProvider");
  }

  return context;
}

export default useFoodsContext;
