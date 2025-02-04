import Image from "next/image";
import "./navbar.css";
import { NextPage } from "next";
import { navItems } from "@/constants";
import Link from "next/link";
import { navItemsType } from "@/types";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { User } from "lucide-react";
interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="navParent">
      <div className="navMain">
        <Link href="/" className="navHead">
          <Image src={"/assets/logo.png"} width={35} height={25} alt="logo" />
          <h1>BeatByte</h1>
        </Link>
        <div className="navItems">
          {navItems.map((val: navItemsType) => (
            <Link key={val.path} href={val.path}>
              {val.name}
            </Link>
          ))}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="signInUrl">Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
