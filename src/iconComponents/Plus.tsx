import * as React from "react";
import { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(2 2)"
      stroke="#222F3E"
      strokeWidth={4}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={48} cy={48} r={48} />
      <path d="M48 19.192v57.6M76.816 47.984h-57.6" />
    </g>
  </svg>
);

export default SvgPlus;
