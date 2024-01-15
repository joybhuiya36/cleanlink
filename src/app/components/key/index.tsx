import React from "react";
import "./index.scss";
import KeyCart from "../KeyCart";
import { Inter, Josefin_Sans } from "next/font/google";
import Button from "../Button";

type Props = {};
const inter = Inter({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const Key = (props: Props) => {
  return (
    <div className="key">
      <div className="key__header">
        <span className="key__header__title">Key Aspects</span>
        <div className="key__header__heading-para">
          <h2 className="key__header__heading">
            Get complete visibility and control
          </h2>
          <p className="key__header__para">
            Projectile helps you collaborate more smoothly and communicate
            better. Projectile helps you collaborate more smoothly and
            communicate better.
          </p>
        </div>
      </div>
      <div className="key__points">
        <div className="key__points__row">
          <KeyCart header="Win More Customers" />
          <KeyCart header="Get paid faster" />
          <KeyCart header="Automate boring tasks" />
        </div>
        <div className="key__points__row">
          <KeyCart header="Create and send professional invoices" />
          <KeyCart header="Ask & Collect reviews from customers" />
          <KeyCart header="Access your business from any device" />
        </div>
        <div className="key__points__row">
          <KeyCart header="Schedule your bookings online" />
          <KeyCart header="Contact your customers from one inbox" />
          <div className="key__points__try">
            <h4 className={`key__points__try-text ${inter.className}`}>
              Try for Free!
            </h4>
            <Button
              name="Schedule a Demo"
              className={`key__points__try-button ${josefin_sans.className}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Key;
