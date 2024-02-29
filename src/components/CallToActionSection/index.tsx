import styles from "./CallToActionSection.module.scss";

import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";
import { ThemeColor } from "../../enum/ThemeColor";
import Button from "../Button";
import { Heading2 } from "../Heading";
import Paragraph from "../Paragraph";

export default function CallToActionSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__content}>
        <Heading2 theme={ThemeColor.black}>
          We want to serve the world around us
        </Heading2>
        <Paragraph textColor={ThemeColor.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </Paragraph>
        <Button buttonType={ButtonType.ReactLink} path="/" theme={ButtonTheme.light} size={ButtonSize.medium}>
          Visit
        </Button>
      </div>
    </section>
  );
}
