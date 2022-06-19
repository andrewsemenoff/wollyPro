import * as React from "react";
import { SVGProps } from "react";

const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 26"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4.667 1 1 5.8v16.8A2.423 2.423 0 0 0 3.444 25h17.112A2.423 2.423 0 0 0 23 22.6V5.8L19.333 1ZM1 5h22" />
      <path d="M16 11a4 4 0 0 1-8 0" />
    </g>
  </svg>
);

export default SvgShoppingBag;
