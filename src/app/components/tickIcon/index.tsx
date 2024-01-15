import React from "react";

type Props = {
  color: string;
};

const Icon = (props: Props) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M6 12.6426L10 16.6426L18 8.64258"
          stroke={props.color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default Icon;
