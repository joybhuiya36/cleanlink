import React from "react";
import Button from "../Button";
import "./index.scss";

type Props = {
  text: string;
  button: {
    name: string;
  };
};

const TrySection = ({ text, button }: Props) => {
  return (
    <div className="try">
      <div className="try__container">
        <div className="try__ellipse-container">
          <div className="try__ellipse-mask"></div>
        </div>
        <div className="try__container__wrapper">
          <div className="try__text">
            <span className="try__text-hypen">-</span>
            <h3 className="try__text-line">{text}</h3>
          </div>
          <Button name={button.name} className="try__button" />
        </div>
      </div>
    </div>
  );
};

export default TrySection;
