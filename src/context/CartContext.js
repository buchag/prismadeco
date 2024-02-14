import React, { createContext, useState } from 'react';

// Creamos un contexto para el carrito de compras
export const CartContext = createContext();

// Un componente que proporciona el contexto del carrito
export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCart([...cart, product, quantity]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Función para limpiar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
