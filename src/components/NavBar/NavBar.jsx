import React from "react";
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
    <nav>

        <ul className="flex">
            {
                navLinks.map(route => <Link route={route}></Link>)
            }   
        </ul>

      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
