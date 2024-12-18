import { IParamsType } from "@/modules/types";
import AboutMeIcon from "../../icons/about-me-icon";
import BlogsIcon from "../../icons/blogs-icon";
import HomeIcon from "../../icons/home-icon";
import ProjectsIcon from "../../icons/projects-icon";

const Header = ({ user }: IParamsType) => {
  return (
    <header>
      <nav className="z-20 font-semibold font-exo2 fixed top-4 left-[50%] translate-x-[-50%] bg-grey-80/70 backdrop-blur-[2px] py-4 px-7 rounded-full flex gap-10 items-center">
        <HomeIcon user={user} />
        <AboutMeIcon user={user} />
        <ProjectsIcon user={user} />
        <BlogsIcon user={user} />
      </nav>
    </header>
  );
};

export default Header;
