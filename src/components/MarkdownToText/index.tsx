import styles from "./MarkdownToText.module.scss";

import ReactMarkdown from "react-markdown";

export default function MarkdownToText({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
