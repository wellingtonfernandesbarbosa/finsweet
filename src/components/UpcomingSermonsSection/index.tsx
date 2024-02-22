import { Link } from "react-router-dom";

import styles from "./UpcomingSermonsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { Label1, Label2 } from "../Label";
import { Heading2 } from "../Heading";

import Angels from "./assets/a-man-and-woman-wearing-angel-costumes.png";
import Arrow from "./assets/arrow.svg";
import { SermonCard } from "../Cards";

export default function UpcomingSermonsSection() {
  return (
    <section className={styles.container}>
      <Label2>Upcoming Sermons</Label2>

      <Heading2 theme={ThemeColor.black}>
        join us and become part of something great
      </Heading2>

      <div className={styles.container__info}>
        <SermonCard />
        <div className={styles.container__info__banner}>
          <img src={Angels} alt="A man and woman wearing angel costumes" />
        </div>
      </div>
      <footer className={styles.container__footer}>
        <Link to="">
          <Label1>View all Sermons</Label1>
          <img src={Arrow} alt="Arrow icon" />
        </Link>
      </footer>
    </section>
  );
}
