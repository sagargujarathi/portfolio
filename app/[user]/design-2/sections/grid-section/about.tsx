import Image from "next/image";

const About = () => {
  return (
    <div className="rounded-2xl border-[2px] border-solid py-[32px] px-[22px] flex-grow bg-design2-background-secondary border-design2-background-dark flex flex-col gap-[32px] relative h-[192px] overflow-hidden">
      <div className="z-[1]">
        <p className="text-[22px] font-semibold text-design2-text-primary-dark">
          About
        </p>
        <p className="text-[13px] font-light text-design2-text-primary-lighter">
          Who I am and what I do
        </p>
      </div>

      {/* BACKGROUND PATTERN */}
      <Image
        src="/images/design-2/about-me-pattern.svg"
        alt="About me background pattern"
        fill
        objectFit="cover"
      />
    </div>
  );
};

export default About;
