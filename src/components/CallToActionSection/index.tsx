import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { TextColor } from "../../enum/TextColor";
import Button from "../Button";
import { Heading2 } from "../Heading";
import Paragraph from "../Paragraph";
import styles from "./CallToActionSection.module.scss";

export default function CallToActionSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__content}>
        <Heading2 theme={TextColor.black}>
          We want to serve the world around us
        </Heading2>
        <Paragraph textColor={TextColor.black}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</Paragraph>
        <Button path="/" theme={ButtonTheme.light} size={ButtonSize.medium}>Visit</Button>
      </div>
    </section>
  );
}
