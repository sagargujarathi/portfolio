import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "../sections/header-section";
import { Inter } from "next/font/google";
import Footer from "../sections/footer-section";
import { IParamsType } from "@/modules/types";
import userSchema from "@/modules/utils/models/user-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Gujarathi",
  description:
    "I'm Sagar Gujarathi, a third-year student currently pursuing a BTech in CSE from Anurag University",
};

interface ILayoutType {
  children: ReactNode;
  params: Promise<IParamsType>;
}

const Layout = async ({ children, params }: ILayoutType) => {
  const user = (await params).user;

  const data = await userSchema.findOne({ username: user });

  return (
    <body
      className={`${inter.className} antialiased bg-design2-background-main`}
    >
      <Header user={user} />
      <main>{children}</main>
      <Footer data={data} />
    </body>
  );
};

export default Layout;
