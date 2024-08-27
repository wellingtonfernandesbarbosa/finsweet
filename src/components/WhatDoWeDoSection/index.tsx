import styles from "./WhatDoWeDoSection.module.scss";

import { WelcomeCard } from "../../components/Cards";
import Pray from "./assets/pray.svg";
import Donate from "./assets/donate.svg";
import Stream from "./assets/stream.svg";
import { ThemeColor } from "../../enum/ThemeColor";
import { Heading2 } from "../Heading";

export default function WhatDoWeDoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Heading2 theme={ThemeColor.black}>uma igreja que é relevante</Heading2>
      </div>

      <div className={styles.container__cards}>
        <WelcomeCard figure={Pray} altFigure="Ícone de Orar" title="Sobre Nós" text="Descubra nossa história e missão. Conheça nossa comunidade e como fazemos a diferença na vida das pessoas." />

        <WelcomeCard figure={Stream} altFigure="Ícone de Transmitir" title="Participe" text="Acompanhe nossos cultos online, eventos e grupos de estudo. Conecte-se com outros membros da igreja." />

        <WelcomeCard figure={Donate} altFigure="Ícone de Doar" title="Doe" text="Sua doação é fundamental para que possamos continuar nosso trabalho. Ajude-nos a levar a palavra de Deus a mais pessoas." />
      </div>
    </section>
  );
}
