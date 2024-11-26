import { SVGProps } from "react";

interface IStarIconType extends SVGProps<SVGSVGElement> {
  color: string;
}

const StarIcon = ({ color, ...props }: IStarIconType) => (
  <svg
    {...props}
    width={88}
    height={88}
    viewBox="0 0 54 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.18 3.277c1.167-3.749 6.473-3.749 7.64 0l4.243 13.639a4 4 0 0 0 2.505 2.59l13.565 4.716c3.582 1.245 3.582 6.31 0 7.556l-13.565 4.716a4 4 0 0 0-2.505 2.59l-4.244 13.639c-1.166 3.749-6.472 3.749-7.638 0l-4.244-13.639a4 4 0 0 0-2.505-2.59L2.867 31.778c-3.582-1.245-3.582-6.31 0-7.556l13.565-4.716a4 4 0 0 0 2.506-2.59z"
      fill={color}
    />
  </svg>
);

export default StarIcon;
