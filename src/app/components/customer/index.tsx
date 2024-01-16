import React from "react";
import "./index.scss";
import Image from "next/image";

type Props = {
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

const Customer = ({ header, logos }: Props) => {
  return (
    <div className="customer">
      <div className="customer_header">
        <span className="customer__header__title">{header.title}</span>
        <h2 className="customer__header__heading">{header.heading}</h2>
      </div>
      <div className="customer__logos">
        {logos?.map((logo) => (
          <Image
            src={logo.link}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Customer;
