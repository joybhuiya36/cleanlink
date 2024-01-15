import "./index.scss";
import Image from "next/image";
import bgImage1 from "@/../public/assets/images/BG_Pattern_1.png";
import dashboard from "@/../public/assets/images/dashboard.png";
import Button from "../button";
import { Josefin_Sans } from "next/font/google";

type Props = {};
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const HeroSection = (props: Props) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__header">
          <span className={`hero__title `}>Bussiness</span>
          <h1 className={`hero__heading `}>
            Every thing to grow your business,
            <br />
            <span className="hero--hypen">–</span> all in one place
          </h1>
        </div>
        <div>
          <p className={`hero__para `}>
            Send invoices, collect payments, text with customers, accept online
            bookings, build a digital presence, and start growing with powerful,
            easy-to-use tools.
          </p>
        </div>
        <Button
          name="Sign Up"
          className={`hero__button ${josefin_sans.className}`}
          icon="/assets/images/arrow.svg"
          width={20}
          height={20}
          iconClassName="hero__button-style"
        />
      </div>

      <Image src={dashboard} alt="Dashboard" className="hero__bg2" />
      <Image src={bgImage1} alt="BG Pattern" className="hero__bg1" />
    </div>
  );
};

export default HeroSection;
