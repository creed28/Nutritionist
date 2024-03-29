import { Food } from "../models/food";
import { useEffect, useState } from "react";
import axios from '../api/axios';

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function loadFoods() {
      try {
        const res = await axios.get("/foods");
        setFoods(res.data);
      } catch (error) {
          console.error(error);
      }
    }
  
    loadFoods();
  }, []);  

  return (
    <section>
      {JSON.stringify(foods)}
    </section>
  );
}

export default Home;
