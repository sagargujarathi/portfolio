import Image from "next/image";

const Follow = () => {
  return (
    <div className="rounded-2xl border-[2px] border-solid py-[32px] px-[22px] bg-design2-background-secondary border-design2-background-dark flex flex-col gap-[22px] items-center">
      <Image
        src="/images/my-pic.webp"
        alt="My Picture"
        height={96}
        width={96}
        className="rounded-full"
      />

      <div className="flex flex-col gap-4 items-center">
        <p className="text-[22px] font-semibold text-design2-text-primary-lighter">
          @sampathgujarathi
        </p>

        <button className="py-2 px-[31px] rounded-full bg-design2-background-light text-[17px] font-medium text-design2-text-primary-darker">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Follow;
