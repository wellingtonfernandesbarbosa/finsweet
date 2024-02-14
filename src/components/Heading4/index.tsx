import { TextColor } from '../../enum/TextColor';
import styles from './Heading4.module.scss';

export default function Heading4({ children, theme }: { children: React.ReactNode, theme: TextColor }) {
  const styleText = {
    color: theme
  };

  return (
    <h1 className={styles.heading4} style={styleText}>
      {children}
    </h1>
  );
}
