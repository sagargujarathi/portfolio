import LinkedinIcon from "../../../../../modules/icons/linkedin-icon";

const ToolBox = () => {
  return (
    <div className="rounded-2xl border-[2px] border-solid py-[32px] px-[22px] bg-design2-background-secondary border-design2-background-dark flex flex-col gap-[32px]">
      <div>
        <p className="text-[22px] font-semibold text-design2-text-primary-dark">
          Toolbox
        </p>
        <p className="text-[13px] font-light text-design2-text-primary-lighter">
          Checkout my favorite tools
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,72px)] gap-[11px]">
        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>

        <div className="aspect-square rounded-[11px] border-[2px] border-solid border-design2-background-dark flex justify-center items-center">
          <LinkedinIcon height={42} width={42} />
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
