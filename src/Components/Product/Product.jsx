import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <section className="products-container">
      {products.map((singleProduct) => {
        return <ProductCard Product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
};

export default Product;
