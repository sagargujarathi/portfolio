"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_LINKS } from "../route-paths";

const HomeIcon = () => {
  const ROUTE = ROUTER_LINKS.HOME;
  const isActive = usePathname() === ROUTE;

  return (
    <Link
      href={ROUTE}
      prefetch
      className="transition-all duration-200 hover:opacity-65"
      aria-label="Home"
    >
      {isActive ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0986 0.351472C10.6299 -0.117157 9.87012 -0.117157 9.4015 0.351472L1.0015 8.75147C0.532867 9.2201 0.532867 9.9799 1.0015 10.4485C1.47013 10.9172 2.22992 10.9172 2.69855 10.4485L3.05002 10.0971V18C3.05002 18.6627 3.58728 19.2 4.25002 19.2H6.65002C7.31277 19.2 7.85002 18.6627 7.85002 18V15.6C7.85002 14.9373 8.38728 14.4 9.05002 14.4H11.45C12.1128 14.4 12.65 14.9373 12.65 15.6V18C12.65 18.6627 13.1873 19.2 13.85 19.2H16.25C16.9128 19.2 17.45 18.6627 17.45 18V10.0971L17.8015 10.4485C18.2701 10.9172 19.0299 10.9172 19.4986 10.4485C19.9672 9.9799 19.9672 9.2201 19.4986 8.75147L11.0986 0.351472Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m1.75 10 2-2m0 0 7-7 7 7m-14 0v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
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
export default HomeIcon;
