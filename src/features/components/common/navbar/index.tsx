import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

interface NavbarProps {}

const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
