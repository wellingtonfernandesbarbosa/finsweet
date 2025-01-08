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
          Queremos servir ao mundo ao nosso redor
        </Heading2>
        <Paragraph textColor={ThemeColor.black}>
          Estamos comprometidos em fazer a diferença em nossa comunidade e além. Junte-se a nós em nossa missão de impacto positivo.
        </Paragraph>
        <Button buttonType={ButtonType.ReactLink} path="/" theme={ButtonTheme.light} size={ButtonSize.medium}>
          Visitar
        </Button>
      </div>
    </section>
  );
}
