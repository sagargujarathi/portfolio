import Image, { ImageProps } from "next/image";
import React from "react";

const GithubIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/icons/design-2/github-icon.svg" alt="Github Icon" {...props} />
);

export default GithubIcon;
