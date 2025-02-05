import { NextPage } from "next";
import { getProductByCategory } from "@/hooks/getProductData";

import "./related.css";
import { productDataType } from "@/types";
import Image from "next/image";
import Card from "../card/card";

interface Props {
  category?: string[];
  slug?: string;
}

const RelatedProduct: NextPage<Props> = async ({ category, slug }) => {
  const relatedProducts = await getProductByCategory(
    category && category,
    slug && slug
  );

  return (
    <div className="relatedMain">
      <h2 className="globalHeading">Related Products</h2>
      <div className="relatedContainer">
        <Card data={relatedProducts} />
      </div>
    </div>
  );
};

export default RelatedProduct;
