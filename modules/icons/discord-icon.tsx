import Image, { ImageProps } from "next/image";
import React from "react";

const DiscordIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/icons/design-2/discord-icon.svg" alt="Discord Icon" {...props} />
);

export default DiscordIcon;
