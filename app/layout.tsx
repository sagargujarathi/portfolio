import { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";

const exo2 = localFont({
  src: [
    { path: "./fonts/exo-2/black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/exo-2/bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/exo-2/semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/exo-2/medium.ttf", weight: "500", style: "normal" },
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
    <html>
      <body className={`${exo2.className} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
