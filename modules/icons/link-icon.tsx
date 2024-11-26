import Image, { ImageProps } from "next/image";

const LinkIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/icons/design-2/link-icon.svg" alt="Link" {...props} />
);

export default LinkIcon;
