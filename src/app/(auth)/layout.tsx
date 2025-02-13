import "./auth.css";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="signUpParent">
      <div className="signUpHeader">
        <div className="signUpHeadContainer">
          <Link href={"/"} className="signUpHead">
            <Image src={"/assets/logo.png"} width={25} height={25} alt="logo" />
            <h1>BeatByte</h1>
          </Link>
          <div className="signUpSubHead">
            <span>/</span>
            <h1>Welcome</h1>
          </div>
        </div>
        <div className="signUpChild">{children}</div>
      </div>
      <div className="welcome">
        <div className="welcomeContainer">
          <h2>
            Welcome to <span>Beat</span>Byte
          </h2>
          <p>Your journey to the best beats starts here.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
