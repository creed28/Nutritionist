import { useLocation } from "react-router-dom";
import AuthDialog from "./auth/AuthDialog";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path : string) => {
    return location.pathname === path;
  }

  return (
    <nav>
      <ul className="flex items-center gap-x-4 text-sm font-semibold">
        <div className="flex items-center gap-x-2">
          <li>
            <a href="/" className={`p-2 
              ${isActive("/") && "bg-[#ed6564] hover:bg-[#FB7271]"}`}>
                Home
            </a>
          </li>
          <li>
            <a href="/create-food" className={`p-2 
              ${isActive("/create-food") && "bg-[#ed6564] hover:bg-[#FB7271]"}`}>
                Create Food
            </a>
          </li>
        </div>
        <li>
          <AuthDialog />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
