import TotalCard from "../components/TotalCard";
import FoodList from "../components/FoodList";
import SearchBar from "../components/search/SearchBar";
import SearchResultList from "../components/search/SearchResultList";
import useFoodsContext from "../hooks/useFoodsContext";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const { searchInput } = useFoodsContext();
  const { auth } = useAuth();

  return (
    <main className="bg-[#bee9b0] pt-10 flex flex-col gap-y-10 items-center">
      <div className="flex flex-col w-full items-center relative">
        <SearchBar />
        {searchInput.length > 0 && <SearchResultList />}
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <TotalCard />
        {auth ? 
          <FoodList /> 
        : 
          <p className="font-Rounded1c">
            Login to use <span className="font-Pacifico">Nutritionist</span>
          </p>}
      </div>
    </main>
  );
}

export default Home;
