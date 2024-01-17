import React from "react";
import LaunchIcon from "../LaunchIcon";
import "./index.scss";

type Props = {
  header: string;
  description: string;
};

const KeyCart = ({ header, description }: Props) => {
  return (
    <div className="key-cart">
      <LaunchIcon />
      <div className="key-cart__text">
        <h3 className={`key-cart__header`}>{header}</h3>
        <p className={`key-cart__description`}>{description}</p>
      </div>
    </div>
  );
};

export default KeyCart;
