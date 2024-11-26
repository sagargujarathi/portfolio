import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      about="Hero section"
      className="pt-[192px] pb-[112px] px-[44px] flex lg:gap-24 items-start justify-between"
    >
      <Image
        src="/images/my-pic.webp"
        alt="My Pic"
        width={208}
        height={208}
        className="rounded-[38px]"
      />

      <div className="flex flex-col gap-5 relative">
        <h1 className="text-[41px] text-primary-main font-black">
          {"Hello, I'm Goat Gujarathi"}
        </h1>

        <p className="text-[18px] font-medium text-text-dark">
          I am 17y/o student and a software developer. I write code in Python,
          Js and Ts Aside from programming, I enjoy listening to music and
          gaming, particularly the Valorant, Rocket League and Fortnite.
        </p>

        <button className="py-[14px] px-[26px] rounded-full text-[16px] bg-primary-main text-text-main w-max font-semibold hover:opacity-85 transition-all duration-200">
          @ Contact
        </button>

        {/* BACKGROUND GRID */}
        <Image
          fill
          src="/images/grid.webp"
          alt="Background Grid"
          loading="lazy"
          className="absolute h-full w-[80%] z-[-5]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
