import { TextColor } from "../../enum/TextColor";
import {Label2} from "../Label";
import styles from "./BenefitsSection.module.scss";
import Num from "./assets/num.png";
import HoldingBible from "./assets/holdingBible.png";
import StainedGlass from "./assets/stainedGlass.png";
import ManReadingBible from "./assets/manReadingBible.png";
import { BenefitsCard } from "../Cards";
import { Heading2 } from "../Heading";

interface BenefitsCard {
  image: string;
  title: string;
  text?: string;
}

const benefitsCards: BenefitsCard[] = [
  {
    image: Num,
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora?",
  },
  {
    image: ManReadingBible,
    title: "WATCH AND LISTEN TO OUR SERMONS",
  },
  {
    image: HoldingBible,
    title: "WATCH AND LISTEN TO OUR SERMONS",
  },
  {
    image: StainedGlass,
    title: "WATCH AND LISTEN TO OUR SERMONS",
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__content}>
        <Label2>Whatch and Listen</Label2>
        <Heading2 theme={TextColor.black}>
          THE benefits of joining our church
        </Heading2>
        <ul className={styles.container__cards}>
          {benefitsCards.map((benefit, index) => (
            <li key={index}>
              <BenefitsCard
                image={benefit.image}
                title={benefit.title}
                text={benefit.text}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
