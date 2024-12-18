"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ICustomType extends LinkProps {
  children: ReactNode;
}
const CustomLink = ({ children, ...props }: ICustomType) => {
  const ROUTE = props.href;
  const isActive = usePathname() === ROUTE;

  return (
    <Link
      {...props}
      className={`py-[12px] px-[27px] cursor-pointer hover:opacity-80 transition-all duration-150 ${
        isActive ? "bg-design2-background-dark" : ""
      } rounded-full text-design2-text-primary-dark font-semibold text-[14px]`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
