import { TextColor } from "../../enum/TextColor";
import { Heading4, Heading5 } from "../Heading";
import Paragraph from "../Paragraph";
import styles from "./Cards.module.scss";

export const WelcomeCard = ({
  figure,
  altFigure,
  title,
  text,
}: {
  figure: string;
  altFigure: string;
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.WelcomeCard}>
      <img src={figure} alt={altFigure} />

      <div className={styles.WelcomeCard__content}>
        <Heading4 theme={TextColor.black}>{title}</Heading4>
        <Paragraph textColor={TextColor.black}>{text}</Paragraph>
      </div>
    </div>
  );
};

interface BenefitsCardProps {
  image?: string;
  title?: string;
  text?: string;
}

export const BenefitsCard = ({ image = '', title = '', text = '' }: BenefitsCardProps) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.BenefitsCard} style={backgroundImageStyle}>
      <Heading5 theme={TextColor.white}>{title}</Heading5>
      <Paragraph textColor={TextColor.white}>{text}</Paragraph>
    </div>
  );
};