import { ROUTER_LINKS } from "../../route-paths";
import CustomLink from "../../components/custom-link";
import { IParamsType } from "@/modules/types";

const Header = ({ user }: IParamsType) => {
  return (
    <header>
      <nav className="fixed top-4 left-[50%] translate-x-[-50%] rounded-full p-[5px] border-[2px] border-solid border-design2-background-dark bg-design2-background-secondary flex gap-[10px] z-50">
        <CustomLink href={ROUTER_LINKS.HOME.replace("{user}", user)}>
          Home
        </CustomLink>

        <CustomLink href={ROUTER_LINKS.ABOUT.replace("{user}", user)}>
          About
        </CustomLink>

        <CustomLink href={ROUTER_LINKS.WORK.replace("{user}", user)}>
          Work
        </CustomLink>

        <CustomLink href={ROUTER_LINKS.CONTACT.replace("{user}", user)}>
          Contact
        </CustomLink>
      </nav>
    </header>
  );
};

export default Header;
