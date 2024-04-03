import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import useFoodsContext from "../../hooks/useFoodsContext";

interface RegisterInput {
  username: string,
  email: string,
  password: string
}

const LoginForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState :{ 
      isSubmitting 
    }} = useForm<RegisterInput>();

  const { setAuth } = useAuth();
  const { loadFoodsInTable } = useFoodsContext();

  const onSubmit = async (input: RegisterInput) => {
    try {
      const res = await axios.post("/users/signup", input);
      setAuth(res.data);
      loadFoodsInTable();
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <form 
      className="mb-2 flex flex-col mx-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex items-center gap-y-4 flex-col">
        <Input
          placeholder="Name"
          id="name"
          className="formInput w-[90%] mx-6"
          type="text"
          required
          autoFocus
          {...register("username")}
        />
        <Input
          placeholder="Email"
          id="email"
          className="formInput w-[90%] mx-6"
          type="email"
          required
          {...register("email")}
        />
        <Input
          placeholder="Password"
          id="password"
          className="formInput w-[90%] mx-6"
          type="password"
          required
          {...register("password")}
        />
      </div>
      <Button 
          className='w-full' 
          type="submit"
          disabled={isSubmitting}
        >
            Sign Up
        </Button>
    </form>
  );
}

export default LoginForm;
