"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_LINKS } from "../route-paths";
import { IParamsType } from "@/modules/types";

const BlogsIcon = ({ user }: IParamsType) => {
  const ROUTE = ROUTER_LINKS.BLOGS.replace("{user}", user);
  const isActive = usePathname() === ROUTE;

  return (
    <Link
      href={ROUTE}
      prefetch
      className="transition-all duration-200 hover:opacity-65"
      aria-label="Blogs"
    >
      {isActive ? (
        <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.8 2.8A2.4 2.4 0 0 1 3.2.4h5.503a2.4 2.4 0 0 1 1.697.703L14.497 5.2a2.4 2.4 0 0 1 .703 1.697V17.2a2.4 2.4 0 0 1-2.4 2.4H3.2a2.4 2.4 0 0 1-2.4-2.4zM3.2 10a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H4.4A1.2 1.2 0 0 1 3.2 10m1.2 3.6a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v20H0z" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width={17}
          height={20}
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.35 10h6m-6 4h6m2 5h-10a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V17a2 2 0 0 1-2 2"
            stroke="#fff"
            strokeOpacity={0.75}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
};
export default BlogsIcon;
