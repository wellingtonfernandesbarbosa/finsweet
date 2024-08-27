import { Link, useLocation } from "react-router-dom";

import styles from "./UpcomingSermonsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { Label1, Label2 } from "../Label";
import { Heading2 } from "../Heading";

import Angels from "./assets/a-man-and-woman-wearing-angel-costumes.webp";
import Arrow from "./assets/arrow.svg";
import { EventCard } from "../Cards";
import { EventInfo } from "../../interfaces";

const eventInfo: EventInfo = {
  day: 20,
  month: "Julho",
  title: "ASSISTA E OUÇA NOSSOS SERMÕES",
  text: "",
  date1: "Sexta-feira 23:39 IST",
  date2: "Sábado 11:20 ISD",
  local: "Nº 233, Rua Principal, Nova York, Estados Unidos",
};

export default function UpcomingSermonsSection() {
  const location = useLocation().pathname;
  
  return (
    <section className={styles.container}>
      <Label2>Próximos Sermões</Label2>

      <Heading2 theme={ThemeColor.black}>junte-se a nós e faça parte de algo grandioso</Heading2>

      <div className={styles.container__info}>
        <div className={styles.container__info__card}>
          <EventCard backgroundColor={true} upcommingEvent="Próximo evento" {...eventInfo} link="/sermoes/1" />
        </div>
        <div className={styles.container__info__banner}>
          <img src={Angels} alt="Um homem e uma mulher vestindo fantasias de anjo" />
        </div>
      </div>
      {location === "/sermoes" ? (
        ""
      ) : (
        <footer className={styles.container__footer}>
          <Link to="sermoes">
            <Label1>Veja todos os sermões</Label1>
            <img src={Arrow} alt="Ícone de seta" />
          </Link>
        </footer>
      )}
    </section>
  );
}
