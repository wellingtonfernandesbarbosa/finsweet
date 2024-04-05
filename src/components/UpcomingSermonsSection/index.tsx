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
  month: "July",
  title: "WATCH AND LISTEN TO OUR SERMONS",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  date1: "Friday 23:39 IST",
  date2: "Saturday 11:20 ISD",
  local: "No 233 Main St. New York, United States",
};

export default function UpcomingSermonsSection() {
  const location = useLocation().pathname;
  
  return (
    <section className={styles.container}>
      <Label2>Upcoming Sermons</Label2>

      <Heading2 theme={ThemeColor.black}>join us and become part of something great</Heading2>

      <div className={styles.container__info}>
        <div className={styles.container__info__card}>
          <EventCard backgroundColor={true} upcommingEvent="Upcoming Event" {...eventInfo} link="/sermon/1" />
        </div>
        <div className={styles.container__info__banner}>
          <img src={Angels} alt="A man and woman wearing angel costumes" />
        </div>
      </div>
      {location === "/sermon" ? "" : <footer className={styles.container__footer}>
        <Link to="sermon">
          <Label1>View all Sermons</Label1>
          <img src={Arrow} alt="Arrow icon" />
        </Link>
      </footer>}
    </section>
  );
}
