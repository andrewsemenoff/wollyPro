import * as React from "react";
import { SVGProps } from "react";

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 29.48 25.43"
    fill='currentColor'
    {...props}
  >
     <g fill="currentColor">
    <path
      d="M14.818 24.93a.559.559 0 0 1-.262-.057.57.57 0 0 1-.262-.285L.648 7.135a.57.57 0 0 1 0-.7l4.765-5.7A.57.57 0 0 1 5.743.5h18.4a.57.57 0 0 1 .3.182l4.435 5.7a.57.57 0 0 1 .1.4.57.57 0 0 1-.125.274L15.171 24.634a.57.57 0 0 1-.353.296ZM10.451 7.34l4.366 14.968L19.172 7.34Zm9.907 0-4.161 14.307L27.289 7.34Zm-18.092 0 11.172 14.307L9.266 7.34ZM21.042 6.2h6.247l-3.26-4.184Zm-10.066 0h7.672l-3.83-4.275Zm-8.664 0h6.311L5.812 2.016Zm13.782-4.56 3.808 4.218 3-4.218Zm-9.12 0 2.782 4.207 3.785-4.207Z"
      stroke="currentColor"
    />
     </g>
  </svg>
);

export default SvgDiamond;
