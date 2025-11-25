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
    <nav className="flex justify-between max-w-7xl mx-7 mt-4">
      <span className="flex">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
        </span>

        <ul
          className={`md:hidden absolute bg-yellow-500 text-black ${
            open ? "top-10" : "-top-40"
          } duration-1000 rounded-sm`}
        >
          {links}
        </ul>

        <h1 className="ml-3">My Navbar</h1>
      </span>

      <ul className="md:flex hidden">{links}</ul>

      <h1>Sign In</h1>
    </nav>
  );
};

export default NavBar;
