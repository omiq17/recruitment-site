import * as React from "react";
import { SVGProps } from "react";
const PoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"1.5rem"}
    height={"1.5rem"}
    {...props}
  >
    <g transform="translate(0, -1.5)">
      <path
        fill="currentColor"
        d="M3.5 6.467h18v12h-18v-12Zm9 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-5-1a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2h-10Z"
      />
    </g>
  </svg>
);
export default PoundIcon;
