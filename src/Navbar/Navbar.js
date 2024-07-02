import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Navbar/log.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav>
      <div className="main-nav container flex">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div id="nav-links" className="nav-links">
          <ul className="flex">
            <li className="hover-link nav-item">
              <Link
                id="Home"
                to="/"
                onClick={() => setMenu("home")}
                className={menu === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li className="hover-link nav-item">
              <Link
                id="Product"
                to="/product"
                onClick={() => setMenu("product")}
                className={menu === "product" ? "active" : ""}
              >
                Product
              </Link>
            </li>
            <li className="hover-link nav-item">
              <Link
                id="Contact"
                to="/contact"
                onClick={() => setMenu("contact")}
                className={menu === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
