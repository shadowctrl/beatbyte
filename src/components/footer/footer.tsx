import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="footerParent">
      <div className="footerContainer">
        <div className="footerMain">
          <div className="footerCompany">
            <div className="footerLogo">
              <Image
                src="/assets/logo.png"
                alt="Company Logo"
                width={30}
                height={40}
              />
              <h3>Beatbyte</h3>
            </div>
            <p>
              Your trusted destination for quality products. We deliver
              excellence and satisfaction.
            </p>
            <div className="footerSocial">
              <Link href="https://facebook.com" target="_blank">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram />
              </Link>
            </div>
          </div>

          <div className="footerLinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="footerService">
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link href="/shipping">Shipping Info</Link>
              </li>
              <li>
                <Link href="/returns">Returns Policy</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/track-order">Track Order</Link>
              </li>
            </ul>
          </div>

          <div className="footerContact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Phone />
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <Mail />
                <span>support@beatbyte.com</span>
              </li>
              <li>
                <MapPin />
                <span>123 New York City, US</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            &copy; {new Date().getFullYear()} BeatByte. All rights reserved.
          </p>
          <div className="footerPolicy">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
