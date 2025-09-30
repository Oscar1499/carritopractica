import React, { createContext, useContext, useState } from "react";

// Crear contexto
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addItem = (product) => {
    const exist = cart.find((p) => p.I === product.I);
    if (exist) {
      // Si ya existe, aumenta la cantidad
      setCart(
        cart.map((p) =>
          p.I === product.I ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Eliminar producto
  const removeItem = (id) => {
    setCart(cart.filter((p) => p.I !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular total
  const total = cart.reduce(
    (acc, item) => acc + (item.P ?? 0) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
