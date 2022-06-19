import * as React from "react";
import { SVGProps } from "react";

const SvgOk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M51.68 23.35a1.5 1.5 0 0 0-2.74 1.22C54.42 36.38 45.06 50.78 32 50.5A18.52 18.52 0 0 1 13.5 32c-.28-13.06 14.12-22.42 25.93-16.94a1.509 1.509 0 0 0 2-.76 1.489 1.489 0 0 0-.76-2C26.92 5.94 10.18 16.81 10.5 32A21.53 21.53 0 0 0 32 53.5c15.18.32 26.06-16.42 19.68-30.15Z"
      fill="url(#ok_svg__a)"
    />
    <path
      d="M27.74 24.39a1.5 1.5 0 0 0-2.61 1.47l5.56 9.88a1.51 1.51 0 0 0 2.44.24l20-23a1.509 1.509 0 0 0-2.26-2L32.26 32.41l-4.52-8.02Z"
      fill="url(#ok_svg__b)"
    />
    <defs>
      <linearGradient
        id="ok_svg__a"
        x1={10.5}
        y1={31.98}
        x2={53.54}
        y2={31.98}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#19DD33" />
        <stop offset={0.43} stopColor="#0FA922" />
        <stop offset={0.8} stopColor="#088215" />
        <stop offset={1} stopColor="#057310" />
      </linearGradient>
      <linearGradient
        id="ok_svg__b"
        x1={736.318}
        y1={621.977}
        x2={1551.52}
        y2={621.977}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#19DD33" />
        <stop offset={0.43} stopColor="#0FA922" />
        <stop offset={0.8} stopColor="#088215" />
        <stop offset={1} stopColor="#057310" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgOk;
