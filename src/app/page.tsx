import styles from "./page.module.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Jost } from "next/font/google";
import Integration from "./components/Integration";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Key from "./components/Key";
import Customer from "./components/Customer";
import TrySection from "./components/TrySection";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

const jost = Jost({ subsets: ["latin"] });
export default function Home() {
  const menuItems = [
    {
      item: "",
      link: "",
    },
    {
      item: "",
      link: "",
    },
    {
      item: "",
      link: "",
    },
    {
      item: "",
      link: "",
    },
  ];
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
