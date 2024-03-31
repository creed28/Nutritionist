import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header 
      id='main-header' 
      className="flex justify-around items-center gap-x-20 bg-[#b3e4a2] py-3 px-20">
        <Logo />
        <Navbar />
    </header>
  );
}

export default Header;
