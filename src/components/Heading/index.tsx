import { ThemeColor } from "../../enum/ThemeColor";
import styles from "./Heading.module.scss";

export function Heading1({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h1 className={styles.heading1} style={styleText}>
      {children}
    </h1>
  );
}

export function Heading2({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h2 className={styles.heading2} style={styleText}>
      {children}
    </h2>
  );
}

export function Heading3({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h3 className={styles.heading3} style={styleText}>
      {children}
    </h3>
  );
}

export function Heading4({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h4 className={styles.heading4} style={styleText}>
      {children}
    </h4>
  );
}

export function Heading5({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h5 className={styles.heading5} style={styleText}>
      {children}
    </h5>
  );
}

export function Heading6({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeColor;
}) {
  const styleText = {
    color: theme,
  };

  return (
    <h6 className={styles.heading6} style={styleText}>
      {children}
    </h6>
  );
}
