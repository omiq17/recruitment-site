import * as React from "react";
import { SVGProps } from "react";
const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="#0E2152"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.333 20.52c0 9.2 7.467 16.667 16.667 16.667 9.2 0 16.667-7.466 16.667-16.666S29.2 3.853 20 3.853c-9.2 0-16.667 7.466-16.667 16.666ZM20 18.854h6.667v3.333H20v5l-6.667-6.667L20 13.854v5Z"
    />
  </svg>
);
export default LeftArrowIcon;
