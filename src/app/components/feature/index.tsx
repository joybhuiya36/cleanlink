"use client";
import React, { useState } from "react";
import FeatureCart from "../FeatureCart";
import "./index.scss";
import BGImage from "@/../public/assets/images/BG_Pattern_2.png";
import Image from "next/image";
import PenIcon from "../PenIcon";
import CartIcon from "../CardIcon";
import CircleIcon from "../CircleIcon";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="feature">
      <div className="feature__content">
        <span className="feature__content__title">Features</span>
        <div className="feature__content__text">
          <h3 className="feature__content__header">
            Get complete visibility and control
          </h3>
          <p className="feature__content__para">
            Projectile helps you collaborate more smoothly and communicate
            better.
          </p>
        </div>
      </div>
      <div className="feature__row">
        <FeatureCart icon={PenIcon} header="Customer management" />
        <FeatureCart icon={CartIcon} header="Quotes and estimates" />
        <FeatureCart icon={CircleIcon} header="Referrals and reviews" />
      </div>
      <div className="feature__row">
        <FeatureCart icon={PenIcon} header="Scheduling" />
        <FeatureCart icon={CartIcon} header="Credit card payment" />
        <FeatureCart icon={CircleIcon} header="Billing and invoicing" />
      </div>
      <Image src={BGImage} alt="BG Image" className="feature__bg" />
    </div>
  );
};

export default Feature;
