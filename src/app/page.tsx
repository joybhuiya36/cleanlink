import styles from "./page.module.scss";
import Header from "./components/header";
import HeroSection from "./components/hero_section";
import { Jost } from "next/font/google";
import Integration from "./components/integration";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Key from "./components/key";
import Customer from "./components/customer";
import TrySection from "./components/trySection";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";

const jost = Jost({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={`${styles.main} ${jost.className}`}>
      <Header />
      <HeroSection />
      <Integration />
      <Feature />
      <Pricing />
      <Key />
      <Testimonial />
      <Customer />
      <TrySection />
      <Footer />
    </main>
  );
}
