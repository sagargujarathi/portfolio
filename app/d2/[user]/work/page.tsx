import { paytone } from "../../sections/hero-section";

const WorkPage = () => {
  return (
    <section
      about="Work and Projects"
      className="flex flex-col gap-[60px] lg:mx-[264px] pt-[153px]"
    >
      <h1
        className={`${paytone.className} text-[67px] font-normal text-design2-text-primary-dark`}
      >
        Work & Projects
      </h1>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-[58px] px-7 pt-7 rounded-2xl border border-solid border-design2-background-dark bg-design2-background-secondary">
          <div className="flex justify-between flex-grow">
            <div>
              <p className="text-[20px] font-semibold text-design2-text-primary-dark">
                Project Title
              </p>
              <p className="text-[12px] font-light text-design2-text-primary-lighter">
                A description of my project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
