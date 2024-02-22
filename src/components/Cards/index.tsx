import styles from "./Cards.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { TeamMember } from "../../types/TeamMenber";
import { Heading4, Heading5 } from "../Heading";
import { Label2, Label3 } from "../Label";
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

import Clock from "./assets/clock.svg";
import Location from "./assets/location.svg";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import Button from "../Button";
import { Chapter03 } from "../Chapters";

export const SermonCard = () => {
  return (
    <div className={styles.sermonCard}>
      <header className={styles.sermonCard__header}>
        <Chapter03>Upcoming Event</Chapter03>
        <div className={styles.sermonCard__header__date}>
          <Heading5 theme={ThemeColor.black}>20</Heading5>
          <Label2>July</Label2>
        </div>
      </header>

      <Heading5 theme={ThemeColor.black}>
        WATCH AND LISTEN TO OUR SERMONS
      </Heading5>

      <Paragraph textColor={ThemeColor.black}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </Paragraph>

      <div className={styles.sermonCard__time}>
        <img src={Clock} alt="Clock icon" />
        <Paragraph textColor={ThemeColor.black}>
          Friday 23:39 IST
          <br />
          Saturday 11:20 ISD
        </Paragraph>
      </div>
      <div className={styles.sermonCard__location}>
        <img src={Location} alt="Location icon" />
        <Paragraph textColor={ThemeColor.black}>
          No 233 Main St. New York,
          <br />
          United States
        </Paragraph>
      </div>
      <div className={styles.sermonCard__button}>
        <Button path="/" size={ButtonSize.medium} theme={ButtonTheme.dark}>
          Register
        </Button>
      </div>
    </div>
  );
};
