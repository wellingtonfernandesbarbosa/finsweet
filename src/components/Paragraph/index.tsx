import { TextColor } from '../../enum/TextColor';
import styles from "./Paragraph.module.scss";

interface TextProps {
  children: React.ReactNode
  textColor: TextColor
}

export default function Paragraph({ children, textColor }: TextProps) {
  const styleText = {
    color: textColor,
  };

  return (
    <p className={styles.text} style={styleText}>
      {children}
    </p>
  );
}
