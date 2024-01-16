import React from "react";
import "./index.scss";
import KeyCart from "../KeyCart";
import { Inter, Josefin_Sans } from "next/font/google";
import Button from "../Button";

type Props = {
  header: {
    title: string;
    heading: string;
    description: string;
  };
  carts: {
    header: string;
    description: string;
  }[];
};
const inter = Inter({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const Key = ({ header, carts }: Props) => {
  return (
    <div className="key">
      <div className="key__header">
        <span className="key__header__title">{header.title}</span>
        <div className="key__header__wrapper">
          <h2 className="key__header__heading">{header.heading}</h2>
          <p className="key__header__description">{header.description}</p>
        </div>
      </div>
      <div className="key__carts">
        <div className="key__carts__wrapper">
          {carts?.map((cart, idx) => (
            <KeyCart
              key={idx}
              header={cart.header}
              description={cart.description}
            />
          ))}
          <div className="key__carts__try">
            <h4 className={`key__carts__try-text ${inter.className}`}>
              Try for Free!
            </h4>
            <Button
              name="Schedule a Demo"
              className={`key__carts__try-button ${josefin_sans.className}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Key;
