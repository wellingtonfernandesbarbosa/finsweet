import React from "react";
import styles from "./BenefitsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";

import Num from "./assets/num.png";
import { Page } from "../../enum/Page";

import { Label2 } from "../Label";
import { Heading2, Heading4 } from "../Heading";
import Paragraph from "../Paragraph";

import { BenefitsCard } from "../Cards";

import HoldingBible from "./assets/holdingBible.png";
import StainedGlass from "./assets/stainedGlass.png";
import ManReadingBible from "./assets/manReadingBible.png";

import Bible from "./assets/bible.png";
import HandsUp from "./assets/handsUp.png";
import Inspire from "./assets/inspire.png";
import FullStainedGlass from "./assets/fullStainedGlass.png";

interface BenefitsCard {
  image: string;
  title: string;
  text?: string;
}

interface BenefitsArticle {
  title: string;
  text: string;
  image: string;
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

const benefitsArticles: BenefitsArticle[] = [
  {
    title: "find fulfillment and joy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: Inspire,
  },
  {
    title: "shared values",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: Bible,
  },
  {
    title: "charity events",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: HandsUp,
  },
  {
    title: "All are welcome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: FullStainedGlass,
  },
];

export default function BenefitsSection({
  subtitle,
  page,
  background = "",
}: {
  subtitle: string;
  page: Page;
  background?: string;
}) {
  const backgroundImageStyle: React.CSSProperties =
    background !== "" ? { backgroundColor: background } : {};

  const invertStyle: React.CSSProperties = {
    flexDirection: "row-reverse",
  };

  const containerPdding: React.CSSProperties =
    page === Page.about ? { paddingTop: 0 } : {};

  return (
    <section className={styles.container} style={backgroundImageStyle}>
      <div className={styles.container__content} style={containerPdding}>
        <Label2>{subtitle}</Label2>

        <Heading2 theme={ThemeColor.black}>
          THE benefits of joining our church
        </Heading2>

        {page === Page.home && (
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
        )}

        {page === Page.about && (
          <div className={styles.container__articles}>
            <ul className={styles.container__articles__list}>
              {benefitsArticles.map((article, index) => (
                <li
                  key={index}
                  className={styles.container__articles__list__item}
                >
                  <article style={index % 2 !== 1 ? {} : invertStyle}>
                    <div>
                      <Heading4 theme={ThemeColor.black}>
                        {article.title}
                      </Heading4>

                      <Paragraph textColor={ThemeColor.black}>
                        {article.text}
                      </Paragraph>
                    </div>

                    <div>
                      <img src={article.image} alt={article.title} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
