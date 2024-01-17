"use client";
import styles from "./page.module.scss";
import Header from "./components/Header/index";
import HeroSection from "./components/HeroSection/index";
import Integration from "./components/Integration/index";
import Feature from "./components/Feature/index";
import Pricing from "./components/Pricing/index";
import Key from "./components/Key/index";
import Customer from "./components/Customer/index";
import TrySection from "./components/TrySection/index";
import Footer from "./components/Footer/index";
import Testimonial from "./components/Testimonial/index";
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

export default function Home() {
  return (
    <main className={styles.main}>
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
