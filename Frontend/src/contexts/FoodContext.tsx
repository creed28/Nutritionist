import axios from "../api/axios";
import { Food as FoodModel } from "../models/food";
import { ReactNode, createContext, useEffect, useState } from "react";

interface FoodProviderProps {
  children: ReactNode
}

interface FoodContextType {
  foods: FoodModel[],
  setFoods: React.Dispatch<React.SetStateAction<FoodModel[]>>,
  calTotal: number,
  proteinTotal: number,
  carbsTotal: number,
  fatTotal: number,
  sumValues: (foods: FoodModel[]) => void,
  handleDelete: (food: FoodModel) => void,
  handleAdd: (addedFood: FoodModel) => void,
  handleRemove: (removedFood: FoodModel) => void,
  searchResults: FoodModel[], 
  setSearchResults: React.Dispatch<React.SetStateAction<FoodModel[]>>,
  fetchSearchData: (input: string) => void,
  searchInput: string,
  setSearchInput:  React.Dispatch<React.SetStateAction<string>>
}

export const FoodContext = createContext<FoodContextType | null>(null);

export const FoodProvider = ({children} : FoodProviderProps) => {
  const [foods, setFoods] = useState<FoodModel[]>([]);
  const [calTotal, setCalTotal] = useState<number>(0);
  const [proteinTotal, setProteinTotal] = useState<number>(0);
  const [carbsTotal, setCarbsTotal] = useState<number>(0);
  const [fatTotal, setFatTotal] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FoodModel[]>([]);

  useEffect(() => {
    const loadFoodsInTable = async () => {
      try {
        const res = await axios.get("/foods");
        setFoods(res.data);
        sumValues(res.data);
      } catch (error) {
          console.error(error);
      }
    }
    
    loadFoodsInTable();
  }, []);
  
  const sumValues = (foods: FoodModel[]) => {
    const initialValue = { kCal: 0, protein: 0, carbs: 0, fat: 0 };
  
    const totals = foods.reduce((accumulator, food) => {
      return {
        kCal: accumulator.kCal + food.kCal,
        protein: accumulator.protein + food.protein,
        carbs: accumulator.carbs + food.carbs,
        fat: accumulator.fat + food.fat
      };
    }, initialValue);
  
    setCalTotal(totals.kCal);
    setProteinTotal(totals.protein);
    setCarbsTotal(totals.carbs);
    setFatTotal(totals.fat);
  }


  const handleAdd = async (addedFood: FoodModel) => {
    try {
      const res = await axios.patch(`/foods/${addedFood._id}`, addedFood);

      if (res.data.inTable) {
        setFoods(prevFoods => prevFoods.map((food) => 
          food._id === addedFood._id ? res.data : food
        ));
        setFoods([...foods, addedFood]);
        sumValues([...foods, addedFood]);
        setSearchInput("");
      }
    } catch (error) {
        console.error(error);
    }
  }
  
  const handleRemove = async (removedFood: FoodModel) => {
    try {
      const res = await axios.patch(`/foods/${removedFood._id}`, removedFood);

      if (!res.data.inTable) {
        setFoods(prevFoods => prevFoods.filter(food => food._id !== res.data._id));
        sumValues(foods.filter(food => food._id !== removedFood._id));
        setSearchInput("");
      }
    } catch (error) {
        console.error(error);
    }
  }
  
  const handleDelete = async (food: FoodModel) => {
    try {
      await axios.delete(`/foods/${food._id}`);
      setFoods(prevFoods => prevFoods.filter(existingFood => existingFood._id !== food._id));
      sumValues(foods.filter(existingFood => existingFood._id !== food._id));
      setSearchInput("");
    } catch (error) {
        console.error(error);
    }
  }

  const fetchSearchData = async (searchInput: string) => {
    try {
      if (searchInput.length < 3) {
       setSearchResults([]);
       return;
      }

      const response = await axios.get(`/foods/search?input=${searchInput}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const contextValue : FoodContextType = {
    foods,
    setFoods,
    calTotal,
    proteinTotal,
    carbsTotal,
    fatTotal,
    handleDelete,
    handleAdd,
    handleRemove,
    searchResults, 
    setSearchResults,
    fetchSearchData,
    searchInput,
    setSearchInput,
    sumValues,
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  );
}

export default FoodContext;
