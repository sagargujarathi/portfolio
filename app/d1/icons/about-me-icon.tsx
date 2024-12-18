"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_LINKS } from "../route-paths";
import { IParamsType } from "@/modules/types";

const AboutMeIcon = ({ user }: IParamsType) => {
  const ROUTE = ROUTER_LINKS.ABOUT_ME.replace("{user}", user);
  const isActive = usePathname() === ROUTE;

  return (
    <Link
      href={ROUTE}
      prefetch
      className="transition-all duration-200 hover:opacity-65"
      aria-label="About Me"
    >
      {isActive ? (
        <svg
          width={19}
          height={20}
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-1.785 1.875A6.963 6.963 0 0 0 .75 18.84c0 .64.52 1.16 1.16 1.16h15.18c.64 0 1.16-.52 1.16-1.16a6.963 6.963 0 0 0-6.965-6.965z"
            fill="#fff"
          />
        </svg>
      ) : (
        <svg
          width={19}
          height={20}
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.725 5a3.125 3.125 0 1 0-6.25 0 3.125 3.125 0 0 0 6.25 0M4.6 5a5 5 0 1 1 10 0 5 5 0 0 1-10 0M2.776 18.125h13.648a5.09 5.09 0 0 0-5.039-4.375h-3.57a5.09 5.09 0 0 0-5.04 4.375M.85 18.84a6.963 6.963 0 0 1 6.965-6.965h3.57a6.963 6.963 0 0 1 6.965 6.965c0 .64-.52 1.16-1.16 1.16H2.01c-.64 0-1.16-.52-1.16-1.16"
            fill="#fff"
            fillOpacity={0.75}
          />
        </svg>
      )}
    </Link>
  );
};
export default AboutMeIcon;
