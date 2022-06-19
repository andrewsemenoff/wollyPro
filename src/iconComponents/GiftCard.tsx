import * as React from "react";
import { SVGProps } from "react";

const SvgGiftcard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    style={{
      // enableBackground: "new 0 0 50 50",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M40 7c0-3.309-2.691-6-6-6h-4a5.998 5.998 0 0 0-5 2.69A5.996 5.996 0 0 0 20 1h-4c-3.309 0-6 2.691-6 6a5.97 5.97 0 0 0 1.54 4H1v12h2v26h44V23h2V11H38.46A5.97 5.97 0 0 0 40 7zM30 3h4c2.206 0 4 1.794 4 4s-1.794 4-4 4h-8V7c0-2.206 1.794-4 4-4zM12 7c0-2.206 1.794-4 4-4h4c2.206 0 4 1.794 4 4v4h-8c-2.206 0-4-1.794-4-4zm-9 6h17v8H3v-8zm17 34H5V23h15v24zm8 0h-6V13h6v34zm17 0H30V23h15v24zm2-26H30v-8h17v8z" />
  </svg>
);

export default SvgGiftcard;
