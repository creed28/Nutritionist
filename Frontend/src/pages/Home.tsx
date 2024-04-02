import TotalCard from "../components/TotalCard";
import FoodList from "../components/FoodList";
import SearchBar from "../components/search/SearchBar";
import SearchResultList from "../components/search/SearchResultList";
const Home = () => {
  
  return (
    <main className="bg-[#bee9b0] pt-10 flex flex-col items-center">
      <SearchBar />
      <SearchResultList />
      <TotalCard />
      <FoodList />
    </main>
  );
}

export default Home;
