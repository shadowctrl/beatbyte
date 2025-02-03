import { NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return redirect("/products");
};

export default Page;
