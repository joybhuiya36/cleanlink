import Link from "next/link";
import React from "react";
import "./index.scss";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

type Props = {
  leftMenu: {
    item: string;
    link: string;
  }[];
  rightMenu: {
    item: string;
    link: string;
  }[];
  about: {
    logo: {
      image: string;
      name: string;
      description: string;
    };
    question: {
      text: string;
      icon: string;
      phone: string;
      email: string;
    };
    followItems: {
      name: string;
      icon: string;
    }[];
  };
  copyright: string;
};
const open_sans = Open_Sans({ subsets: ["latin"] });
const Footer = ({ leftMenu, rightMenu, about, copyright }: Props) => {
  return (
    <div className="footer">
      <div className="footer__menu">
        <div className="footer__menu-left">
          {leftMenu?.map((menu, idx) => (
            <Link key={idx} href={menu.link} className="footer__menu-name">
              {menu.item}
            </Link>
          ))}
        </div>
        <div className="footer__menu-right">
          {rightMenu?.map((menu, idx) => (
            <Link key={idx} href={menu.link} className="footer__menu-name">
              {menu.item}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__details">
        <div className="footer__about-us">
          <div className="footer__logo">
            <Image
              src={about?.logo?.image}
              alt="CleanList"
              width={42}
              height={43}
            />
            <span className="footer__about-us__logo-text">
              {about?.logo?.name}
            </span>
          </div>
          <p className="footer__about-us__para">{about?.logo?.description}</p>
        </div>
        <div className="footer__question">
          <h3 className="footer__question__header">{about?.question?.text}</h3>
          <div className="footer__question__message">
            <Image
              src={about?.question?.icon}
              alt="Message Logo"
              width={40}
              height={40}
            />
            <p className="footer__message__contact">
              <span>{about?.question?.phone}</span> <br />
              <span>{about?.question?.email}</span>
            </p>
          </div>
        </div>
        <div className="footer__social-media">
          <h3 className={`footer__social-media__text ${open_sans.className}`}>
            Follow us on
          </h3>
          {about?.followItems.map((item, idx) => (
            <div key={idx} className="footer__social-media__logo">
              <Image src={item.icon} alt={item.name} width={22} height={22} />
              <span className="footer__social-media__logo-text">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`footer__copyright ${open_sans}`}>{copyright}</div>
    </div>
  );
};

export default Footer;
