import TotalCard from "../components/TotalCard";
import FoodList from "../components/FoodList";
import { Food as FoodModel } from "../models/food";
import { useEffect, useState } from "react";
import axios from '../api/axios'; 

const Home = () => {
  const [foods, setFoods] = useState<FoodModel[]>([]);
  const [calTotal, setCalTotal] = useState<number>(0);
  const [proteinTotal, setProteinTotal] = useState<number>(0);
  const [carbsTotal, setCarbsTotal] = useState<number>(0);
  const [fatTotal, setFatTotal] = useState<number>(0);

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
  
  const handleUpdate = async (updatedFood: FoodModel) => {
    try {
      const res = await axios.patch(`/foods/${updatedFood._id}`, updatedFood);

   /* if (res.data.inTable) {
        setFoods(prevFoods => prevFoods.map((food) => 
          food._id === updatedFood._id ? res.data : food
        ));
      }  */

      if (!res.data.inTable) {
        setFoods(prevFoods => prevFoods.filter(food => food._id !== res.data._id));
        
        sumValues(foods.filter(food => food._id !== updatedFood._id));
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
    } catch (error) {
        console.error(error);
    }
  }
  
  return (
    <main className="bg-[#bee9b0] pt-10 flex flex-col items-center">
      <TotalCard
        calories={calTotal}
        protein={proteinTotal}
        carbs={carbsTotal}
        fat={fatTotal}
      />
      <FoodList 
        foods={foods} 
        handleUpdate={handleUpdate} 
        handleDelete={handleDelete} 
      />
    </main>
  );
}

export default Home;
