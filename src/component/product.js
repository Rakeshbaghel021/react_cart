import React from "react";

export default function Product(props) {
  return (
    <div className="wrapper">
      <li className="list">
        {props.title}
        <span className="price">{props.price} $</span>
        <button className="btn" onClick={() => props.addtocart(props)}>
          add to cart
        </button>
      </li>
    </div>
  );
}
