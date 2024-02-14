import { TextColor } from '../../enum/TextColor';
import styles from './Heading5.module.scss';

export default function Heading5({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading5} style={styleText}>
      {children}
    </h1>
  );
}
