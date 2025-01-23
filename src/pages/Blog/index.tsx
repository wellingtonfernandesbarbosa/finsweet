import styles from "./Blog.module.scss";

import { useEffect } from "react";

import Button from "../../components/Button";
import { Heading2, Heading4 } from "../../components/Heading";
import { Label2 } from "../../components/Label";
import Paragraph from "../../components/Paragraph";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ThemeColor } from "../../enum/ThemeColor";
import { ButtonSize } from "../../enum/ButtonSize";
import { PostCard } from "../../components/Cards";
import { ButtonType } from "../../enum/ButtonType";


import posts from "../../data/blogPosts.json";
import { Link } from "react-router-dom";

export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const recentPost = posts[posts.length - 1];
  
  return (
    <main className={styles.container}>
      <section className={styles.container__recentPost}>
        <Label2>Nosso Blog</Label2>

        <Heading2 theme={ThemeColor.black}>postagem mais recente</Heading2>

        <div className={styles.container__recentPost__content}>
          <img src={recentPost.image} alt={recentPost.imageAlt} title={recentPost.imageAlt} />

          <div className={styles.container__recentPost__content__info}>
            <div className={styles.container__recentPost__content__info__header}>
              <Label2>{recentPost.date}</Label2>

              <Label2>{recentPost.author}</Label2>
            </div>

            <Heading4 theme={ThemeColor.black}>{recentPost.title}</Heading4>

            <Paragraph textColor={ThemeColor.black}>
              {/* apenas o primeiro parágrafo até o "." */}
              {recentPost.text.split("\n")[0]}
            </Paragraph>

            <Button buttonType={ButtonType.ReactLink} path="/blog" theme={ButtonTheme.light} size={ButtonSize.small}>
              {/* linkar para o post */}
              <Link to={`/blog/${recentPost.id}?${recentPost.title}`} >
              Post completo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.container__blogCardsSection}>
        <Heading2 theme={ThemeColor.black}>TODOS OS POSTS DO BLOG</Heading2>

        <div className={styles.container__blogCardsSection__cards}>
          <ul className={styles.container__blogCardsSection__cards__list}>
            {posts.map((blogPost, index) => <PostCard key={index} link={index} {...blogPost} bgColor={true} />)}
          </ul>
        </div>
      </section>
    </main>
  );
}
