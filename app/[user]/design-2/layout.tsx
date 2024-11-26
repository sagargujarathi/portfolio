import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./sections/header-section";
import { Inter } from "next/font/google";
import Footer from "./sections/footer-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Gujarathi",
  description:
    "I'm Sagar Gujarathi, a third-year student currently pursuing a BTech in CSE from Anurag University",
};

interface ILayoutType {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutType) => {
  return (
    <body
      className={`${inter.className} antialiased bg-design2-background-main`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
