import { Menu } from "lucide-react";
import Link from "./Link";


const NavBar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Players",
      path: "/players",
    },
    {
      id: 3,
      name: "Teams",
      path: "/teams",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex justify-between mx-10">
      <Menu></Menu>
      <h1>My Navbar</h1>

      <ul className="flex">
        {navLinks.map((route) => (
          <Link route={route}></Link>
        ))}
      </ul>
      
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;