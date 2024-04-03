import { useLocation } from "react-router-dom";
import AuthDialog from "./auth/AuthDialog";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import { Button } from "./ui/Button";

const Navbar = () => {
  const { auth } = useAuth();
  const logout  = useLogout();

  const location = useLocation();

  const isActive = (path : string) => {
    return location.pathname === path;
  }

  return (
    <nav>
      <ul className="flex items-center gap-x-4 text-sm font-semibold">
        <div className="flex items-center gap-x-4">
          {auth ? 
            <>
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
              <li>
                <p>{auth.username}</p>
              </li>
              <li>
                <Button variant="link" size="link" onClick={logout}>
                  Logout
                </Button>
              </li>
            </>
          :
            <li>
              <AuthDialog />
            </li>
          }
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
