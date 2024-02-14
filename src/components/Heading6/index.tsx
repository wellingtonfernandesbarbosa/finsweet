import { TextColor } from '../../enum/TextColor';
import styles from './Heading6.module.scss';

export default function Heading6({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading6} style={styleText}>
      {children}
    </h1>
  );
}
