"use client";
import React, { useState } from "react";
import "./index.scss";
import { Inter } from "next/font/google";

type Props = {
  icon: React.ComponentType<any>;
  header: string;
};
const inter = Inter({ subsets: ["latin"] });
const FeatureCart = (props: Props) => {
  const [iconColor, setIconColor] = useState<string>("#fff");
  return (
    <div
      className={"feature-cart"}
      onMouseOver={() => setIconColor("#000")}
      onMouseLeave={() => setIconColor("#fff")}
    >
      <div className="feature-cart__header">
        <div className="feature-cart__icon">
          <props.icon color={iconColor} />
        </div>
        <h3 className={`feature-cart__header-text ${inter.className}`}>
          {props.header}
        </h3>
      </div>
      <p className={`feature-cart__text ${inter.className}`}>
        Monitor progress against your plans and address deviations faster.
      </p>
    </div>
  );
};

export default FeatureCart;
