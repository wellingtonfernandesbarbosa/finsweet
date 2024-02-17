import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { ButtonSize } from '../../enum/ButtonSize';
import { ButtonTheme } from '../../enum/ButtonTheme';

type ButtonProps = {
  children: React.ReactNode;
  path: string,
  size: ButtonSize
  theme: ButtonTheme
};

const Button = ({ children, path, size=ButtonSize.medium, theme=ButtonTheme.light }: ButtonProps) => {
  
  const buttonSize = {
    [ButtonSize.small]: styles.button__small,
    [ButtonSize.medium]: styles.button__medium
  };

  const buttonTheme = {
    [ButtonTheme.light]: styles.button__light,
    [ButtonTheme.dark]: styles.button__dark
  };
  
  return (
    <Link to={path} className={styles.button + ' ' + buttonSize[size] + ' ' + buttonTheme[theme]}>
      {children}
    </Link>
  );
};

export default Button;