import Link from "next/link";
import { ROUTER_LINKS } from "../../route-paths";
import { IUserType } from "@/modules/types";
import { LINK_OPTIONS } from "@/modules/constants";

interface IFooterType {
  data: IUserType;
}
const Footer = ({ data }: IFooterType) => {
  const contact = data.contact.map((item) => ({
    ...item,
    ...LINK_OPTIONS.find((x) => x.value === item.value),
  }));

  console.log("meow: ", contact);
  return (
    <footer className="flex justify-between flex-wrap items-center lg:mx-[264px] py-[29px] mt-[60px]">
      <p className="text-[20px] font-semibold text-design2-text-primary-dark">
        {data.basicDetails.firstName} ©️ 2024
      </p>

      <div className="flex gap-3 items-center">
        {contact.map(({ iconLink: Icon, ...item }) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            className="hover:opacity-80 transition-all duration-150"
          >
            {Icon ? <Icon height={29} width={29} /> : null}
          </a>
        ))}
      </div>

      <div className="flex gap-[15px] items-center">
        <Link
          href={ROUTER_LINKS.HOME}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href={ROUTER_LINKS.ABOUT}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          About
        </Link>
        <Link
          href={ROUTER_LINKS.WORK}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Work
        </Link>
        <Link
          href={ROUTER_LINKS.CONTACT}
          className="text-design2-text-primary-lighter text-[12px] font-light underline hover:opacity-80"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
