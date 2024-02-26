import ReactMarkdown from "react-markdown";
import styles from "./MarkdownToText.module.scss";

export default function MarkdownToText({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}