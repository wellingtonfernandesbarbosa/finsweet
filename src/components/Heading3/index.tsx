import { TextColor } from '../../enum/TextColor';
import styles from './Heading3.module.scss';

export default function Heading3({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading3} style={styleText}>
      {children}
    </h1>
  );
}
