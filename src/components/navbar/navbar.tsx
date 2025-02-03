import Image from "next/image";
import "./navbar.css";
import { NextPage } from "next";
import { navItems } from "@/constants";
import Link from "next/link";
import { navItemsType } from "@/types";
import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="navParent">
      <div className="navMain">
        <div className="navHead">
          <Image src={"/assets/logo.png"} width={35} height={25} alt="logo" />
          <h1>BeatByte</h1>
        </div>
        <div className="navItems">
          {navItems.map((val: navItemsType) => (
            <Link key={val.path} href={val.path}>
              {val.name}
            </Link>
          ))}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
