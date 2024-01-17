import "./index.scss";
import Image from "next/image";
import Button from "../Button/index";

type heroType = {
  header: {
    title: string;
    heading1: string;
    heading2: string;
    description: string;
  };
  button: {
    name: string;
    icon: string;
  };
  images: {
    heroImage: {
      link: string;
      height: number;
      width: number;
    };
    backgroundImage: {
      link: string;
      height: number;
      width: number;
    };
  };
};

const HeroSection = ({ header, button, images }: heroType) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__header">
          <span className="hero__title">{header.title}</span>
          <h1 className="hero__heading">
            <div>{header.heading1}</div>
            <div className="hero__heading__with-hypen">
              <span className="hero--hypen">–</span> {header.heading2}
            </div>
          </h1>
        </div>
        <div>
          <p className="hero__description">{header.description}</p>
        </div>
        <Button
          name={button.name}
          className={`hero__button`}
          icon={button.icon}
          width={20}
          height={20}
          iconClassName="hero__button-style"
        />
      </div>

      <Image
        src={images.heroImage.link}
        alt="Hero Image"
        className="hero__bg2"
        width={images.heroImage.width}
        height={images.heroImage.height}
      />
      <Image
        src={images.backgroundImage.link}
        alt="Background"
        className="hero__bg1"
        width={images.backgroundImage.width}
        height={images.backgroundImage.height}
      />
    </div>
  );
};

export default HeroSection;
