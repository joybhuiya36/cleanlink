"use client";
import Image from "next/image";
import { Jost, Josefin_Sans } from "next/font/google";
import logo from "@/../public/assets/images/logo.png";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";
import { IoMdMenu } from "react-icons/io";
import MenuModal from "../MenuModal";
import { useState } from "react";

const jost = Jost({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const Header = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image src={logo} alt="CleanLink Logo" className="nav__logo-image" />
        <span className="nav__logo-text">Cleanlist</span>
      </div>
      <div className="nav__menu-bar-mobile">
        <div onClick={() => setModalOpen(true)}>
          <IoMdMenu />
        </div>
        <div className="nav__menu-pop-up">
          {isModalOpen && <MenuModal closeModal={closeModal} />}
        </div>
      </div>
      <div className={`nav__links `}>
        <div>
          <Link href="/" className="nav__link">
            Home
          </Link>
          <Link href="/" className="nav__link">
            About us
          </Link>
          <Link href="/" className="nav__link">
            Pricing
          </Link>
          <Link href="/" className="nav__link">
            Contact
          </Link>
        </div>
        <div className="nav__button">
          <Button name="Sign Up" className={`nav__signup `} />
          <Button name="Demo" className={`nav__demo `} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
