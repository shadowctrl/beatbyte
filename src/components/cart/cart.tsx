"use client";
import { NextPage } from "next";
import "./cart.css";
import {
  CircleMinus,
  CirclePlus,
  ShoppingBag,
  Trash,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { cartContext } from "@/context/useCart";
import { productDataType } from "@/types";
import Button from "../ui/Button/button";
import { useUser } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";
import getStripe from "@/utils/getStripe";

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const { isSignedIn, user } = useUser();
  const pathName = usePathname();
  const { cart, deleteFromCart, clearCart, addToCart, deleteItem } =
    useContext(cartContext);
  const isCartItems = cart.length > 0;

  const handleClick = async (cart: productDataType[]) => {
    if (!isSignedIn) return redirect(`/sign-in?redirect_url=${pathName}`);
    const stripe = await getStripe();
    if (!stripe) return;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        user,
      }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className="cartWrapper">
      <div className="cartParent cartInvisible" id="cart">
        <div className="cartContainer">
          <div className="cartHeader">
            <div className="left">
              <ShoppingBag size={22} />
              <h1>Cart Items {isCartItems && <span>- {cart.length}</span>} </h1>
            </div>
            {isCartItems && (
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
                    <div className="quantity">
                      Quantity:
                      <CircleMinus onClick={() => deleteFromCart(item)} />
                      <span>{item.quantity} </span>
                      <CirclePlus onClick={() => addToCart(item)} />
                    </div>
                  </div>
                </div>
                <Trash2Icon
                  onClick={(e: React.MouseEvent<SVGElement>) =>
                    deleteItem(item, e)
                  }
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
      {isCartItems && (
        <div className="cartCheckout">
          <Button onClick={() => handleClick(cart)}>Proceed to Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
