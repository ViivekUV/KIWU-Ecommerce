import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Navbar = () => {
  return (
    <nav style={{ marginTop: "4px" }}>
      <ul>
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="link">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="women" className="link">
            Womens
          </NavLink>
        </li>
        <li>
          <NavLink to="newarrivals" className="link">
            New Arrivals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
