"use client";
import { NextPage } from "next";
import "./cart.css";
import { ShoppingBag, Trash, Trash2, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { cartContext } from "@/context/useCart";
import { productDataType } from "@/types";
import Button from "../ui/Button/button";

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const { cart, deleteFromCart, clearCart } = useContext(cartContext);
  return (
    <div className="cartWrapper">
      <div className="cartParent cartInvisible" id="cart">
        <div className="cartContainer">
          <div className="cartHeader">
            <div className="left">
              <ShoppingBag size={22} />
              <h1>
                Cart Items {cart.length > 0 && <span>- {cart.length}</span>}{" "}
              </h1>
            </div>
            {cart.length > 0 && (
              <div className="right">
                <Trash
                  size={20}
                  onClick={() => clearCart()}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
          </div>
          <div className="productCartContainer">
            {cart.map((item: productDataType, index: number) => (
              <div className="cartItems" key={item.slug + index}>
                <div className="flex gap-2">
                  <div className="left">
                    <Image
                      src={item.imgUrl}
                      width={70}
                      height={100}
                      alt="Product Image"
                      className="cartProductImage"
                    />
                  </div>
                  <div className="right">
                    <p className="title">{item.title}</p>
                    <p className="price">
                      Price: <span>{item.price}</span>
                    </p>
                    <p className="quantity">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <Trash2Icon
                  onClick={() => deleteFromCart(item)}
                  size={25}
                  color="var(--sec-col)"
                  style={{
                    cursor: "pointer",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    margin: "auto 0",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
