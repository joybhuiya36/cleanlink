"use client";
import Image from "next/image";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";
import { IoMdMenu } from "react-icons/io";
import MenuModal from "../MenuModal";
import { useState } from "react";

type headerType = {
  menuItems: {
    item: string;
    link: string;
  }[];
  buttons: {
    name: string;
    link: string;
    style: string;
  }[];
  logo: {
    image: string;
    text: string;
  };
};

const Header = ({ menuItems, buttons, logo }: headerType) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image
          src={logo.image}
          alt={logo.text}
          className="nav__logo-image"
          height={42}
          width={43}
        />
        <span className="nav__logo-text">{logo.text}</span>
      </div>
      <div className="nav__menu-bar-mobile">
        <div onClick={() => setModalOpen(true)}>
          <IoMdMenu />
        </div>
        <div className="nav__menu-pop-up">
          {isModalOpen && <MenuModal closeModal={closeModal} />}
        </div>
      </div>
      <div className="nav__links">
        <div>
          {menuItems.map((menuItem, idx) => (
            <Link key={idx} href={menuItem.link} className="nav__link">
              {menuItem.item}
            </Link>
          ))}
        </div>
        <div className="nav__button">
          {buttons.map((button, idx) => (
            <Button key={idx} name={button.name} className={button.style} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
