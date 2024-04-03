import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/Input";
import useFoodsContext from "../../hooks/useFoodsContext";

const SearchBar = () => {
  const { searchInput, setSearchInput, fetchSearchData } = useFoodsContext();

  const handleChange = (value: string) => {
    setSearchInput(value);
    fetchSearchData(value);
  }

  return (
    <section className="flex bg-white rounded-lg h-[2.5rem] px-4 items-center w-[30%]">
      <FaSearch />
      <Input 
        className="border-none h-full text-[1.25rem] ml-1"
        type="text" 
        placeholder="Type to search..."
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
    />
    </section>
  );
}

export default SearchBar;
