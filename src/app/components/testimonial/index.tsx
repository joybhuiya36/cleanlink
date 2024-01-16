import React from "react";
import Button from "../Button";
import "./index.scss";
import { Josefin_Sans } from "next/font/google";
import CommentCart from "../CommentCart";

type Props = {
  header: {
    title: string;
    heading: string;
    description: string;
  };
  carts: {
    name: string;
    comment: string;
    picture: string;
    designation: string;
  }[];
  button: {
    name: string;
  };
};
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const Testimonial = ({ header, carts, button }: Props) => {
  return (
    <div className="testimonial">
      <div className="testimonial__header">
        <span className="testimonial__title">{header.title}</span>
        <div className="testimonial__header__text">
          <h1 className="testimonial__header__heading">{header.heading}</h1>
          <p className="testimonial__header__description">
            {header.description}
          </p>
        </div>
      </div>
      <div className="testimonial__carts">
        <div className="testimonial__carts__gradient"></div>
        {carts?.map((cart, idx) => (
          <CommentCart
            key={idx}
            name={cart.name}
            designation={cart.designation}
            comment={cart.comment}
            picture={cart.picture}
          />
        ))}
      </div>
      <Button
        name={button.name}
        className={`testimonial__button ${josefin_sans}`}
      />
    </div>
  );
};

export default Testimonial;
