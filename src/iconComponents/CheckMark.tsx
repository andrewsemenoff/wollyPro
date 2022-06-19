import * as React from "react";
import { SVGProps } from "react";

const SvgCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.837 17.837"
    xmlSpace="preserve"
    width="1.3em"
    height="1.3em"
    {...props}
  >
    <path
      style={{
        fill: "currentColor",
      }}
      d="M16.145 2.571a.7.7 0 0 0-.99 0L6.92 10.804l-4.241-4.27a.698.698 0 0 0-.989 0L.204 8.019a.703.703 0 0 0 0 .99l6.217 6.258a.704.704 0 0 0 .99 0L17.63 5.047a.7.7 0 0 0 0-.994l-1.485-1.482z"
    />
  </svg>
);

export default SvgCheckMark;
