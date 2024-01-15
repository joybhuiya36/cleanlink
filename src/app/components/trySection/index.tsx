import React from "react";
import Button from "../button";
import "./index.scss";

type Props = {};

const TrySection = (props: Props) => {
  return (
    <div className="try">
      <div className="try__container">
        <div className="try__text">
          <span className="try__text-hypen">-</span>
          <h3 className="try__text-line">Try for free!</h3>
        </div>
        <Button name="Schedule a Demo" className="try__button" />
      </div>
    </div>
  );
};

export default TrySection;
