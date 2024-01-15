import Link from "next/link";
import React from "react";
import "./index.scss";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.png";
import message from "@/../public/assets/images/msg.png";
import facebook from "@/../public/assets/images/facebook.png";
import insta from "@/../public/assets/images/insta.png";
import linkedin from "@/../public/assets/images/linkedin.png";
import twitter from "@/../public/assets/images/twitter.png";
import { Open_Sans } from "next/font/google";

type Props = {};
const open_sans = Open_Sans({ subsets: ["latin"] });
const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer__menu">
        <div className="footer__menu-left">
          <Link href="/" className="footer__menu-name">
            Home
          </Link>
          <Link href="/" className="footer__menu-name">
            About
          </Link>
          <Link href="/" className="footer__menu-name">
            Service
          </Link>
          <Link href="/" className="footer__menu-name">
            Portfolio
          </Link>
          <Link href="/" className="footer__menu-name">
            News
          </Link>
          <Link href="/" className="footer__menu-name">
            Contact Us
          </Link>
        </div>
        <div className="footer__menu-right">
          <Link href="/" className="footer__menu-name">
            Terms & Conditions
          </Link>
          <Link href="/" className="footer__menu-name">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="footer__details">
        <div className="footer__about-us">
          <div className="footer__logo">
            <Image src={logo} alt="CleanList" />
            <span className="footer__about-us__logo-text">CleanList</span>
          </div>
          <p className="footer__about-us__para">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
        </div>
        <div className="footer__question">
          <h3 className="footer__question__header">Have you any questions?</h3>
          <div className="footer__question__message">
            <Image src={message} alt="Message Logo" />
            <p className="footer__message__contact">
              <span>+44 123 456 7890</span> <br />
              <span>example@email.com</span>
            </p>
          </div>
        </div>
        <div className="footer__social-media">
          <h3 className={`footer__social-media__text ${open_sans.className}`}>
            Follow us on
          </h3>
          <div className="footer__social-media__logo">
            <Image src={facebook} alt="facebook" />
            <span className="footer__social-media__logo-text">Facebook</span>
          </div>
          <div className="footer__social-media__logo">
            <Image src={twitter} alt="twitter" />
            <span className="footer__social-media__logo-text">Twitter</span>
          </div>
          <div className="footer__social-media__logo">
            <Image src={linkedin} alt="linkedin" />
            <span className="footer__social-media__logo-text">LinkedIn</span>
          </div>
          <div className="footer__social-media__logo">
            <Image src={insta} alt="insta" />
            <span className="footer__social-media__logo-text">Instagram</span>
          </div>
        </div>
      </div>
      <div className={`footer__copyright ${open_sans}`}>
        Copyright © 2022. Brilworks . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
