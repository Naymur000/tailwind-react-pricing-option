import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

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

const links = navLinks.map((route) => <Link key={route.id} route={route} />);

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={()=> setOpen(!open)} >
        
        <ul>
          {
            links
          }
        </ul>

        <h1>My Navbar</h1>
      </span>

      <ul className="flex">
        {
          links
        }
      </ul>

      <h1>Sign In</h1>
    </nav>
  );
};

export default NavBar;
