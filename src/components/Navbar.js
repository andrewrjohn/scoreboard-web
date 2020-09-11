import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-32 px-6 border-r border-white flex flex-col items-center justify-center">
      <NavLink
        activeClassName="border-b-2"
        to="/mlb"
        className="my-4 cursor-pointer"
      >
        MLB
      </NavLink>
      <NavLink
        activeClassName="border-b-2"
        to="/nfl"
        className="my-4 cursor-pointer"
      >
        NFL
      </NavLink>
      <NavLink
        activeClassName="border-b-2"
        to="/nba"
        className="my-4 cursor-pointer"
      >
        NBA
      </NavLink>
    </div>
  );
}
