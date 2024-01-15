import Image from "next/image";
import React from "react";
import LaunchIcon from "../LaunchIcon";
import { Inter } from "next/font/google";
import "./index.scss";

type Props = {
  header: string;
};
const inter = Inter({ subsets: ["latin"] });
const KeyCart = ({ header }: Props) => {
  return (
    <div className="key-cart">
      <LaunchIcon />
      <div className="key-cart__text">
        <h3 className={`key-cart__header ${inter.className}`}>{header}</h3>
        <p className={`key-cart__para ${inter.className}`}>
          Increase online store conversion up to 25% with our online visual
          merchandising interface.
        </p>
      </div>
    </div>
  );
};

export default KeyCart;
