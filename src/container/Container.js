import React, { Component } from "react";
import Body from "../components/Body/Body";
import assets from "../assets/assets";

class Container extends Component {
  state = {
    items: [
      {
        category: "Smartphone",
        name: "iphone Se",
        description:
          "iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for",
        price: 400,
        image: assets.iphoneSe,
      },
      {
        category: "Smartphone",
        name: "iphone 8",
        description:
          "Featuring New Glass and Aluminum Design, Retina HD , A11 Bionic Chip, New  Dual Cameras with Support for Portrait Lighting",
        price: 350,
        image: assets.iphone8,
      },
      {
        category: "Smartphone",
        name: "Samsung note 10",
        description:
          "The Galaxy Note 10 is Samsung’s easiest to use S Pen-toting phone yet, and while there may not be any game-changing features ",
        price: 600,
        image: assets.Samsung,
      },
      {
        category: "Smartphone",
        name: "OnePlus 8 pro",
        description:
          "OnePlus 8 Pro with Alexa Built-in provides hands-free access to Alexa while on-the-go. Say “Alexa” to play music, make calls, ask questions",
        price: 700,
        image: assets.oneplus,
      },
      {
        category: "Smartphone",
        name: "Google Pixel 4 XL",
        description:
          "Point and shoot for the perfect photo. Capture brilliant color and control the exposure balance of different parts of your photos ",
        price: 650,
        image: assets.google,
      },

      {
        category: "Laptop",
        name: "ASUS VivoBook 14",
        description: `14" FHD, AMD Ryzen 7-3700U, AMD Radeon RX Vega 10 Graphics, 8 GB DDR4 RAM, 512 GB PCIe SSD, Backlit KB, Fingerprint`,
        price: 599,
        image: assets.asus,
      },
      {
        category: "Laptop",
        name: "Acer Laptop Aspire 5",
        description: `AMD Ryzen 5 4000 Series 4500U (2.30 GHz) 8 GB Memory 512 GB SSD AMD Radeon Graphics 15.6" Windows 10 Home 64-bit`,
        price: 559,
        image: assets.acer,
      },
      {
        category: "Laptop",
        name: "HP Laptop 250 G7",
        description: `Intel Core i5 8th Gen 8265U (1.60 GHz) 8 GB Memory 256 GB SSD Intel UHD Graphics 620 15.6" Windows 10 Pro 64-bit`,
        price: 679,
        image: assets.hp,
      },
      {
        category: "TV",
        name: `Sony XBR65A8H 65"`,
        description: `BRAVIA OLED 4K Ultra HD Smart TV with HDR - The processor that brings the best out of OLED's beauty`,
        price: 2299,
        image: assets.sonytv,
      },
      {
        category: "TV",
        name: `LG OLED77CXPUA 77"`,
        description: `Class HDR 4K UHD Smart OLED TV - nly OLED pixels emit their own light, allowing for perfect black, intense color and stunning picture `,
        price: 3999,
        image: assets.lgtv,
      },
      {
        category: "TV",
        name: `Samsung UHD 7 Series 75"`,
        description: `4K Motion Rate 120 LED TV UN75TU7000FXZA (2020)  -  3840 x 2160
      ATSC/Clear QAM Tuners
      Analog Tuner
      2 In HDMI 1 Optical Out`,
        price: 847,
        image: assets.samsungtv,
      },
    ],
  };

  render() {
    return (
      <div>
        <Body state={this.state}></Body>
      </div>
    );
  }
}

export default Container;
