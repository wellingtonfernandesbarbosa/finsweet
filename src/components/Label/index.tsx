import styles from './Label.module.scss';

export function Label1({ children }: { children: React.ReactNode }) {
  return (
    <label className={styles.label1}>
      {children}
    </label>
  );
}

export function Label2({ children }: { children: React.ReactNode }) {
  return (
    <label className={styles.label2}>
      {children}
    </label>
  );
}


export function Label3({ children }: { children: React.ReactNode }) {
  return (
    <label className={styles.label3}>
      {children}
    </label>
  );
}

