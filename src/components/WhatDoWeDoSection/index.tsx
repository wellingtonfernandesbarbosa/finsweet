import styles from './WhatDoWeDoSection.module.scss';
import Heading2 from "../../components/Heading2";
import { WelcomeCard } from "../../components/Cards";
import Pray from "./assets/pray.svg";
import Donate from "./assets/donate.svg";
import Stream from "./assets/stream.svg";
import { TextColor } from '../../enum/TextColor';
import Label2 from '../Label2';

export default function WhatDoWeDoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Label2>Sub-Headline</Label2>
        <Heading2 theme={TextColor.black}>a church that's relevant</Heading2>
      </div>

      <div className={styles.container__cards}>
        <WelcomeCard
          figure={Pray}
          altFigure="Pray"
          title="About us"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?"
        />

        <WelcomeCard
          figure={Stream}
          altFigure="Stream"
          title="Get Involved"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?"
        />

        <WelcomeCard
          figure={Donate}
          altFigure="Donate"
          title="Giving Back"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?"
        />
      </div>
    </section>
  );
}