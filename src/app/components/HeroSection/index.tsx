import "./index.scss";
import Image from "next/image";
import Button from "../Button";
import { Josefin_Sans } from "next/font/google";
import { heroType } from "@/app/types/heroSection.type";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });
const HeroSection = ({ heroHeader, button, images }: heroType) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__header">
          <span className="hero__title">{heroHeader.title}</span>
          <h1 className="hero__heading">
            {heroHeader.heading1}
            <br />
            <span className="hero--hypen">–</span> {heroHeader.heading2}
          </h1>
        </div>
        <div>
          <p className="hero__description">{heroHeader.description}</p>
        </div>
        <Button
          name={button.name}
          className={`hero__button ${josefin_sans.className}`}
          icon={button.icon}
          width={20}
          height={20}
          iconClassName="hero__button-style"
        />
      </div>

      <Image
        src={images.heroImage}
        alt="Hero Image"
        className="hero__bg2"
        width={569}
        height={327}
      />
      <Image
        src={images.backgroundImage}
        alt="Background"
        className="hero__bg1"
        width={802}
        height={791}
      />
    </div>
  );
};

export default HeroSection;
