import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";

type ButtonProps = {
  children: React.ReactNode;
  buttonType: ButtonType;
  path?: string;
  size: ButtonSize;
  theme: ButtonTheme;
  icon?: string;
  iconAlt?: string;
  onclick?: () => void;
};

const Button = ({ children, buttonType, path, size = ButtonSize.medium, theme = ButtonTheme.light, icon, iconAlt, onclick }: ButtonProps) => {
  const buttonSize = {
    [ButtonSize.small]: styles.button__small,
    [ButtonSize.medium]: styles.button__medium,
  };

  const buttonTheme = {
    [ButtonTheme.light]: styles.button__light,
    [ButtonTheme.dark]: styles.button__dark,
  };

  let element;

  switch (buttonType) {
    case ButtonType.ReactLink:
      if (!path) return;
      element = (
        <Link to={path} className={styles.button + " " + buttonSize[size] + " " + buttonTheme[theme]} onClick={onclick}>
          {icon && <img src={icon} alt={iconAlt} />}
          {children}
        </Link>
      );
      break;
    case ButtonType.Anchor:
      element = (
        <a className={styles.button + " " + buttonSize[size] + " " + buttonTheme[theme]} onClick={onclick}>
          {children}
        </a>
      );
      break;
    case ButtonType.Button:
      element = (
        <button className={styles.button + " " + buttonSize[size] + " " + buttonTheme[theme]} onClick={onclick}>
          {children}
        </button>
      );
      break;
    case ButtonType.Submit:
      element = (
        <button type="submit" className={styles.button + " " + buttonSize[size] + " " + buttonTheme[theme]}>
          {children}
        </button>
      );
      break;
    default:
      break;
  }

  return element;
};

export default Button;
