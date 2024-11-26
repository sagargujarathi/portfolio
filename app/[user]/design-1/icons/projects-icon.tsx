"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_LINKS } from "../route-paths";

const ProjectsIcon = () => {
  const ROUTE = ROUTER_LINKS.PROJECTS;
  const isActive = usePathname() === ROUTE;

  return (
    <Link
      href={ROUTE}
      prefetch
      className="transition-all duration-200 hover:opacity-65"
      aria-label="Projects"
    >
      {isActive ? (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.2 5.2V4A3.6 3.6 0 0 1 8.8.4h2.4A3.6 3.6 0 0 1 14.8 4v1.2h2.4a2.4 2.4 0 0 1 2.4 2.4v4.285A27.5 27.5 0 0 1 10 13.6a27.5 27.5 0 0 1-9.6-1.715V7.6a2.4 2.4 0 0 1 2.4-2.4zM7.6 4a1.2 1.2 0 0 1 1.2-1.2h2.4A1.2 1.2 0 0 1 12.4 4v1.2H7.6zm1.2 6A1.2 1.2 0 0 1 10 8.8h.012a1.2 1.2 0 1 1 0 2.4H10A1.2 1.2 0 0 1 8.8 10"
            fill="#fff"
          />
          <path
            d="M.4 14.43v2.77a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4v-2.77A30 30 0 0 1 10 16c-3.356 0-6.585-.551-9.6-1.57"
            fill="#fff"
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
            d="M19.35 12.255a23.9 23.9 0 0 1-9 1.745c-3.183 0-6.22-.62-9-1.745M14.35 5V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01m-7.01 8h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"
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
export default ProjectsIcon;
