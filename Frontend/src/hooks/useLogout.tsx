import axios from "../api/axios";
import useAuth from "./useAuth";
import useFoodsContext from "./useFoodsContext";

const useLogout = () =>{
  const { setAuth } = useAuth();
  const { loadFoodsInTable, sumValues } = useFoodsContext();

  const logout = async () => {
    setAuth(null); 

    try {
      await axios.post('/users/logout', {});
      loadFoodsInTable();
      sumValues([]);
    } catch(error){
        console.log(error);
    }
  }

  return logout;
}

export default useLogout;
