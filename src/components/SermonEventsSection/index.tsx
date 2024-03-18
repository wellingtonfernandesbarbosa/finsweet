import styles from "./SermonEventsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { EventCard } from "../Cards";
import { Heading2 } from "../Heading";

import events from "../../data/sermons.json";

export default function SermonEventsSection({
  backgroundColor = true,
  sectionTitle,
}: {
    backgroundColor: boolean;
    sectionTitle: string;
  }) {
  
  return (
    <section className={styles.container}>
      <Heading2 theme={ThemeColor.black}>{ sectionTitle }</Heading2>

      <ul className={styles.container__cards}>
        {events.map((event, index) => (
          <li key={index}>
            <EventCard
              {...event}
              backgroundColor={backgroundColor}
              id={event.id}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
