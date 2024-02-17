import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { TextColor } from "../../enum/TextColor";
import Button from "../Button";
import { Chapter03 } from "../Chapters";
import { Heading2, Heading5 } from "../Heading";
import {Label2} from "../Label";
import Paragraph from "../Paragraph";
import styles from "./UpcomingSermonsSection.module.scss";
import Angels from "./assets/a-man-and-woman-wearing-angel-costumes.png";
import Clock from "./assets/clock.svg";
import Location from "./assets/location.svg";

export default function UpcomingSermonsSection() {
  return (
    <section className={styles.container}>
      <Label2>Upcoming Sermons</Label2>

      <Heading2 theme={TextColor.black}>
        THE benefits of joining our church
      </Heading2>

      <div className={styles.container__info}>
        <div className={styles.container__info__details}>
          <header className={styles.container__info__details__header}>
            <Chapter03>Upcoming Event</Chapter03>
            <div className={styles.container__info__details__header__date}>
              <Heading5 theme={TextColor.black}>20</Heading5>
              <Label2>July</Label2>
            </div>
          </header>

          <Heading5 theme={TextColor.black}>
            WATCH AND LISTEN TO OUR SERMONS
          </Heading5>

          <Paragraph textColor={TextColor.black}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Paragraph>

          <div className={styles.container__info__details__time}>
            <img src={Clock} alt="Clock icon" />
            <Paragraph textColor={TextColor.black}>
              Friday 23:39 IST
              <br />
              Saturday 11:20 ISD
            </Paragraph>
          </div>
          <div className={styles.container__info__details__location}>
            <img src={Location} alt="Location icon" />
            <Paragraph textColor={TextColor.black}>
              No 233 Main St. New York,
              <br />
              United States
            </Paragraph>
          </div>
          <div className={styles.container__info__details__button}>
            <Button path="/" size={ButtonSize.medium} theme={ButtonTheme.dark}>
              Register
            </Button>
          </div>
        </div>
        <div className={styles.container__info__banner}>
          <img src={Angels} alt="A man and woman wearing angel costumes" />
        </div>
      </div>
    </section>
  );
}
