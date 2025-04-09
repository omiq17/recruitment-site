import * as React from "react";
import { SVGProps } from "react";
const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="#0E2152"
    {...props}
  >
    <path
      fill="currentColor"
      d="M36.667 20.52c0-9.2-7.467-16.666-16.667-16.666-9.2 0-16.667 7.466-16.667 16.666S10.8 37.188 20 37.188c9.2 0 16.667-7.466 16.667-16.666ZM20 22.188h-6.667v-3.333H20v-5l6.667 6.666L20 27.188v-5Z"
    />
  </svg>
);
export default RightArrowIcon;
