import React from "react";

interface Props {
  darkColor: boolean;
}

const SmallLogo = ({ darkColor }: Props) => {
  return (
    <svg
      width="21"
      height="35"
      viewBox="0 0 21 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H7.84018C10.5036 0 15.2302 0 18.2687 4.46403C19.8818 6.7148 20.4445 9.26567 20.4445 11.8916C20.4445 18.4188 17.2559 23.8957 8.25282 23.8957H0V0ZM6.03957 18.4938H8.62795C13.1295 18.4938 14.4049 15.3427 14.4049 11.9666C14.4049 10.6161 14.1048 8.89054 13.242 7.54008C12.5293 6.48972 11.3289 5.36434 8.62795 5.36434H6.00205V18.4938H6.03957Z"
        fill={darkColor ? "#0D0D0D" : "#F9F7F4"}
      />
      <path d="M6.07708 28.8855H0V35.0001H6.07708V28.8855Z" fill="#F8B200" />
    </svg>
  );
};

export default SmallLogo;
