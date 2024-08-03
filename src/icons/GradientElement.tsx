import React from "react";

const GradientElement = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_727_1177)">
        <circle cx="630.5" cy="630.5" r="303.5" fill="#F8B200" />
      </g>
      <g filter="url(#filter1_f_727_1177)">
        <circle cx="681.277" cy="649.493" r="158.146" fill="#F83B00" />
      </g>
      <defs>
        <filter
          id="filter0_f_727_1177"
          x="0.63092"
          y="0.63092"
          width="1259.74"
          height="1259.74"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="163.185"
            result="effect1_foregroundBlur_727_1177"
          />
        </filter>
        <filter
          id="filter1_f_727_1177"
          x="196.762"
          y="164.979"
          width="969.029"
          height="969.029"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="163.185"
            result="effect1_foregroundBlur_727_1177"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GradientElement;
