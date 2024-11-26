import Image from "next/image";
import { paytone } from "../hero-section";

const AboutMe = () => {
  return (
    <section
      about="About me"
      className="my-[154px] flex flex-col justify-center gap-[67px] lg:mx-[264px]"
    >
      <h1
        className={
          "text-[67px] font-normal text-center text-design2-text-primary-dark " +
          paytone.className
        }
      >
        I’m Sampath.
      </h1>

      <div className="flex gap-[72px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-design2-text-primary-dark text-[24px] font-extrabold">
            {
              "I'm a Front-end Developer working remotely from Hyderabad, India."
            }
          </p>

          <p className="text-design2-text-primary-dark text-[17px] font-semibold">
            {`Over the past 14 years, I've worked in various areas of digital
        design, including front-end development, email, marketing, and app
        UI/UX. I'm proud to have worn many hats. These days, I focus on
        leading design at GiveDirectly, a nonprofit that lets donors send
        money directly to the world's poorest households.`}
          </p>
        </div>

        <div className="min-w-[389px] relative flex justify-end">
          <Image
            src="/images/design-2/dome.webp"
            alt="Dome"
            width={164}
            height={164}
            className="absolute bottom-0 left-0 z-[-3]"
          />

          <Image
            src="/images/my-pic.webp"
            alt="my picture"
            height={307}
            width={307}
            className="h-[307px] w-[307px] aspect-square rounded-t-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
