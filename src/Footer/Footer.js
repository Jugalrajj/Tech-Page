import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
           
            <p>"Experience the future with our latest tech"</p>
          
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>89873864638</li>
                <li>jugal@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024. Tech.com-All Rights Reserved</p>
    </div>
  );
};

export default Footer;
