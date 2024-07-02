import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Custom Products/CustomProducts.css";
import img1 from "../Assets/pic6.avif";


const CustomProducts = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    { id: 1, src: img1, alt: "Red Headphones" },
    { id: 2, src: img1, alt: "Blue Headphones" },
    { id: 3, src: img1, alt: "Orange Headphones" },
    { id: 4, src: img1, alt: "Orange Headphones" },
  
  ];

  return (
<div className="carousel_wrapper">
<h1 className="heading"> Our Latest Colour Collection 2021</h1>
<div
  style={{
    width: "90%",
  }}
>
  <Slider {...settings}>
    {data.map((item) => (
      <div className="card_wrapper">
        <div class="card">
          <img
            src={item.src}
            alt="Avatar"
            style={{ width: "fit-content", padding: "0 2rem" }}
          />
          <div class="container">
            <h4>
              <b>{item.alt}</b>
            </h4>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
</div>
  );
};

export default CustomProducts;
