import styles from "./BlogPost.module.scss";
import ReactMarkdown from "react-markdown";

import posts from "../posts.json";
import { useParams } from "react-router-dom";
import { ThemeColor } from "../../../enum/ThemeColor";
import { Heading2 } from "../../../components/Heading";

export default function BlogPost() {
  const id = Number(useParams().id) - 1;
  if (!posts[id]) return <div>Post not found</div>;
  
  return (
    <main className={styles.container}>
      <header className={styles.container__header}>
        <Heading2 theme={ThemeColor.black}>{posts[id].title}</Heading2>
        <div className={styles.container__header__info}>
          <p>{posts[id].date}</p>
          <p>{posts[id].author}</p>
        </div>
      </header>
      <img src={posts[id].image} alt="" />
      <div className={styles.container__text}>
        <ReactMarkdown>{posts[id].text}</ReactMarkdown>
      </div>
    </main>
  );
}
