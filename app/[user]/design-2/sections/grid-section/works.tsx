import Image from "next/image";

const Works = () => {
  return (
    <div className="rounded-2xl border-[2px] border-solid pt-[32px] px-[22px] bg-design2-background-secondary border-design2-background-dark flex flex-col gap-[32px]">
      <div>
        <p className="text-[22px] font-semibold text-design2-text-primary-dark">
          Toolbox
        </p>
        <p className="text-[13px] font-light text-design2-text-primary-lighter">
          Checkout my favorite tools
        </p>
      </div>

      {/* PATTERN */}

      <Image
        src="/images/design-2/works-pattern.webp"
        alt="Pattern"
        width={224}
        height={139}
      />
    </div>
  );
};

export default Works;
