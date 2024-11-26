import { ROUTER_LINKS } from "../../route-paths";
import CustomLink from "../../components/custom-link";

const Header = () => {
  return (
    <header>
      <nav className="fixed top-4 left-[50%] translate-x-[-50%] rounded-full p-[5px] border-[2px] border-solid border-design2-background-dark bg-design2-background-secondary flex gap-[10px] z-50">
        <CustomLink href={ROUTER_LINKS.HOME}>Home</CustomLink>

        <CustomLink href={ROUTER_LINKS.ABOUT}>About</CustomLink>

        <CustomLink href={ROUTER_LINKS.WORK}>Work</CustomLink>

        <CustomLink href={ROUTER_LINKS.CONTACT}>Contact</CustomLink>
      </nav>
    </header>
  );
};

export default Header;
