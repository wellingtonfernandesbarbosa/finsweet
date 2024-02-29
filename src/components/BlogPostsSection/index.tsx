import styles from "./BlogPostsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { PostCard } from "../Cards";
import { Heading2 } from "../Heading";
import { Label2 } from "../Label";

interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
];

export default function BlogPostsSection() {
  return (
    <section className={styles.container}>
      <Label2>Read our Blog</Label2>
      <Heading2 theme={ThemeColor.black}>SHARE, INSPIRE, INNOVATE</Heading2>

      <ul className={styles.container__cards}>
        {blogPosts.map((blogPost, index) => (
          <PostCard key={index} {...blogPost} bgColor={true} />
        ))}
      </ul>
    </section>
  );
}
