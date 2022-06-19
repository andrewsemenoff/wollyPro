import * as React from "react";
import { SVGProps } from "react";

const SvgUserProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 26.182 27"
    color="currentColor"
    {...props}
  >
    <g transform="translate(-4 -3)" fill="currentFill">
      <path d="M30.182 30v-3.273a6.545 6.545 0 0 0-6.546-6.545H10.545A6.545 6.545 0 0 0 4 26.727V30" />
      <circle cx={6.136} cy={6.136} r={6.136} transform="translate(10.545 3)" />
    </g>
  </svg>
);

export default SvgUserProfile;
