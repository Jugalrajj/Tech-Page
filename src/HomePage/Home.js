import React from "react";
import "./Home.css";
import CustomProducts from "../Custom Products/CustomProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Custom Products/CustomProducts.css";
import img1 from "../Assets/pic2.jpg";

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
      <CustomProducts />
    </div>
  );
};

export default Header;
