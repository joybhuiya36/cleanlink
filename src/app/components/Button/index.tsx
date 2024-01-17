"use client";
import React, { useState } from "react";
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
  const [buttonIcon, setButtonIcon] = useState<any>(undefined);
  return (
    <button
      className={props?.className}
      onMouseOver={() => setButtonIcon(props.icon)}
      onMouseLeave={() => setButtonIcon(undefined)}
    >
      <span>{props.name}</span>
      {props?.icon != undefined && buttonIcon != undefined && (
        <Image
          src={buttonIcon}
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
