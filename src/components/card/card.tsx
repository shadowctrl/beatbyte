import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { productDataType } from "@/types";
import "./card.css";

interface Props {
  data: productDataType[];
}

const Card: NextPage<Props> = ({ data }) => {
  return (
    <div className="productContainer">
      {data.map((val: productDataType) => (
        <Link
          href={"/products/" + val.slug}
          key={val.slug}
          className="productCard"
        >
          <Image
            src={val.imgUrl}
            width={250}
            height={250}
            alt={val.title}
            className="productImage"
          />
          <h3>{val.title}</h3>
          <p>${val.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;
