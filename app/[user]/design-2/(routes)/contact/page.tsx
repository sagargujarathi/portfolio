import Image from "next/image";
import { paytone } from "../../sections/hero-section";

const Contact = () => {
  return (
    <section
      about="Work and Projects"
      className="flex flex-col gap-[60px] lg:mx-[264px] pt-[153px]"
    >
      <h1
        className={`${paytone.className} text-[67px] font-normal text-design2-text-primary-dark`}
      >
        Contact
      </h1>

      <form className="flex flex-col gap-[39px]">
        <div>
          <p className="text-[20px] font-medium text-design2-text-primary-lighter">
            Your name
          </p>
          <input
            name="name"
            placeholder="John Doe"
            required
            className="rounded-[10px] bg-[#1A1A1A] w-full p-3 text-primary-light"
            type="text"
          />
        </div>

        <div>
          <p className="text-[20px] font-medium text-design2-text-primary-lighter">
            Email
          </p>
          <input
            name="email"
            required
            placeholder="johndoe@gmail.com"
            className="rounded-[10px] bg-[#1A1A1A] w-full p-3 text-primary-light"
            type="email"
          />
        </div>

        <div>
          <p className="text-[20px] font-medium text-design2-text-primary-lighter">
            Message
          </p>
          <textarea
            name="message"
            required
            placeholder="Let us know what you think."
            className="rounded-[10px] bg-[#1A1A1A] w-full p-3 text-primary-light"
            rows={10}
          />
        </div>

        <button
          type="submit"
          className="transition-all duration-200 hover:opacity-80 bg-design2-accent-primary rounded-full text-[15px] font-semibold flex gap-[10px] w-max px-6 py-[14px] items-center text-design2-text-primary-dark"
        >
          Just Send
          <Image
            src="/icons/design-2/up-icon.svg"
            alt="Up"
            height={24}
            width={24}
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
