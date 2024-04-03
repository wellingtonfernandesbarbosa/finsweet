import styles from "./Header.module.scss";

import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";
import { ThemeColor } from "../../enum/ThemeColor";
import Button from "../Button";
import { Chapter01 } from "../Chapters";
import { Heading1 } from "../Heading";
import Paragraph from "../Paragraph";

interface HeaderProps {
  title: string;
  subtitle: string;
  text?: string;
  buttonText?: string;
  image: string;
  textColor: ThemeColor;
}

export default function Header({
  buttonText = "",
  title = "",
  subtitle,
  text = "",
  image,
  textColor = ThemeColor.white,
}: HeaderProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className={styles.header} style={backgroundImageStyle}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {subtitle !== "" && <Chapter01 textColor={textColor}>{subtitle}</Chapter01>}

          {title !== "" && <Heading1 theme={textColor}>{title}</Heading1>}

          {buttonText !== "" && (
            <Button buttonType={ButtonType.ReactLink} theme={ButtonTheme.light} path="/aboutus" size={ButtonSize.medium}>
              {buttonText}
            </Button>
          )}

          {text !== "" &&
            <div className={styles.header__text}>
              <Paragraph textColor={textColor}>{text}</Paragraph>
            </div>}
        </div>
      </div>
    </header>
  );
}
