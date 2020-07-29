import React, { Component } from "react";
import Item from "../Item/item";
import classes from "./Body.module.css";
import Layout from "../Layout/Layout";

class Body extends Component {
  state = {
    total: 0,
    active: "",
    search: "",
    checkout: false,
    cartItems: [],
    mainStateCopy: [...this.props.state.items],
  };

  checkout = (prevState) => {
    let checkoutCopy = this.state.checkout;
    this.setState(() => ({
      checkout: !checkoutCopy,
    }));
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  addToCart = (index) => {
    let cartItemsCopy = [...this.state.cartItems];
    let checker = false;
    let itemCopy = { ...this.state.mainStateCopy[index] };
    itemCopy.x = 1;

    for (let i = 0; i < cartItemsCopy.length; i++) {
      if (itemCopy.name !== cartItemsCopy[i].name) {
        checker = false;
      } else if (itemCopy.name === cartItemsCopy[i].name) {
        cartItemsCopy[i].x++;
        checker = true;

        break;
      }
    }
    if (!checker) {
      cartItemsCopy.push(itemCopy);
    }
    this.setState((prevState) => ({
      cartItems: cartItemsCopy,
      total: prevState.total + itemCopy.price,
    }));
  };

  deleteItem = (i) => {
    let cartItemsCopy = [...this.state.cartItems];
    let itemCopy = cartItemsCopy[i];
    if (itemCopy.x > 1) {
      itemCopy.x--;
    } else if ((itemCopy.x = 1)) {
      cartItemsCopy.splice(i, 1);
    }
    this.setState((prevState) => ({
      cartItems: cartItemsCopy,
      total: prevState.total - itemCopy.price,
    }));
  };
  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      // this.checkout();
      return;
    }

    this.setState(() => ({
      checkout: false,
    }));
  };

  searchItems = (e) => {
    this.setState({ search: e.target.value });
  };
  viewall = () => {
    this.setState(() => ({
      active: "",
      search: "",
    }));
  };
  viewphones = () => {
    this.setState(() => ({
      active: "Smartphone",
      search: "",
    }));
  };
  viewlaps = () => {
    this.setState(() => ({
      active: "Laptop",
      search: "",
    }));
  };
  viewtvs = () => {
    this.setState(() => ({
      active: "TV",
      search: "",
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Layout
            pass={(node) => (this.node = node)}
            checkout={this.checkout}
            viewall={this.viewall}
            viewlaps={this.viewlaps}
            viewphones={this.viewphones}
            viewtvs={this.viewtvs}
            searchItems={this.searchItems}
            state={this.state}
          >
            {this.state.cartItems.map((item, i) => {
              return (
                <div key={i}>
                  <img alt="preview" src={item.image}></img>
                  <h3>{item.name}</h3>
                  <p>
                    x{item.x}
                    <button onClick={() => this.deleteItem(i)}>&#8211;</button>
                  </p>

                  <h5>{item.price * item.x}$</h5>
                  <hr></hr>
                </div>
              );
            })}
          </Layout>
        </div>
        <div className={classes.itemsCont}>
          {this.state.mainStateCopy.map((list, index) => {
            if (this.state.active === "" && this.state.search === "") {
              return (
                <Item
                  addToCart={() => this.addToCart(index)}
                  key={index}
                  name={list.name}
                  description={list.description}
                  price={list.price}
                  source={list.image}
                ></Item>
              );
            } else if (
              this.state.active.length > 0 &&
              list.category === this.state.active &&
              this.state.search === ""
            ) {
              return (
                <Item
                  addToCart={() => this.addToCart(index)}
                  key={index}
                  name={list.name}
                  description={list.description}
                  price={list.price}
                  source={list.image}
                ></Item>
              );
            } else if (
              this.state.search !== "" &&
              list.name
                .toUpperCase()
                .indexOf(this.state.search.toUpperCase()) !== -1
            ) {
              return (
                <Item
                  addToCart={() => this.addToCart(index)}
                  key={index}
                  name={list.name}
                  description={list.description}
                  price={list.price}
                  source={list.image}
                ></Item>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Body;
