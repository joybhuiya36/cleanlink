import React from "react";
import "./index.scss";
import { Inter } from "next/font/google";
import Image from "next/image";

type Props = {};
const inter = Inter({ subsets: ["latin"] });

const Integration = (props: Props) => {
  return (
    <div className="integration">
      <div className="integration__header">
        <span className="integration__title">Integrations</span>
        <h2 className={`integration__text ${inter.className}`}>
          We are Integrated with industry best service providers
        </h2>
      </div>
      <div className="integration__logos">
        <Image
          src="/assets/images/quickbooks.png"
          alt="quickbooks"
          className="integration__logo-image"
          width={207.764}
          height={40}
        />
        <Image
          src="/assets/images/stripe.png"
          alt="stripe"
          className="integration__logo-image"
          width={96.128}
          height={40}
        />
        <Image
          src="/assets/images/paypal.png"
          alt="paypal"
          className="integration__logo-image"
          width={150.303}
          height={40}
        />
        <Image
          src="/assets/images/venmo.png"
          alt="venmo"
          className="integration__logo-image"
          width={163.333}
          height={30}
        />
      </div>
    </div>
  );
};

export default Integration;
