import * as React from "react";
import { SVGProps } from "react";

const SvgUser2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 23.333 24"
    {...props}
  >
    <g
      transform="translate(-3 1)"
      fill="currentFill"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        data-name="Path 38138"
        d="M25.333 22v-2.667A5.333 5.333 0 0 0 20 14H9.333A5.333 5.333 0 0 0 4 19.333V22"
      />
      <circle
        data-name="Ellipse 176"
        cx={5}
        cy={5}
        r={5}
        transform="translate(9.333)"
      />
    </g>
  </svg>
);

export default SvgUser2;
