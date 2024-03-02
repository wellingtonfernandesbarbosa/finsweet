import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";
import Button from "../Button";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";
import { useEffect, useState } from "react";

interface Routes {
  label: string;
  to: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const menu = document.getElementById("navbarMenu");
      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const routes: Routes[] = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT US",
      to: "/aboutus",
    },
    {
      label: "SERMON",
      to: "/sermon",
    },
    {
      label: "BLOG",
      to: "/blog",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__Container}>
        <Link to="/" className={styles.navbar__Logo}>
          {"{Finsweet"}
        </Link>

        <div className={styles.navbar__MobileMenu} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav
          id="navbarMenu"
          className={`${styles.navbar__Nav} ${isMenuOpen ? styles.open : ""}`}
        >
          <ul className={styles.navbar__Items}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  className={styles.navbar__Link}
                  to={route.to}
                  key={index}
                  onClick={closeMenu}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            buttonType={ButtonType.ReactLink}
            theme={ButtonTheme.light}
            path="/contactus"
            size={ButtonSize.small}
            onclick={closeMenu}
          >
            CONTACT US
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
