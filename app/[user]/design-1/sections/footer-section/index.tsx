import Image from "next/image";

const Footer = () => {
  return (
    <footer className="my-12 flex flex-col gap-20">
      <section
        about="contacts"
        className="p-6 flex flex-col gap-4 items-center rounded-[18px] border-solid border-[1.5px] border-grey-main"
      >
        <h2 className="text-[32px] font-bold text-text-secondary">
          Let’s Work Together
        </h2>
        <p className="text-[16px] font-normal text-text-dark text-center">
          {`I am continually eager to collaborate with remarkable individuals on
          intriguing projects. It's time to transform our concepts into reality!`}
        </p>

        <div className="flex gap-6 justify-center">
          <a
            href="mailto:sagargujarathi108@gmail.com"
            className="cursor-pointer p-6 text-[20px] rounded-[14px] bg-primary-main text-text-main w-max font-semibold hover:opacity-85 transition-all duration-200"
          >
            @ Contact Me
          </a>

          <a
            href="google.com"
            target="_blank"
            className="cursor-pointer h-full bg-background-secondary hover:opacity-75 transition-all duration-200 rounded-[14px] border-solid border-[1px] aspect-square border-grey-main p-6 flex justify-center items-center"
          >
            <Image src="/icons/x-icon.webp" alt="X" height={21} width={21} />
          </a>

          <a
            href="google.com"
            target="_blank"
            className="cursor-pointer h-full bg-background-secondary hover:opacity-75 transition-all duration-200 rounded-[14px] border-solid border-[1px] aspect-square border-grey-main p-6 flex justify-center items-center"
          >
            <Image
              src="/icons/linkedin-icon.webp"
              alt="Linkedin"
              height={21}
              width={21}
            />
          </a>

          <a
            href="google.com"
            target="_blank"
            className="cursor-pointer h-full bg-background-secondary hover:opacity-75 transition-all duration-200 rounded-[14px] border-solid border-[1px] aspect-square border-grey-main p-6 flex justify-center items-center"
          >
            <Image
              src="/icons/instagram-icon.webp"
              alt="Instagram"
              height={21}
              width={21}
            />
          </a>

          <a
            href="google.com"
            target="_blank"
            className="cursor-pointer h-full bg-background-secondary hover:opacity-75 transition-all duration-200 rounded-[14px] border-solid border-[1px] aspect-square border-grey-main py-6 px-[21px] flex justify-center items-center"
          >
            <Image
              src="/icons/discord-icon.webp"
              alt="Discord"
              height={21}
              width={27}
            />
          </a>
        </div>
      </section>

      <p className="text-text-white75 text-[13px] font-medium text-center">
        © 2024 ~ Sampath
      </p>
    </footer>
  );
};

export default Footer;
