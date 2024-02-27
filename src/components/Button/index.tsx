import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { ButtonSize } from '../../enum/ButtonSize';
import { ButtonTheme } from '../../enum/ButtonTheme';

type ButtonProps = {
  children: React.ReactNode;
  path?: string,
  size: ButtonSize,
  theme: ButtonTheme,
  onclick?: () => void,
};

const Button = ({ children, path, size=ButtonSize.medium, theme=ButtonTheme.light, onclick }: ButtonProps) => {
  
  const buttonSize = {
    [ButtonSize.small]: styles.button__small,
    [ButtonSize.medium]: styles.button__medium
  };

  const buttonTheme = {
    [ButtonTheme.light]: styles.button__light,
    [ButtonTheme.dark]: styles.button__dark
  };

  const element = path ?
    <Link to={path} className={styles.button + ' ' + buttonSize[size] + ' ' + buttonTheme[theme]}>{children}</Link>
    : <a className={styles.button + ' ' + buttonSize[size] + ' ' + buttonTheme[theme]} onClick={onclick}>{children}</a>;
  
  return (
    element
  );
};

export default Button;