import { TextColor } from '../../enum/TextColor';
import styles from './Heading1.module.scss';

export default function Heading1({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading1} style={styleText}>
      {children}
    </h1>
  );
}
