import { TextColor } from '../../enum/TextColor';
import styles from './Heading2.module.scss';

export default function Heading2({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading2} style={styleText}>
      {children}
    </h1>
  );
}
