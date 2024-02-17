import styles from './Chapters.module.scss';

export const Chapter03 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className={styles.chapter03}>{children}</p>
  );
};