import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/actions";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Cart Page</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${item.price * item.quantity}</p>
            <button onClick={() => handleIncrease(item)}>+</button>
            <button onClick={() => handleDecrease(item)}>-</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>
      <p className="total-price">Total Price for all items: ${totalPrice}</p>
    </div>
  );
};

export default CartPage;
