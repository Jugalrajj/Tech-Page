import React from "react";
import "./Home.css";
import CustomProducts from "../Custom Products/CustomProducts";
import Features from "../Features";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <h2>Experience the future with our latest tech</h2>
          <p>
            Our latest tech products are designed to <br />
            enhance your daily life with seamless integration
            <br /> and cutting-edge features.
          </p>
        </div>
      </div>
 <div>
<Features/>
 </div>
<div>
  <CustomProducts/>
</div>
    </div>
  );
};

export default Header;
