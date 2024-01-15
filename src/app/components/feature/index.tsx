"use client";
import React, { useState } from "react";
import FeatureCart from "../FeatureCart";
import "./index.scss";
import BGImage from "@/../public/assets/images/BG_Pattern_2.png";
import Image from "next/image";
import PenIcon from "../PenIcon";
import CartIcon from "../CardIcon";
import CircleIcon from "../CircleIcon";

type Props = {
  header: {
    title: string;
    heading: string;
    description: string;
  };
};

const Feature = ({ header }: Props) => {
  return (
    <div className="feature">
      <div className="feature__content">
        <span className="feature__content__title">{header.title}</span>
        <div className="feature__content__text">
          <h3 className="feature__content__header">{header.heading}</h3>
          <p className="feature__content__description">{header.description}</p>
        </div>
      </div>
      <div className="feature__carts-wrapper">
        <FeatureCart icon={PenIcon} header="Customer management" />
        <FeatureCart icon={PenIcon} header="Scheduling" />
        <FeatureCart icon={CartIcon} header="Quotes and estimates" />
        <FeatureCart icon={CartIcon} header="Credit card payment" />
        <FeatureCart icon={CircleIcon} header="Referrals and reviews" />
        <FeatureCart icon={CircleIcon} header="Billing and invoicing" />
      </div>
      <Image src={BGImage} alt="BG Image" className="feature__bg" />
    </div>
  );
};

export default Feature;
