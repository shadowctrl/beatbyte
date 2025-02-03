import "./auth.css";
import { ReactNode } from "react";
import Image from "next/image";
interface Props {}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="signUpParent">
      <div className="signUpHeader">
        <div className="signUpHeadContainer">
          <div className="signUpHead">
            <Image src={"/assets/logo.png"} width={25} height={25} alt="logo" />
            <h1>BeatByte</h1>
          </div>
          <div className="signUpSubHead">
            <span>/</span>
            <h1>Welcome</h1>
          </div>
        </div>
        <div className="signUpChild">{children}</div>
      </div>
      <div className="absolute right-0 w-[65vw] h-[100vh] bg-black"></div>
    </div>
  );
};

export default Layout;
