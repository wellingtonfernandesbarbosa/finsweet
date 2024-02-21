import styles from "./Cards.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { TeamMember } from "../../types/TeamMenber";
import { Heading4, Heading5 } from "../Heading";
import { Label3 } from "../Label";
import Paragraph from "../Paragraph";
import SocialMediaLinks from "../SocialMediaLinks";

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
        <Heading4 theme={ThemeColor.black}>{title}</Heading4>
        <Paragraph textColor={ThemeColor.black}>{text}</Paragraph>
      </div>
    </div>
  );
};

interface BenefitsCardProps {
  image?: string;
  title?: string;
  text?: string;
}

export const BenefitsCard = ({
  image = "",
  title = "",
  text = "",
}: BenefitsCardProps) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.BenefitsCard} style={backgroundImageStyle}>
      <Heading5 theme={ThemeColor.white}>{title}</Heading5>
      <Paragraph textColor={ThemeColor.white}>{text}</Paragraph>
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
        <Heading5 theme={ThemeColor.black}>{title}</Heading5>
        <Paragraph textColor={ThemeColor.black}>{text}</Paragraph>
      </div>

      <div className={styles.container__footer}>
        <Label3>{author}</Label3>
        <Paragraph textColor={ThemeColor.black}>{date}</Paragraph>
      </div>
    </ul>
  );
};

export const TeamCard = ({ name, role, image }: TeamMember) => {
  return (
    <div className={styles.TeamCard}>
      <img className={styles.TeamCard__image} src={image} alt={name} />
      <div className={styles.TeamCard__content}>
        <Heading5 theme={ThemeColor.black}>{name}</Heading5>
        <Paragraph textColor={ThemeColor.black}>{role}</Paragraph>
        
        <SocialMediaLinks theme={ThemeColor.black} />
      </div>
    </div>
  );
};
