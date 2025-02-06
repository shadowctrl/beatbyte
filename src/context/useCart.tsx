"use client";
import { productDataType } from "@/types";
import { createContext, ReactNode, useState } from "react";

export const cartContext = createContext<{
  cart: productDataType[];
  addToCart: (item: productDataType) => void;
  clearCart: () => void;
  deleteFromCart: (item: productDataType) => void;
}>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  deleteFromCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<productDataType[]>([]);

  const addToCart = (item: productDataType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.slug === item.slug);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const deleteFromCart = (item: productDataType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.slug === item.slug);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter((cartItem) => cartItem.slug !== item.slug);
        }
        return prevCart.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, clearCart, deleteFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
