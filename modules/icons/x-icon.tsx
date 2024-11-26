import Image, { ImageProps } from "next/image";
import React from "react";

const XIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/icons/design-2/x-icon.svg" alt="X Icon" {...props} />
);

export default XIcon;
