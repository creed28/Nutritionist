import TotalCard from "../components/TotalCard";
import FoodList from "../components/FoodList";
import SearchBar from "../components/search/SearchBar";
import SearchResultList from "../components/search/SearchResultList";
import useFoodsContext from "../hooks/useFoodsContext";

const Home = () => {
  const { searchInput } = useFoodsContext();

  return (
    <main className="bg-[#bee9b0] pt-10 flex flex-col gap-y-10 items-center">
      <div className="flex flex-col w-full items-center relative">
        <SearchBar />
        {searchInput.length > 0 && <SearchResultList />}
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <TotalCard />
        <FoodList />
      </div>
    </main>
  );
}

export default Home;
