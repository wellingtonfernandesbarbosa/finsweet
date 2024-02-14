import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { ButtonSize } from '../../enum/ButtonSize';

type ButtonProps = {
  children: React.ReactNode;
  path: string,
  size: ButtonSize
};

const Button = ({ children, path, size=ButtonSize.medium }: ButtonProps) => {
  
  const buttonSize = {
    [ButtonSize.small]: styles.button__small,
    [ButtonSize.medium]: styles.button__medium
  };
  
  return (
    <Link to={path} className={styles.button + ' ' + buttonSize[size]}>
      {children}
    </Link>
  );
};

export default Button;