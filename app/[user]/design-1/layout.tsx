import { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Header from "./sections/header-section";
import Footer from "./sections/footer-section";
const exo2 = localFont({
  src: [
    {
      path: "../../../public/fonts/exo-2/black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/exo-2/bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/exo-2/semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/exo-2/medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],

  variable: "--exo2",
});

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
      className={`${exo2.className} antialiased bg-background-dark lg:w-[1150px] mx-auto`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
