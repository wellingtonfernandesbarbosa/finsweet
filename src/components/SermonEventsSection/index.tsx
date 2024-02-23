import { ThemeColor } from "../../enum/ThemeColor";
import { EventInfo } from "../../interfaces";
import { EventCard } from "../Cards";
import { Heading2 } from "../Heading";
import styles from "./SermonEventsSection.module.scss";

const events: EventInfo[] = [
  {
    day: 20,
    month: "July",
    title: "100 random acts of kindness",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?",
    time1: "Friday 10:00 IST",
    time2: "Saturday 10:00 ISD",
    local: "No 233 Main St. New York, United States",
  },
  {
    day: 20,
    month: "July",
    title: "Faith is a process, not a destination",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?",
    time1: "Friday 10:00 IST",
    time2: "Saturday 10:00 ISD",
    local: "No 233 Main St. New York, United States",
  },
  {
    day: 20,
    month: "July",
    title: "there is nothing impossible",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?",
    time1: "Friday 10:00 IST",
    time2: "Saturday 10:00 ISD",
    local: "No 233 Main St. New York, United States",
  },
  {
    day: 20,
    month: "July",
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?",
    time1: "Friday 10:00 IST",
    time2: "Saturday 10:00 ISD",
    local: "No 233 Main St. New York, United States",
  },
];

export default function SermonEventsSection() {
  return (
    <section className={styles.container}>
      <Heading2 theme={ThemeColor.black}>View All Events</Heading2>

      <ul className={styles.container__cards}>
        {events.map((event, index) => (
          <li key={index}>
            <EventCard {...event} backgroundColor = {true} />
          </li>
        ))}
      </ul>
    </section>
  );
}
