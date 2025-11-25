import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="lg:mr-10 px-2  hover:bg-amber-600 rounded-sm ">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
