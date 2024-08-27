import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";

import Button from "../Button";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonType } from "../../enum/ButtonType";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { MyLink } from "../MyLink";

import home from "./assets/home.png";
import homeActive from "./assets/home-active.png";

import aboutUs from "./assets/aboutUs.png";
import aboutUsActive from "./assets/aboutUs-active.png";

import blog from "./assets/blog.png";
import blogActive from "./assets/blog-active.png";

import sermon from "./assets/sermon.png";
import sermonActive from "./assets/sermon-active.png";

import contact from "./assets/contact.png";
import contactActive from "./assets/contact-active.png";

interface Routes {
  label: string;
  to: string;
  icon: string;
  iconActive: string;
}

const NavBar = () => {
  const routes: Routes[] = [
    {
      label: "Inicio",
      to: "/",
      icon: home,
      iconActive: homeActive,
    },
    {
      label: "Sobre Nós",
      to: "/sobrenos",
      icon: aboutUs,
      iconActive: aboutUsActive,
    },
    {
      label: "Sermões",
      to: "/sermoes",
      icon: sermon,
      iconActive: sermonActive,
    },
    {
      label: "Blog",
      to: "/blog",
      icon: blog,
      iconActive: blogActive,
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__Container}>
        <Link to="/" className={styles.navbar__Container__Logo}>
          {"{Finsweet"}
        </Link>

        <nav id="navbarMenu" className={styles.navbar__Container__Nav}>
          <ul className={styles.navbar__Container__Nav__Items}>
            {routes.map((route, index) => (
              <li key={index}>
                <MyLink route={route} />
              </li>
            ))}
          </ul>

          <div className={styles.navbar__Container__Nav__ContactContainer}>
            <Button buttonType={ButtonType.ReactLink} theme={ButtonTheme.light} path="/contato" size={ButtonSize.small} icon={contact} iconActive={contactActive} label="Contact Us">
              Contato
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
