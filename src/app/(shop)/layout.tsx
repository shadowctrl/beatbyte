"use client";
import { ReactNode } from "react";
import { Navbar } from "@/components";
import Cart from "@/components/cart/cart";
import { CartContextProvider } from "@/context/useCart";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <CartContextProvider>
      <div className="flex w-full">
        <div className="min-w-0 flex-grow">
          <Navbar />
          {children}
        </div>
        <Cart />
      </div>
    </CartContextProvider>
  );
};

export default Layout;
