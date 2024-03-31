import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

interface FoodInput {
  name: string,
  kCal: number,
  protein: number,
  carbs: number,
  fat: number
}

const CreateFoodForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState :{ 
      isSubmitting 
    }} = useForm<FoodInput>();

  const navigate = useNavigate();

  const onSubmit = async (input: FoodInput) => {
    try {
      await axios.post("/foods", input);
      navigate('/');
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <section className="w-[500px] flex flex-col
    bg-[#b5e2a5] py-4 my-11">
      <div className="flex flex-col items-center">
        <h2 className="text-[2.3rem] font-Pacifico py-3">
          Create New Food
        </h2>
      </div>
      <form 
        className="mb-2 flex flex-col mx-6" 
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center gap-y-4 flex-col">
          <Input
            placeholder="Name"
            id="name"
            className="formInput w-[90%] mx-6"
            type="text"
            required
            autoFocus
            {...register("name")}
          />
          <Input
            placeholder="Calories"
            id="kCal"
            className="formInput w-[90%] mx-6"
            type="number"
            required
            {...register("kCal")}
          />
          <Input
            placeholder="Carbs"
            id="carbs"
            className="formInput w-[90%] mx-6"
            type="number"
            required
            {...register("carbs")}
          />
          <Input
            placeholder="Protein"
            id="protein"
            className="formInput w-[90%] mx-6"
            type="number"
            required
            {...register("protein")}
          />
          <Input
            placeholder="Fat"
            id="fat"
            className="formInput w-[90%] mx-6"
            type="number"
            required
            {...register("fat")}
          />
        </div>
        <div className="mt-4 mx-4">
          <Button 
            className='w-full' 
            type="submit" 
            disabled={isSubmitting}>
              Create
          </Button>
        </div>
      </form>
    </section>
  );
}

export default CreateFoodForm;
