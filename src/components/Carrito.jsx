// src/components/CarritoWendys.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/wendys.css";

function CarritoWendys() {
  const { cart, removeItem, clearCart, total } = useCart();

  return (
    <div className="carrito-container">
      <h2 className="carrito-title">Carrito Wendy's</h2>

      {cart.length === 0 ? (
        <p className="carrito-empty">Tu carrito está vacío</p>
      ) : (
        <ul className="carrito-list">
          {cart.map((item) => (
            <li key={item.I} className="carrito-item">
              <span>
                {item.N} x {item.qty} - ${item.P * item.qty}
              </span>
              <button
                className="btn-remove"
                onClick={() => removeItem(item.I)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="carrito-footer">
          <p className="carrito-total">Total: ${total}</p>
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default CarritoWendys;
