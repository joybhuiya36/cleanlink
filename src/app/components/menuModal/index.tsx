import React from "react";
import Link from "next/link";
import "./index.scss";
import { IoClose } from "react-icons/io5";

import Button from "../Button";

type Props = {
  closeModal: () => void;
};

const MenuModal = (props: Props) => {
  return (
    <div className="menu">
      <div className="menu__close" onClick={props.closeModal}>
        <IoClose />
      </div>
      <div className="menu__links">
        <Link href="/" className="menu__link">
          Home
        </Link>
        <Link href="/" className="menu__link">
          About us
        </Link>
        <Link href="/" className="menu__link">
          Pricing
        </Link>
        <Link href="/" className="menu__link">
          Contact
        </Link>
      </div>
      <div className="menu__button">
        <Button name="Sign Up" className={`menu__signup `} />
        <Button name="Demo" className={`menu__demo `} />
      </div>
    </div>
  );
};

export default MenuModal;
