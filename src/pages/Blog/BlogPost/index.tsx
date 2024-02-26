import styles from "./BlogPost.module.scss";

import posts from "../posts.json";
import { useParams } from "react-router-dom";
import { ThemeColor } from "../../../enum/ThemeColor";
import { Heading2 } from "../../../components/Heading";
import MarkdownToText from "../../../components/MarkdownToText";

export default function BlogPost() {
  const id = Number(useParams().id) - 1;
  if (!posts[id]) return <div>Post not found</div>;
  
  return (
    <body className={styles.body}>
      <main className={styles.container}>
        <header className={styles.container__header}>
          <Heading2 theme={ThemeColor.black}>{posts[id].title}</Heading2>
          <div className={styles.container__header__info}>
            <p>{posts[id].date}</p>
            <p>{posts[id].author}</p>
          </div>
        </header>
        <img src={posts[id].image} alt="" />
        <MarkdownToText>{posts[id].text}</MarkdownToText>
      </main>
    </body>
  );
}