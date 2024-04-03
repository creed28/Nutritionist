import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import useFoodsContext from "../../hooks/useFoodsContext";

interface LoginInput {
  username: string,
  password: string
}

const LoginForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState :{ 
      isSubmitting 
    }} = useForm<LoginInput>();

  const { setAuth } = useAuth();
  const { loadFoodsInTable } = useFoodsContext();

  const onSubmit = async (input: LoginInput) => {
    try {
      const res = await axios.post("/users/login", input);
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
          placeholder="Username"
          id="username"
          className="formInput w-[90%] mx-6"
          type="text"
          required
          autoFocus
          {...register("username")}
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
      <div className="mt-4 mx-4">
        <Button 
          className='w-full' 
          type="submit"
          disabled={isSubmitting}
        >
            Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
