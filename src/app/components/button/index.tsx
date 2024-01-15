import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  name: string;
  icon?: string;
  width?: number;
  height?: number;
  iconClassName?: string;
};

const Button = (props: Props) => {
  return (
    <button className={props?.className}>
      <span>{props.name}</span>
      {props?.icon && (
        <Image
          src={`${props?.icon}`}
          alt="icon"
          width={props.width}
          height={props.height}
          className={props?.iconClassName}
        />
      )}
    </button>
  );
};

export default Button;
