import Image, { ImageProps } from "next/image";
import React from "react";

const LinkedinIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image
    src="/icons/design-2/linkedin-icon.svg"
    alt="Linkedin Icon"
    {...props}
  />
);

export default LinkedinIcon;
