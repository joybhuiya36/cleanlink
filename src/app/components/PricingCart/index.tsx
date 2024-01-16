"use client";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import line from "@/../public/assets/images/line.png";
import Button from "../Button";
import { PackageFacility } from "../packageFacility";
import "./index.scss";

type Props = {
  packageName: string;
  packageTag?: string;
  packageFor: string;
  priceDescription: string;
  price: number;
  facility: string;
  style: string;
};

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const PricingCart = ({
  packageName,
  packageTag,
  packageFor,
  price,
  priceDescription,
  facility,
  style,
}: Props) => {
  const [color, setColor] = useState("#398378");
  return (
    <div
      className={`pricing-cart__body__cart ${style}`}
      onMouseOver={() => setColor("#fff")}
      onMouseLeave={() => setColor("#398378")}
    >
      <div className="pricing-cart__body__package">
        <div>
          <div className="pricing-cart__premium">
            <h3 className="pricing-cart__body__packageName">{packageName}</h3>
            {packageTag && (
              <span className="pricing-cart__premium-text">{packageTag}</span>
            )}
          </div>
          <p className="pricing-cart__body__package-description">
            {packageFor}
          </p>
        </div>
        <Image
          src={line}
          alt="Line"
          width={276}
          height={2}
          className="pricing-cart__line"
        />
        <div>
          <div className="pricing-cart__price">
            <span className="pricing-cart__price-dollar">$</span>
            <h1 className="pricing-cart__price-usd">{price} USD</h1>
          </div>
          <p className="pricing-cart__price-description">{priceDescription}</p>
        </div>
      </div>
      <div className="pricing-cart__body__features">
        <PackageFacility color={color} text={facility} />
        <PackageFacility color={color} text={facility} />
        <PackageFacility color={color} text={facility} />
      </div>
      <Button
        name="Get Started"
        className={`pricing-cart__body__button ${josefin_sans.className}`}
      />
    </div>
  );
};

export default PricingCart;
