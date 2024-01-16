import React from "react";
import "./index.scss";
import PricingCart from "../PricingCart";

type Props = {
  header: {
    title: string;
    heading: string;
    description: string;
  };
  packageData: {
    packageName: string;
    packageTag?: string;
    packageFor: string;
    priceDescription: string;
    price: number;
    facility: string;
    style: string;
  }[];
};

const Pricing = ({ header, packageData }: Props) => {
  return (
    <div className="pricing">
      <div className="pricing__header">
        <span className="pricing__header__title">{header.title}</span>
        <div className="pricing__header__text">
          <h3 className="pricing__header__heading">{header.heading}</h3>
          <p className="pricing__header__description">{header.description}</p>
        </div>
      </div>
      <div className="pricing__body">
        {packageData.map((pricePackage, idx) => (
          <PricingCart
            key={idx}
            packageName={pricePackage.packageName}
            packageTag={pricePackage.packageTag}
            packageFor={pricePackage.packageFor}
            priceDescription={pricePackage.priceDescription}
            price={pricePackage.price}
            facility={pricePackage.facility}
            style={pricePackage.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
