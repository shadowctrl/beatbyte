import { NextPage } from "next";
import "./products.css";
import Banner from "@/components/Banner/banner";
import { getData } from "@/app/hooks/getBannerData";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const bannerData = await getData();
  return (
    <div>
      <Banner data={bannerData} />
      <div className="productMain"></div>
    </div>
  );
};

export default Page;
