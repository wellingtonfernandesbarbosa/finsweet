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
import ChildrenReadingTheBible from "./assets/childrenReadingTheBible.png";

export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <main className={styles.container}>
      <section className={styles.container__recentPost}>
        <Label2>Nosso Blog</Label2>

        <Heading2 theme={ThemeColor.black}>postagem mais recente</Heading2>

        <div className={styles.container__recentPost__content}>
          <img src={ChildrenReadingTheBible} alt="Children Reading the Bible" />

          <div className={styles.container__recentPost__content__info}>
            <div className={styles.container__recentPost__content__info__header}>
              <Label2>Terça-feira, 13 de Maio de 2022</Label2>

              <Label2>Por João Hunau Deo</Label2>
            </div>

            <Heading4 theme={ThemeColor.black}>A Igreja estava fazendo o que muitas vezes fazia quando recebia um oráculo </Heading4>

            <Paragraph textColor={ThemeColor.black}>
              A Igreja reunida buscava orientação em oração e estudo das Escrituras, esperando ouvir a voz de Deus. Durante um culto especial, um membro compartilhou uma palavra profética que trouxe esperança e direcionamento para todos. Foi um momento de
              profunda conexão espiritual e renovação da fé.
            </Paragraph>

            <Button buttonType={ButtonType.ReactLink} path="/blog" theme={ButtonTheme.light} size={ButtonSize.small}>
              Leia mais
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
