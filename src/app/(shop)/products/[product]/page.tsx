import { getProductData } from "@/hooks/getProductData";
import { productDataType } from "@/types";
import { NextPage } from "next";
import Image from "next/image";
import "./product.css";
import Button from "@/components/ui/Button/button";
import RelatedProduct from "@/components/relatedProduct/relatedProduct";
import AddToCart from "@/components/addToCart/addToCart";

interface Props {
  params: {
    product: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { product } = await params;
  const data = await getProductData(product).then((data) => data[0]);
  if (!data) return <div>Product not found</div>;

  return (
    <div className="intProductParent">
      <div className="intProductContainer">
        <div className="intProductImage">
          <Image src={data.imgUrl} alt={data.title} width={450} height={450} />
        </div>
        <div className="intProductDetails">
          <div>
            <h3 className="title">
              {data.title}{" "}
              {data.discountText && <span>({data.discountText})</span>}
            </h3>
            <h4 className="price">${data.price}</h4>
            <p className="description">{data.description}</p>
          </div>

          <AddToCart product={data} />
        </div>
      </div>
      <RelatedProduct category={data.category} slug={data.slug} />
    </div>
  );
};

export default Page;
