import * as React from "react";
import { SVGProps } from "react";

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 26 26"
    {...props}
  >
    <g fill="currentColor">
      <path d="M12 0a12 12 0 0 1 12 12 12 12 0 0 1-12 12A12 12 0 0 1 0 12 12 12 0 0 1 12 0Zm0 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10Z"/>
      <path d="M25 26a1 1 0 0 1-.707-.293l-4.35-4.35a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l4.35 4.35A1 1 0 0 1 25 26Z" />
    </g>
  </svg>
);

export default SvgSearchIcon;
