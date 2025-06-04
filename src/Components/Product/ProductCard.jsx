import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import CurrencyFormat from "../Currency/CurrencyFormat";

import { Link } from "react-router-dom";

function ProductCard({ Product }) {
  const { image, title, id, rating, price } = Product;
  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <h3>{title}</h3>

      <div className={classes.rating}>
        {/* rating */}
        <Rating value={rating.rate} precision={0.1} />
        {/*count */}
        <small>{rating.count}</small>
      </div>
      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;
