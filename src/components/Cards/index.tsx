import styles from "./Cards.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { EventInfo, TeamMember } from "../../interfaces";
import { Heading4, Heading5 } from "../Heading";
import { Label2, Label3 } from "../Label";
import Paragraph from "../Paragraph";
import SocialMediaLinks from "../SocialMediaLinks";

export const WelcomeCard = ({ figure, altFigure, title, text }: { figure: string; altFigure: string; title: string; text: string }) => {
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

export const BenefitsCard = ({ image = "", title = "", text = "" }: BenefitsCardProps) => {
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

interface PostCardProps {
  bgColor?: boolean;
  title: string;
  link?: number;
  description?: string;
  author: string;
  date: string;
}

export const PostCard = ({ title, description, link, author, date }: PostCardProps) => {
  return (
    <li className={styles.PostCard}>
      <div className={styles.PostCard__header}>
        {link == null ? (
          <Heading5 theme={ThemeColor.black}>{title}</Heading5>
        ) : (
          <Link to={`/blog/${link}?${sanitizeString(title)}`}>
            <Heading5 theme={ThemeColor.black}>{title}</Heading5>
          </Link>
        )}
        <Paragraph>{description}</Paragraph>
      </div>

      <div className={styles.PostCard__footer}>
        <Label3>{author}</Label3>
        <Paragraph textColor={ThemeColor.black}>{date}</Paragraph>
      </div>
    </li>
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

import Clock from "../../assets/clock.svg";
import Location from "../../assets/location.svg";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import Button from "../Button";
import { Chapter03 } from "../Chapters";
import { Link } from "react-router-dom";
import { ButtonType } from "../../enum/ButtonType";
import sanitizeString from "../../utils/sanitizeString";

interface EventCardProps {
  backgroundColor?: boolean;
  upcommingEvent?: string;
  link?: string;
  id?: EventInfo["id"];
  description?: EventInfo["description"];
  day: EventInfo["day"];
  month: EventInfo["month"];
  title: EventInfo["title"];
  date1: EventInfo["date1"];
  date2: EventInfo["date2"];
  local: EventInfo["local"];
}

export const EventCard = ({ backgroundColor = false, upcommingEvent = "", link = "", id, day, month, title, description, date1, date2, local }: EventCardProps) => {
  const bgColor: React.CSSProperties =
    backgroundColor === true
      ? {
          backgroundColor: "#FFF5EB",
        }
      : {
          backgroundColor: "var(--white)",
        };
  const cardPadding: React.CSSProperties =
    link == ""
      ? {
          padding: "0px",
        }
      : {
          padding: window.innerWidth > 1210 ? "32px 32px 35px 89px" : "32px",
        };
  const cardStyle = {
    ...bgColor,
    ...cardPadding,
  };

  return (
    <div className={styles.EventCard} style={cardStyle}>
      <div className={styles.EventCard__header}>
        <Chapter03>{upcommingEvent}</Chapter03>
        <div className={styles.EventCard__header__date}>
          <Heading5 theme={ThemeColor.black}>{day}</Heading5>
          <Label2>{month}</Label2>
        </div>
      </div>

      {link == "" ? (
        <Link to={`/sermoes/${id}?${sanitizeString(title)}`}>
          <Heading5 theme={ThemeColor.black}>{title}</Heading5>
        </Link>
      ) : (
        <Heading5 theme={ThemeColor.black}>{title}</Heading5>
      )}

      <div className={styles.EventCard__paragraph}>
        <Paragraph>{description}</Paragraph>
      </div>

      <div className={styles.EventCard__info}>
        <div className={styles.EventCard__info__time}>
          <img src={Clock} alt="Clock icon" />
          <Paragraph textColor={ThemeColor.black}>
            {date1}
            <br />
            {date2}
          </Paragraph>
        </div>
        <div className={styles.EventCard__info__location}>
          <img src={Location} alt="Location icon" />
          <Paragraph textColor={ThemeColor.black}>{local}</Paragraph>
        </div>
      </div>
      {link && (
        <div className={styles.EventCard__button}>
          <Button buttonType={ButtonType.ReactLink} path={link} size={ButtonSize.medium} theme={ButtonTheme.dark}>
            Registre-se
          </Button>
        </div>
      )}
    </div>
  );
};
