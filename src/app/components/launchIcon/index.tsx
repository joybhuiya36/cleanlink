import Image from "next/image";
import React from "react";
import launch from "@/../public/assets/images/launch.png";
import "./index.scss";

type Props = {};

const LaunchIcon = (props: Props) => {
  return (
    <div className="launch">
      <Image src={launch} alt="Launch Logo" className="launch__image" />
      <div className="launch__circle"></div>
    </div>
  );
};

export default LaunchIcon;
