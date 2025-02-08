"use client";
import { productDataType } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";
import { CartContextType } from "@/types";

export const cartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  deleteFromCart: () => {},
  deleteItem: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<productDataType[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const deleteItem = (
    item: productDataType,
    e: React.MouseEvent<SVGElement>
  ) => {
    e.stopPropagation();
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.slug !== item.slug)
    );
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
      value={{ cart, addToCart, clearCart, deleteFromCart, deleteItem }}
    >
      {children}
    </cartContext.Provider>
  );
};
