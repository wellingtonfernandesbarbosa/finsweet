import styles from "./BlogPost.module.scss";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import posts from "../../../data/blogPosts.json";
import { ThemeColor } from "../../../enum/ThemeColor";
import { Heading2 } from "../../../components/Heading";
import MarkdownToText from "../../../components/MarkdownToText";
import { useUpdateUrl } from "../../../hooks/useUpdateUrl";

export default function BlogPost() {
  const id = Number(useParams().id) - 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!posts[id]) return <div>Post not found</div>;

  const updateUrl = useUpdateUrl;
  updateUrl(posts[id].title);

  return (
    <div className={styles.body}>
      <main className={styles.container}>
        <header className={styles.container__header}>
          <Heading2 theme={ThemeColor.black}>{posts[id].title}</Heading2>
          <div className={styles.container__header__info}>
            <span>{posts[id].date}</span>
            <span>{posts[id].author}</span>
          </div>
        </header>
        <img className={styles.container__image} src={posts[id].image} alt={posts[id].imageAlt} title={posts[id].imageTitle} />
        <MarkdownToText>{posts[id].text}</MarkdownToText>
      </main>
    </div>
  );
}
