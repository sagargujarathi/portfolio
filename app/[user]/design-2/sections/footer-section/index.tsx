import LinkedinIcon from "../../../../../modules/icons/linkedin-icon";
import DiscordIcon from "../../../../../modules/icons/discord-icon";
import XIcon from "../../../../../modules/icons/x-icon";
import GithubIcon from "../../../../../modules/icons/github-icon";
import Link from "next/link";
import { ROUTER_LINKS } from "../../route-paths";

const Footer = () => {
  return (
    <footer className="flex justify-between flex-wrap items-center lg:mx-[264px] py-[29px] mt-[60px]">
      <p className="text-[20px] font-semibold text-design2-text-primary-dark">
        Sampath ©️ 2024
      </p>

      <div className="flex gap-3 items-center">
        <a
          href="https://www.linkedin.com/in/gujarathisagar/"
          target="_blank"
          className="hover:opacity-80 transition-all duration-150"
        >
          <LinkedinIcon height={29} width={29} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:opacity-80 transition-all duration-150"
        >
          <DiscordIcon height={29} width={29} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:opacity-80 transition-all duration-150"
        >
          <XIcon height={29} width={29} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:opacity-80 transition-all duration-150"
        >
          <GithubIcon height={29} width={29} />
        </a>
      </div>

      <div className="flex gap-[15px] items-center">
        <Link
          href={ROUTER_LINKS.HOME}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href={ROUTER_LINKS.ABOUT}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          About
        </Link>
        <Link
          href={ROUTER_LINKS.WORK}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Work
        </Link>
        <Link
          href={ROUTER_LINKS.CONTACT}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
