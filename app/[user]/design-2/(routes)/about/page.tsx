import AboutMe from "../../sections/about-me-section";

const AboutPage = () => {
  return (
    <>
      <AboutMe />
      <section className="lg:mx-[264px] flex flex-col gap-11 pb-24">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h3 className="text-[17px] text-design2-accent-complement font-medium">
            EXPERIENCE
          </h3>

          <p className="text-[18px] text-design2-text-primary-dark font-medium text-center">
            My work history and <br /> accomplishments timeline.
          </p>
        </div>

        <div className="flex justify-between py-[30px]">
          <p className="text-[19px] text-design2-text-primary-dark font-semibold">
            CodeCraft
          </p>

          <div className="flex flex-col gap-4 max-w-[450px]">
            <p className="text-[19px] text-design2-text-primary-dark font-semibold">
              Frontend Developer III
            </p>

            <p className="text-[17px] text-design2-neutral-darkGray font-normal">
              2023 - Present
            </p>

            <p className="text-[17px] text-design2-neutral-gray font-normal">
              I lead feature development on a team by analyzing requirements,
              designing solutions, and assist in evolving the frontend chapter
              of our organization.
            </p>
          </div>
        </div>

        <div className="flex justify-between py-[30px]">
          <p className="text-[19px] text-design2-text-primary-dark font-semibold">
            CodeCraft
          </p>

          <div className="flex flex-col gap-4 max-w-[450px]">
            <p className="text-[19px] text-design2-text-primary-dark font-semibold">
              Frontend Developer III
            </p>

            <p className="text-[17px] text-design2-neutral-darkGray font-normal">
              2023 - Present
            </p>

            <p className="text-[17px] text-design2-neutral-gray font-normal">
              I lead feature development on a team by analyzing requirements,
              designing solutions, and assist in evolving the frontend chapter
              of our organization.
            </p>
          </div>
        </div>

        <div className="flex justify-between py-[30px]">
          <p className="text-[19px] text-design2-text-primary-dark font-semibold">
            CodeCraft
          </p>

          <div className="flex flex-col gap-4 max-w-[450px]">
            <p className="text-[19px] text-design2-text-primary-dark font-semibold">
              Frontend Developer III
            </p>

            <p className="text-[17px] text-design2-neutral-darkGray font-normal">
              2023 - Present
            </p>

            <p className="text-[17px] text-design2-neutral-gray font-normal">
              I lead feature development on a team by analyzing requirements,
              designing solutions, and assist in evolving the frontend chapter
              of our organization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
