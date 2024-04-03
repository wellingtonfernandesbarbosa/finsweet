import styles from "./Button.module.scss";

import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  iconActive?: string;
  label?: string;
};

const Button = ({ children, buttonType, path, size = ButtonSize.medium, theme = ButtonTheme.light, icon, iconActive, label }: ButtonProps) => {
  let page = useLocation().pathname;
  page = page.replace("/", "");

  let Icon = icon;
  let textStyle = undefined;

  if (window.matchMedia && window.matchMedia("(max-width: 620px)").matches) {
    if (page === label?.toLowerCase().replace(" ", "")) {
      Icon = iconActive;
      textStyle = {
        color: "var(--primary-color)",
      };
    }
  }

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
      if (!path) return null;
      element = (
        <Link to={path} className={`${styles.button} ${buttonSize[size]} ${buttonTheme[theme]}`} style={textStyle} >
          {Icon &&<img src={Icon} alt={label} />}
          {children}
        </Link>
      );
      break;
    case ButtonType.Anchor:
      element = (
        <a className={`${styles.button} ${buttonSize[size]} ${buttonTheme[theme]}`} >
          {children}
        </a>
      );
      break;

    case ButtonType.Button:
      element = (
        <button className={`${styles.button} ${buttonSize[size]} ${buttonTheme[theme]}`} >
          {children}
        </button>
      );
      break;

    case ButtonType.Submit:
      element = (
        <button type="submit" className={`${styles.button} ${buttonSize[size]} ${buttonTheme[theme]}`}>
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
