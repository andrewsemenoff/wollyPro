import * as React from "react";
import { SVGProps } from "react";

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 26.121 27.416"
    fill='currentColor'
    {...props}
  >
    <path d="m25.996 18.504-2.969-10.7a10.644 10.644 0 0 0-20.649.538L.081 18.675a3.426 3.426 0 0 0 3.344 4.168h4.119a5.71 5.71 0 0 0 11.191 0h3.962a3.426 3.426 0 0 0 3.3-4.339Zm-12.857 6.623a3.426 3.426 0 0 1-3.216-2.284h6.431a3.426 3.426 0 0 1-3.216 2.284Zm10.467-5.023a1.134 1.134 0 0 1-.914.451H3.425a1.142 1.142 0 0 1-1.119-1.386l2.3-10.334a8.36 8.36 0 0 1 16.215-.425l2.969 10.7a1.134 1.134 0 0 1-.186 1Z"/>
  </svg>
);

export default SvgBell;
