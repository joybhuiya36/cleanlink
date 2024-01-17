"use client";
import React, { useState } from "react";
import "./index.scss";

type Props = {
  icon: React.ComponentType<any>;
  header: string;
  description: string;
};
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
        <h3 className={`feature-cart__header-text`}>{props.header}</h3>
      </div>
      <p className={`feature-cart__description`}>{props.description}</p>
    </div>
  );
};

export default FeatureCart;
