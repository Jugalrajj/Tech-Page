import React from "react";
import "./Product.css";
import ProductItem from "../ProductItem/ProductItem";
import img1 from '../Assets/pic1.jpg'
import img4 from '../Assets/pic4.avif'
import img5 from '../Assets/pic5.avif'
import img6 from '../Assets/pic6.avif'
import img7 from '../Assets/pic7.jpg'
import img8 from '../Assets/pic8.jpg'
import img9 from '../Assets/pic9.jpg'
import img10 from '../Assets/pic10.jpg'
import img11 from '../Assets/pic11.jpg'
import img12 from '../Assets/pic12.jpg'
const product = [
  {
    id: 1,
    name: "Sony",
    image: img1,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 2,
    name: "Sony",
    image: img12,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img6,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img4,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img5,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img7,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img8,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img9,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },{
    id: 3,
    name: "Sony",
    image: img10,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
  {
    id: 3,
    name: "Sony",
    image: img11,
    description: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, upto 50 Hours Playtime, DSEE Upscale",
  },
];

const Product = () => {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
