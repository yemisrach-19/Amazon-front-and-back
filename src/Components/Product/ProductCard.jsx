import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../currencyFormater";
import "./Product.css";

const ProductCard = ({ Product }) => {
  const { image, title, id, rating, price } = Product;
  return (
    <div className="card-container">
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="rating">
        {/* rating */}
        <Rating value={rating.rate} precision={0.1} />
        {/* counting */}
        <small>{rating.count}</small>
      </div>
      <div>
        {/* realprice */}
        <CurrencyFormat amount={price} />
      </div>
      <button className="button">add to card</button>
    </div>
  );
};

export default ProductCard;
