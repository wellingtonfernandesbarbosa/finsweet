import { useParams } from "react-router-dom";
import styles from "./SermonEvent.module.scss";
import events from "../../../data/sermons.json";
import MarkdownToText from "../../../components/MarkdownToText";
import { ThemeColor } from "../../../enum/ThemeColor";
import { Heading2, Heading4 } from "../../../components/Heading";
import locationIcon from "../../../assets/location.svg";
import clockIcon from "../../../assets/clock.svg";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
import { ButtonTheme } from "../../../enum/ButtonTheme";
import { ButtonSize } from "../../../enum/ButtonSize";
import SermonEventsSection from "../../../components/SermonEventsSection";

export default function SermonEvent() {
  const param = Number(useParams().id);

  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <section className={styles.container__article}>
          <div className={styles.container__article__content}>
            <img src={events[param].image} alt={events[param].imageAlt} />
            <Heading2 theme={ThemeColor.black}>{events[param].title}</Heading2>
            <MarkdownToText>{events[param].text}</MarkdownToText>
          </div>

          <div className={styles.container__article__register}>
            <form className={styles.container__article__register__form}>
              <Heading4 theme={ThemeColor.black}>Register Now</Heading4>

              <div className={styles.container__article__register__form__info}>
                <div
                  className={
                    styles.container__article__register__form__info__location
                  }
                >
                  <img src={locationIcon} alt="location icon" />
                  <Paragraph textColor={ThemeColor.black}>
                    {events[param].local}
                  </Paragraph>
                </div>

                <div
                  className={
                    styles.container__article__register__form__info__date
                  }
                >
                  <img src={clockIcon} alt="clock icon" />
                  <Paragraph textColor={ThemeColor.black}>
                    {events[param].date1}
                  </Paragraph>
                </div>
              </div>
              <div className={styles.container__article__register__form__input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Leonard John"
                />
              </div>
              <div className={styles.container__article__register__form__input}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="user@abc.com"
                />
              </div>
              <Button
                size={ButtonSize.medium}
                theme={ButtonTheme.light}
                onclick={() => alert("Submitted")}
              >
                Register now
              </Button>
            </form>
          </div>
        </section>

        <SermonEventsSection
          sectionTitle="Upcoming Sermons"
          backgroundColor={false}
        />
      </div>
    </body>
  );
}
