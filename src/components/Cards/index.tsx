import { TextColor } from "../../enum/TextColor";
import { Heading4, Heading5 } from "../Heading";
import { Label3 } from "../Label";
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

interface BlogPost {
  title: string;
  text: string;
  author: string;
  date: string;
}

export const BlogPost = ({ title, text, author, date }: BlogPost) => {
  return (
    <ul className={styles.BlogPost}>
      <div className={styles.container__content}>
        <Heading5 theme={TextColor.black}>{title}</Heading5>
        <Paragraph textColor={TextColor.black}>{text}</Paragraph>
      </div>
      
      <div className={styles.container__footer}>
        <Label3>{author}</Label3>
        <Paragraph textColor={TextColor.black}>{date}</Paragraph>
      </div>
    </ul>
  );
};
