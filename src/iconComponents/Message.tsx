import * as React from "react";
import { SVGProps } from "react";

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeMiterlimit={10}
      d="M26 49.042h28.963v-38H1v38h13v10.444z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M57 41.042h5.963v-38H9V9"
    />
  </svg>
);

export default SvgMessage;
