import * as React from "react";
import { SVGProps } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 13 22"
    {...props}
  >
    <path
      d="M12 1H9a5 5 0 0 0-5 5v3H1v4h3v8h4v-8h3l1-4H8V6a1 1 0 0 1 1-1h3Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFacebook;
