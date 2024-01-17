import Icon from "../TickIcon/index";
import "./index.scss";

type Props = {
  color: string;
  text: string;
};

export const PackageFacility = ({ color, text }: Props) => {
  return (
    <div className="package-facility__element">
      <Icon color={color} />
      <p className="package-facility__element-description">{text}</p>
    </div>
  );
};
