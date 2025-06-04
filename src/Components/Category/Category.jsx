import React from "react";
import { categoryInfos } from "./categoryCollection.JS";
import Categorycard from "./Categorycard";
import classes from "./Category.module.css";

function Category() {
  return (
    <div className={classes.category_container}>
      {categoryInfos.map((data) => (
        <Categorycard key={data.name} data={data} />
      ))}
    </div>
  );
}

export default Category;
