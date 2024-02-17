import { TextColor } from "../../enum/TextColor";
import { BlogPost } from "../Cards";
import { Heading2 } from "../Heading";
import { Label2 } from "../Label";
import styles from "./BlogPostsSection.module.scss";

interface BlogPost {
  title: string;
  text: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
  },
];

export default function BlogPostsSection() {
  return (
    <section className={styles.container}>
      <Label2>Read our Blog</Label2>
      <Heading2 theme={TextColor.black}>SHARE, INSPIRE, INNOVATE</Heading2>

      <ul className={styles.container__cards}>
        {blogPosts.map((blogPost, index) => (
          <BlogPost key={index} {...blogPost} />
        ))}
      </ul>
    </section>
  );
}
