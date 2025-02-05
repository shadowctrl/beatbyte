import { NextPage } from "next";
import "./products.css";
import { getBannerData } from "@/hooks/getBannerData";
import { getProductData } from "@/hooks/getProductData";
import Link from "next/link";
import Image from "next/image";
import { bannerDataType, footerBannerDataType, productDataType } from "@/types";
import { Banner, FooterBanner } from "@/components";
import Card from "@/components/card/card";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const {
    headerBanner,
    footerBanner,
  }: { headerBanner: bannerDataType; footerBanner: footerBannerDataType } =
    await getBannerData();

  const productData = await getProductData();

  return (
    <div>
      <Banner data={headerBanner} />
      <div className="productMain">
        <div className="productHead">
          <h1 className="globalHeading">Best Seller Products</h1>
          <p>Tag line</p>
        </div>
        <Card data={productData} />
      </div>
      <FooterBanner data={footerBanner} />
    </div>
  );
};

export default Page;
