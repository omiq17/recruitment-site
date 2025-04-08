import * as React from "react";
import { SVGProps } from "react";
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"1.5rem"}
    height={"1.5rem"}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.5 2.467c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);
export default LocationIcon;
