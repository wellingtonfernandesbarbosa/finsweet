import styles from "./SermonEvent.module.scss";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import events from "../../../data/sermons.json";

import MarkdownToText from "../../../components/MarkdownToText";
import { ThemeColor } from "../../../enum/ThemeColor";
import { Heading2, Heading4 } from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
import { ButtonTheme } from "../../../enum/ButtonTheme";
import { ButtonSize } from "../../../enum/ButtonSize";
import SermonEventsSection from "../../../components/SermonEventsSection";
import { ButtonType } from "../../../enum/ButtonType";

import locationIcon from "../../../assets/location.svg";
import clockIcon from "../../../assets/clock.svg";
import { useUpdateUrl } from "../../../hooks/useUpdateUrl";

export default function SermonEvent() {
  const param = Number(useParams().id);

  const updateUrl = useUpdateUrl;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [param]);

  const sermonEvent = events.find((e) => e.id == param);

  if (!sermonEvent) return <div>Event not found</div>;

  updateUrl(sermonEvent.title);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <section className={styles.container__article}>
          <div className={styles.container__article__content}>
            <img src={sermonEvent.image} alt={sermonEvent.imageAlt} />
            <Heading2 theme={ThemeColor.black}>{sermonEvent.title}</Heading2>
            <MarkdownToText>{sermonEvent.text}</MarkdownToText>
          </div>

          <div className={styles.container__article__register}>
            <form className={styles.container__article__register__form}>
              <Heading4 theme={ThemeColor.black}>Register Now</Heading4>

              <div className={styles.container__article__register__form__info}>
                <div className={styles.container__article__register__form__info__location}>
                  <img src={locationIcon} alt="location icon" />
                  <Paragraph textColor={ThemeColor.black}>{sermonEvent.local}</Paragraph>
                </div>

                <div className={styles.container__article__register__form__info__date}>
                  <img src={clockIcon} alt="clock icon" />
                  <Paragraph textColor={ThemeColor.black}>{sermonEvent.date1}</Paragraph>
                </div>
              </div>
              <div className={styles.container__article__register__form__input}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Leonard John" />
              </div>
              <div className={styles.container__article__register__form__input}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="user@abc.com" />
              </div>
              <Button buttonType={ButtonType.Submit} size={ButtonSize.medium} theme={ButtonTheme.light}>
                Register now
              </Button>
            </form>
          </div>
        </section>

        <SermonEventsSection sectionTitle="Upcoming Sermons" backgroundColor={false} />
      </div>
    </div>
  );
}
