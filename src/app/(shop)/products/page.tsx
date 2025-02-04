import { NextPage } from "next";
import "./products.css";
import Banner from "@/components/Banner/banner";
import { getBannerData } from "@/app/hooks/getBannerData";
import { getProductData } from "@/app/hooks/getProductData";
import Link from "next/link";
import Image from "next/image";
import { productDataType } from "@/types";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const bannerData = await getBannerData();
  const productData = await getProductData();
  return (
    <div>
      <Banner data={bannerData} />
      <div className="productMain">
        <div className="productHead">
          <h1>Best Seller Products</h1>
          <p>Tag line</p>
        </div>
        <div className="productContainer">
          {productData.map((val: productDataType) => (
            <Link href={val.slug} key={val.slug} className="productCard">
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
      </div>
    </div>
  );
};

export default Page;
