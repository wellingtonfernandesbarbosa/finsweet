import { TextColor } from "../../enum/TextColor";
import Heading4 from "../Heading4";
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
