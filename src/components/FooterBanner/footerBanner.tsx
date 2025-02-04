import { bannerDataType, footerBannerDataType } from "@/types";
import { NextPage } from "next";
import "./footerBanner.css";
import Image from "next/image";

interface Props {
  data: footerBannerDataType;
}

const Page: NextPage<Props> = ({
  data: {
    imgUrl,

    smallText,
    bigText,
    buttonText,
    description,
    period,
    smallText1,
    bigText1,
  },
}) => {
  return (
    <div className="footerBannerMain">
      <div className="footerBannerContainer">
        <div className="footerBannerText">
          <h3 className="smallText">{smallText}</h3>
          <h4 className="bigText">{bigText}</h4>
          <h5 className="period">{period}</h5>
        </div>

        <Image
          src={imgUrl}
          className="footerBannerImage"
          width={500}
          height={450}
          alt={bigText1}
        />
        <div className="footerBannerText1 my-auto">
          <h3 className="smallText1">{smallText1}</h3>
          <h4 className="bigText1">{bigText1}</h4>
          <h5 className="description">{description}</h5>

          <button>{buttonText}</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Page;
