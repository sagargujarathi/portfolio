import About from "./about";
import Follow from "./follow";
import ToolBox from "./toolbox";
import Works from "./works";

const GridSection = () => {
  return (
    <section
      about="Grid Section"
      className="py-[90px] w-max mx-auto flex gap-[22px]"
    >
      <div className="w-[372px] flex flex-col gap-[22px]">
        <ToolBox />

        <About />
      </div>
      <div className="w-[267px] flex flex-col gap-[22px]">
        <Follow />

        <Works />
      </div>
    </section>
  );
};

export default GridSection;
