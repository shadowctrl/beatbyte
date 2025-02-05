import { NextPage } from "next";
import "./banner.css";
import Image from "next/image";
import { bannerDataType } from "@/types";
import Button from "../ui/Button/button";

interface Props {
  data: bannerDataType;
}

const Banner: NextPage<Props> = ({
  data: { imgUrl, title, smallText, bigText, buttonText, description },
}) => {
  return (
    <div>
      <div className="bannerMain">
        <div className="bannerText">
          <h3>{title}</h3>
          <h4>{smallText}</h4>
          <h5>{bigText}</h5>
          <Button>{buttonText}</Button>
        </div>
        <div className="bannerImage">
          <Image src={imgUrl} width={450} height={450} alt="Banner Image" />{" "}
        </div>
        <div className="desc">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
