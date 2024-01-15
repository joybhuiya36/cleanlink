import React from "react";
import "./index.scss";
import Button from "../button";
import Image from "next/image";
import line from "@/../public/assets/images/line.png";
import Icon from "../tickIcon";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="pricing">
      <div className="pricing__header">
        <span className="pricing__header__title">Pricing</span>
        <div className="pricing__header__text">
          <h3 className="pricing__header__heading">Our Price</h3>
          <p className="pricing__header__para">
            Projectile helps you collaborate more smoothly and communicate
            better. Projectile helps you collaborate more smoothly and
            communicate better.
          </p>
        </div>
      </div>
      <div className="pricing__body">
        <div className="pricing__body__cart pricing--cart-left">
          <div className="pricing__body__price">
            <div>
              <h3 className="pricing__body__package">Standard</h3>
              <p className="pricing__body__package-para">For solo designer</p>
            </div>
            <Image src={line} alt="Line" width={276} height={2} />
            <div>
              <div className="pricing__price">
                <span className="pricing__price-dollar">$</span>
                <h1 className="pricing__price-usd">29 USD</h1>
              </div>
              <p className="pricing__price-para">per person, per month</p>
            </div>
          </div>
          <div className="pricing__body__features">
            <Lorem color="#398378" />
            <Lorem color="#398378" />
            <Lorem color="#398378" />
          </div>
          <Button
            name="Get Started"
            className={`pricing__body__button ${josefin_sans.className}`}
          />
        </div>

        <div className="pricing__body__cart">
          <div className="pricing__body__price">
            <div>
              <div className="pricing__premium">
                <h3 className="pricing__body__package">Premium</h3>
                <span className="pricing__premium-text">most popular</span>
              </div>
              <p className="pricing__body__package-para">
                For small startup and agency
              </p>
            </div>
            <Image src={line} alt="Line" width={276} height={2} />
            <div>
              <div className="pricing__price">
                <span className="pricing__price-dollar">$</span>
                <h1 className="pricing__price-usd">99 USD</h1>
              </div>
              <p className="pricing__price-para">per person, per month</p>
            </div>
          </div>
          <div className="pricing__body__features">
            <Lorem color="#fff" />
            <Lorem color="#fff" />
            <Lorem color="#fff" />
          </div>
          <Button
            name="Get Started"
            className={`pricing__body__button ${josefin_sans.className}`}
          />
        </div>

        <div className="pricing__body__cart pricing--cart-right">
          <div className="pricing__body__price">
            <div>
              <h3 className="pricing__body__package">Standard</h3>
              <p className="pricing__body__package-para">For solo designer</p>
            </div>
            <Image src={line} alt="Line" width={276} height={2} />
            <div>
              <div className="pricing__price">
                <span className="pricing__price-dollar">$</span>
                <h1 className="pricing__price-usd">29 USD</h1>
              </div>
              <p className="pricing__price-para">per person, per month</p>
            </div>
          </div>
          <div className="pricing__body__features">
            <Lorem color="#398378" />
            <Lorem color="#398378" />
            <Lorem color="#398378" />
          </div>
          <Button
            name="Get Started"
            className={`pricing__body__button ${josefin_sans.className}`}
          />
        </div>
      </div>
    </div>
  );
};

const Lorem = (props: { color: string }) => {
  return (
    <div className="pricing__features__element">
      <Icon color={props.color} />
      <p className="pricing__features__element-para">lorem ipsum dummu text</p>
    </div>
  );
};
export default Pricing;
