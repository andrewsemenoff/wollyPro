import * as React from "react";
import { SVGProps } from "react";

const SvgNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>{".next_svg__cls-1{fill:#231f20}"}</style>
    </defs>
    <g data-name="Layer 2" id="next_svg__Layer_2">
      <path
        className="next_svg__cls-1"
        d="M16.88 15.53 7 5.66a1 1 0 0 0-1.41 1.41l9.06 9.06-8.8 8.8a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0l9.61-9.61a.85.85 0 0 0 0-1.2Z"
      />
      <path
        className="next_svg__cls-1"
        d="m26.46 15.53-9.88-9.87a1 1 0 0 0-1.41 1.41l9.06 9.06-8.8 8.8a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l9.62-9.61a.85.85 0 0 0 0-1.2Z"
      />
    </g>
  </svg>
);

export default SvgNext;
