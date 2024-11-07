import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispath) => ({
  clearItem: (item) => dispath(clearItemFromCart(item)),
  addItem: (item) => dispath(addItem(item)),
  removeItem: (item) => dispath(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
