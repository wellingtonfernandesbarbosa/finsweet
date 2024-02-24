import styles from "./Blog.module.scss";

import Button from "../../components/Button";
import { Heading2, Heading4 } from "../../components/Heading";
import { Label2 } from "../../components/Label";
import Paragraph from "../../components/Paragraph";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ThemeColor } from "../../enum/ThemeColor";
import { ButtonSize } from "../../enum/ButtonSize";

import ChildrenReadingTheBible from "./assets/childrenReadingTheBible.png";
import { BlogPostCard } from "../../interfaces";
import { PostCard } from "../../components/Cards";

const blogPostCards: BlogPostCard[] = [
  {
    id: 0,
    title: "THE BEST WAY TO INSPIRE PEOPLE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 1,
    title: "HOW TO SHOW COMPASSION",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 2,
    title: "THE BIBLICAL PURPOSE OF MONEY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 3,
    title: "THE BEST WAY TO INSPIRE PEOPLE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 4,
    title: "WHAT IT MEANS TO BE A DISCIPLE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 5,
    title: "WHAT IT MEANS TO BELIEVE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
  {
    id: 6,
    title: "the modern chruch in 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2018",
  },
];

export default function Blog() {
  return (
    <main className={styles.container}>
      <section className={styles.container__recentPost}>
        <Label2>Our Blog</Label2>

        <Heading2 theme={ThemeColor.black}>most recent post</Heading2>

        <div className={styles.container__recentPost__content}>
          <img src={ChildrenReadingTheBible} alt="Children Reading the Bible" />

          <div className={styles.container__recentPost__content__info}>
            <div
              className={styles.container__recentPost__content__info__header}
            >
              <Label2>Tuesday 13 May, 2022</Label2>
              <Label2>By John Hunau Deo</Label2>
            </div>
            <Heading4 theme={ThemeColor.black}>
              Church was doing what he often did when dropped An oracle{" "}
            </Heading4>
            <Paragraph textColor={ThemeColor.black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </Paragraph>
            <Button
              path="/blog"
              theme={ButtonTheme.light}
              size={ButtonSize.small}
            >
              Read more
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.container__blogCardsSection}>
        <Heading2 theme={ThemeColor.black}>ALL BLOG POSTS</Heading2>

        <div className={styles.container__blogCardsSection__cards}>
          <ul className={styles.container__blogCardsSection__cards__list}>
            {blogPostCards.map((blogPostCard, index) => (
              <PostCard key={index} {...blogPostCard} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
