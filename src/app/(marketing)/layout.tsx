import { Navbar } from "@/components";
import Footer from "@/components/footer/footer";
import { NextPage } from "next";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
