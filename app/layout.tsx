import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { connectToDB } from "../modules/utils/database-connect";

export const metadata: Metadata = {
  title: "Sagar Gujarathi",
  description: "Login Page",
};

interface ILayoutType {
  children: ReactNode;
}

const Layout = async ({ children }: ILayoutType) => {
  await connectToDB();

  return (
    <html
      lang="en"
      style={{
        scrollbarGutter: "stable",
        overflowX: "hidden",
        scrollbarWidth: "thin",
      }}
    >
      {children}
    </html>
  );
};

export default Layout;
