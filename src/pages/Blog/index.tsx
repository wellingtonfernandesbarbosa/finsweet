import styles from "./Blog.module.scss";

import Button from "../../components/Button";
import { Heading2, Heading4 } from "../../components/Heading";
import { Label2 } from "../../components/Label";
import Paragraph from "../../components/Paragraph";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ThemeColor } from "../../enum/ThemeColor";
import { ButtonSize } from "../../enum/ButtonSize";

import ChildrenReadingTheBible from "./assets/childrenReadingTheBible.png";
import { PostCard } from "../../components/Cards";

import posts from "./posts.json";
import { Link } from "react-router-dom";
import { ButtonType } from "../../enum/ButtonType";

export default function Blog() {
  return (
    <main className={styles.container}>
      <section className={styles.container__recentPost}>
        <Label2>Our Blog</Label2>

        <Heading2 theme={ThemeColor.black}>most recent post</Heading2>

        <div className={styles.container__recentPost__content}>
          <img src={ChildrenReadingTheBible} alt="Children Reading the Bible" />

          <div className={styles.container__recentPost__content__info}>
            <div className={styles.container__recentPost__content__info__header}>
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

            <Button buttonType={ButtonType.ReactLink} path="/blog" theme={ButtonTheme.light} size={ButtonSize.small}>
              Read more
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.container__blogCardsSection}>
        <Heading2 theme={ThemeColor.black}>ALL BLOG POSTS</Heading2>

        <div className={styles.container__blogCardsSection__cards}>
          <ul className={styles.container__blogCardsSection__cards__list}>
            {posts.map((post, index) => ( 
              <Link to={`/blog/${post.id}`} key={index}>
                <PostCard key={index} {...post} />
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
