"use client";
import "./navbar.css";
import { NextPage } from "next";
import { ShoppingCart } from "lucide-react";
import { useCartVisibility } from "@/hooks/cartVisibility";

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const { toggleCart } = useCartVisibility();

  return (
    <div className="navCartParent">
      <div className="navCartMain">
        <button onClick={toggleCart} className="navCartButton">
          <ShoppingCart size={25} className="cartIcon" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
