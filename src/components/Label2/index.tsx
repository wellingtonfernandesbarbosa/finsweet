import styles from './Label2.module.scss';

export default function Label2({ children }: { children: React.ReactNode }) {
  return (
    <label className={styles.label2}>
      {children}
    </label>
  );
}