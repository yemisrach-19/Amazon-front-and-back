import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import classes from "./Carousel.module.css";
import { img } from "./img/data.js";

function CarouseEffect() {
  return (
    <div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={true}
      >
        {img.map((img) => {
          return <img src={img} />;
        })}
      </Carousel>
      <div className={classes.img}></div>
    </div>
  );
}

export default CarouseEffect;
