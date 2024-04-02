import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

import Button from "../Button";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonType } from "../../enum/ButtonType";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { MyLink } from "../MyLink";

interface Routes {
  label: string;
  to: string;
  icon: string;
  iconAlt?: string;
}

const NavBar = () => {

  const routes: Routes[] = [
    {
      label: "Home",
      to: "/",
      icon: "/src/assets/home.png",
      iconAlt: "Home",
    },
    {
      label: "About Us",
      to: "/aboutus",
      icon: "/src/assets/information.png",
      iconAlt: "Information",
    },
    {
      label: "sermon",
      to: "/sermon",
      icon: "/src/assets/sermon.png",
      iconAlt: "Sermon",
    },
    {
      label: "Blog",
      to: "/blog",
      icon: "/src/assets/blog.png",
      iconAlt: "Blog",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__Container}>
        <Link to="/" className={styles.navbar__Container__Logo}>
          {"{Finsweet"}
        </Link>

        <nav id="navbarMenu" className={styles.navbar__Container__Nav} >
          <ul className={styles.navbar__Container__Nav__Items}>
            {routes.map((route, index) => (
              <li key={index}>
                <MyLink route={route} />
              </li>
            ))}
          </ul>

          <div className={styles.navbar__Container__Nav__ContactContainer}>
            <Button buttonType={ButtonType.ReactLink} theme={ButtonTheme.light} path="/contactus" size={ButtonSize.small} icon="/src/assets/contact.png" iconAlt="Contact"
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
