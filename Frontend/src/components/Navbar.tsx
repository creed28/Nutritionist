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
        <div className="flex items-center gap-x-4">
          <li>
            <a href="/" className={`${isActive("/") && "activeLink"}`}>
              Home
            </a>
          </li>
          <li>
            <a href="/create-food" className={`${isActive("/create-food") && "activeLink"}`}>
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
