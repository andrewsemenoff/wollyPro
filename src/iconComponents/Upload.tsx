import * as React from "react";
import { SVGProps } from "react";

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>{".upload_svg__cls-1{fill:#35353d}"}</style>
    </defs>
    <g id="upload_svg__Layer_2" data-name="Layer 2">
      <g id="upload_svg__Layer_1-2" data-name="Layer 1">
        <path
          className="upload_svg__cls-1"
          d="M30.18.78 11.4 19.5a2.67 2.67 0 0 0 3.76 3.78L29.28 9.21v41.14a2.67 2.67 0 1 0 5.33 0V9l14.11 14.27a2.67 2.67 0 0 0 3.77 0 2.63 2.63 0 0 0 .79-1.89 2.68 2.68 0 0 0-.77-1.88L34 .79a2.67 2.67 0 0 0-3.78 0Z"
        />
        <path
          className="upload_svg__cls-1"
          d="M56 64H8a8 8 0 0 1-8-8V37.33a2.67 2.67 0 0 1 5.33 0V56A2.67 2.67 0 0 0 8 58.67h48A2.67 2.67 0 0 0 58.67 56V37.33a2.67 2.67 0 0 1 5.33 0V56a8 8 0 0 1-8 8Z"
        />
      </g>
    </g>
  </svg>
);

export default SvgUpload;
