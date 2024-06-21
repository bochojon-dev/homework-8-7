import React from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <h2>Boss</h2>
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
