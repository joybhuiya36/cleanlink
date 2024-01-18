"use client";
import styles from "./page.module.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Integration from "./components/Integration";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Key from "./components/Key";
import Customer from "./components/Customer";
import TrySection from "./components/TrySection";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import { logo, menuItems, headerButtons } from "./data/header";
import { heroHeader, heroButton, heroImages } from "./data/heroSection";
import { integrationHeader, integrationLogos } from "./data/integration";
import { packageData, pricingHeader } from "./data/pricing";
import { featureCart, featureHeader } from "./data/feature";
import { keyCarts, keyHeader } from "./data/key";
import {
  testimonialButton,
  testimonialCarts,
  testimonialHeader,
} from "./data/testimonial";
import { customerHeader, customerLogos } from "./data/customer";
import { tryButton, tryText } from "./data/try";
import {
  copyright,
  footerAbout,
  footerLeftMenu,
  footerRightMenu,
} from "./data/footer";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], display: "swap" });
export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Header menuItems={menuItems} buttons={headerButtons} logo={logo} />
      <HeroSection
        header={heroHeader}
        button={heroButton}
        images={heroImages}
      />
      <Integration header={integrationHeader} logos={integrationLogos} />
      <Feature header={featureHeader} carts={featureCart} />
      <Pricing header={pricingHeader} packageData={packageData} />
      <Key header={keyHeader} carts={keyCarts} />
      <Testimonial
        header={testimonialHeader}
        carts={testimonialCarts}
        button={testimonialButton}
      />
      <Customer header={customerHeader} logos={customerLogos} />
      <TrySection text={tryText} button={tryButton} />
      <Footer
        leftMenu={footerLeftMenu}
        rightMenu={footerRightMenu}
        about={footerAbout}
        copyright={copyright}
      />
    </main>
  );
}
