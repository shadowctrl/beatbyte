"use client";
import { productDataType } from "@/types";
import { NextPage } from "next";
import Button from "../ui/Button/button";
import { useContext } from "react";
import { cartContext } from "@/context/useCart";

interface Props {
  product: productDataType;
}

const AddToCart: NextPage<Props> = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  return (
    <div>
      <Button id="addToCart" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
