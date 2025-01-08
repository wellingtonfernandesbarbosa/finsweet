import styles from "./BlogPostsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { PostCard } from "../Cards";
import { Heading2 } from "../Heading";
import { Label2 } from "../Label";

import posts from "../../data/blogPosts.json";

export default function BlogPostsSection() {
  return (
    <section className={styles.container}>
      <Label2>Leia nosso Blog</Label2>
      <Heading2 theme={ThemeColor.black}>COMPARTILHE, INSPIRE, INOVE</Heading2>

      <ul className={styles.container__cards}>
        {posts.map((blogPost, index) => index < 4 && <PostCard key={index} link={index} {...blogPost}/>)}
      </ul>
    </section>
  );
}
