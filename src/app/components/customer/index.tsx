import React from "react";
import "./index.scss";
import Image from "next/image";
import rotoshow from "@/../public/assets/images/rotashow.png";
import waves from "@/../public/assets/images/waves.png";
import travelers from "@/../public/assets/images/travelers.png";
import goldlines from "@/../public/assets/images/goldlines.png";

type Props = {};

const Customer = (props: Props) => {
  return (
    <div className="customer">
      <div className="customer_header">
        <span className="customer__header__title">Testimonial</span>
        <h2 className="customer__header__heading">Our Customers</h2>
      </div>
      <div className="customer__logos">
        <Image src={rotoshow} alt="" className="logo" />
        <Image src={waves} alt="" />
        <Image src={rotoshow} alt="" />
        <Image src={travelers} alt="" />
        <Image src={goldlines} alt="" />
      </div>
    </div>
  );
};

export default Customer;
