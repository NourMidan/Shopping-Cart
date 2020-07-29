import React from "react";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <div>
      <div className={classes.head}>
        <h1 className={classes.title}>
          <i>Alazon.com</i>
        </h1>
        <div className={classes.searchbar}>
          <input
            onChange={props.searchItems}
            placeholder="Search for item"
            type="text"
            value={props.state.search}
          />
        </div>
        <div ref={props.pass} className={classes.shoppCart}>
          <button onClick={props.checkout} className={classes.checkoutbtn}>
            <h2>Shopping Cart </h2>
            {/* <h4>Items Added : {props.state.cartItems.length}</h4> */}
            <h4>
              Items Added :
              {props.state.cartItems.length > 0 &&
                props.state.cartItems.reduce((total, sum) => {
                  return total + sum.x;
                }, 0)}
            </h4>
          </button>

          {props.state.checkout && (
            <div className={classes.checkout}>
              {props.children}
              <h1>Total : {props.state.total}$ </h1>
            </div>
          )}
        </div>
      </div>
      <div className={classes.btns}>
        <button onClick={props.viewall}>View All</button>
        <button onClick={props.viewphones}>Smartphones</button>
        <button onClick={props.viewlaps}>Laptops</button>
        <button onClick={props.viewtvs}>TVs</button>
      </div>
    </div>
  );
};

export default layout;
