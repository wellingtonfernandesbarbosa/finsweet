import styles from "./MarkdownToText.module.scss";
import ReactMarkdown from "react-markdown";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export default function MarkdownToText({ children }: { children: string }) {
  const renderers = {
    a: ({ href, children }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <div className={styles.container}>
      <ReactMarkdown components={renderers}>{children}</ReactMarkdown>
    </div>
  );
}
