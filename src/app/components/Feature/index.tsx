"use client";
import React, { useState } from "react";
import FeatureCart from "../FeatureCart/index";
import "./index.scss";
import BGImage from "@/../public/assets/images/BG_Pattern_2.png";
import Image from "next/image";

type Props = {
  header: {
    title: string;
    heading: string;
    description: string;
  };
  carts: {
    icon: React.ComponentType<any>;
    header: string;
    description: string;
  }[];
};

const Feature = ({ header, carts }: Props) => {
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
        {carts?.map((cart, idx) => (
          <FeatureCart
            key={idx}
            icon={cart.icon}
            header={cart.header}
            description={cart.description}
          />
        ))}
      </div>
      <Image src={BGImage} alt="BG Image" className="feature__bg" />
    </div>
  );
};

export default Feature;
