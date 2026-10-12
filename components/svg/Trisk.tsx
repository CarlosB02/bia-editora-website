import React from 'react';

interface TriskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function Trisk({ size = 50, ...props }: TriskProps) {
  return (
    <svg
      viewBox="-25 -25 50 50"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <defs>
        <path
          id="trisk-arm"
          d="M0 0 C0 -9 10 -15 17 -9 C22 -4 18 3 12 2 C8 1 8 -3 11 -4"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </defs>
      <g stroke="currentColor" fill="none">
        <use href="#trisk-arm" />
        <use href="#trisk-arm" transform="rotate(120)" />
        <use href="#trisk-arm" transform="rotate(240)" />
      </g>
      <circle r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
