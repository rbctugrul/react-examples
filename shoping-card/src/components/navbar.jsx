import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css";

function navbar({ setShow, size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
