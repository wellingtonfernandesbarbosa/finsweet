import { TextColor } from '../../enum/TextColor';
import styles from './Chapters.module.scss';

interface ChapterProps {
  children: React.ReactNode;
  textColor?: TextColor;
}

export const Chapter01 = ({ children, textColor = TextColor.white }: ChapterProps) => {
  const styleText = {
    color: textColor,
  };

  return (
    <p className={styles.chapter01} style={styleText}>{children}</p>
  );
};

export const Chapter02 = ({ children, textColor = TextColor.white }: ChapterProps) => {
  const styleText = {
    color: textColor,
  };
  return <p className={styles.chapter02} style={styleText}>{children}</p>;
};

export const Chapter03 = ({ children, textColor = TextColor.white }: ChapterProps) => {
  const styleText = {
    color: textColor,
  };

  return (
    <p className={styles.chapter03} style={styleText}>{children}</p>
  );
};
