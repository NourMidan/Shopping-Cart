import React from "react";
import classes from "./item.module.css";

const item = (props) => {
  return (
    <div className={classes.item}>
      <img alt="preview" className={classes.img} src={props.source}></img>
      <div>
        <h1>{props.name}</h1>
        <h4>{props.description}</h4>
        <h2>{props.price}$</h2>
        <button onClick={props.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default item;
