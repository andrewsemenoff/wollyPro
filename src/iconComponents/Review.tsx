import * as React from "react";
import { SVGProps } from "react";

const SvgReview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m50.92 41.49 10-23.43a1 1 0 0 0-.92-1.39h-5.58a1 1 0 1 0 0 2h4.07L49.34 40.1H18.91l-4.77-21.43h4.32a1 1 0 0 0 0-2h-4.77L13 13.46a1 1 0 0 0-1-.78H4a1 1 0 1 0 0 2h7.2l7.68 34.5a1 1 0 0 0 1 .78H50a1 1 0 0 0 0-2H20.66l-1.31-5.86H50a1 1 0 0 0 .92-.61ZM25.21 61a4.54 4.54 0 1 0 0-9.08 4.54 4.54 0 0 0 0 9.08ZM43.5 51.93a4.54 4.54 0 1 0 4.5 4.53 4.53 4.53 0 0 0-4.5-4.53Z"
      fill="currentColor"
    />
    <path
      d="M36.45 31a14 14 0 1 0 0-28 14 14 0 0 0 0 28Zm-6.78-11.33a1 1 0 0 1 1.41 0L35.45 24V7.55a1 1 0 1 1 2 0V24l4.36-4.37a1 1 0 1 1 1.41 1.42l-6.07 6.07a1.001 1.001 0 0 1-1.42 0l-6.06-6.06a1 1 0 0 1 0-1.39Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReview;
