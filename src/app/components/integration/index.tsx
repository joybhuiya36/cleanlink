import React from "react";
import "./index.scss";
import { Inter } from "next/font/google";
import Image from "next/image";

type integrationType = {
  header: {
    title: string;
    heading: string;
  };
  logos: {
    link: string;
    name: string;
    width: number;
    height: number;
  }[];
};
const inter = Inter({ subsets: ["latin"] });

const Integration = ({ header, logos }: integrationType) => {
  return (
    <div className="integration">
      <div className="integration__header">
        <span className="integration__header__title">{header.title}</span>
        <h2 className={`integration__header__heading ${inter.className}`}>
          {header.heading}
        </h2>
      </div>
      <div className="integration__logos">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo.link}
            alt={logo.name}
            className="integration__logo-image"
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Integration;
