import Image from "next/image";
import StarIcon from "../../assets/icons/star-icon";
import localFont from "next/font/local";

export const paytone = localFont({
  src: [
    {
      path: "../../../../../public/fonts/paytone-one/regular.ttf",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--paytone",
});

const HeroSection = () => {
  return (
    <section
      about="Hero Section"
      className="mt-[228px] relative h-[241px] lg:w-[862px] mx-auto mb-[192px]"
    >
      <h1
        className={`${paytone.className} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[67px] w-full text-center text-design2-text-primary-dark`}
      >
        Hi.
        <span className="relative">
          I’m Sampath.
          <Image
            className="absolute bottom-[-25px] right-[20px] z-[-10]"
            src="/images/design-2/design-pattern.webp"
            alt="Hero Pattern"
            width={272}
            height={35}
          />
        </span>{" "}
        <br />A Developer.
      </h1>
      {/* BACKGROUND PATTERN */}
      <Image
        fill
        className="absolute top-0 left-0 overflow-visible z-[-20] scale-110"
        src="/images/design-2/hero-pattern.webp"
        alt="Hero Pattern"
      />
      <StarIcon color="#E8B89C" className="absolute top-[-30px] right-[80px]" />
      <StarIcon color="#A3DCD4" className="absolute top-[141px] left-[70px]" />
    </section>
  );
};

export default HeroSection;
