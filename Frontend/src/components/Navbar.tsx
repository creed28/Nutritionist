import AuthDialog from "./auth/AuthDialog";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-6 text-sm font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/add-food">Add</a>
        </li>
        <li>
          <AuthDialog />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
