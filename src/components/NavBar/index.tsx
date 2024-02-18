import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from "./NavBar.module.scss";
import { ButtonSize } from '../../enum/ButtonSize';
import { ButtonTheme } from '../../enum/ButtonTheme';

interface Routes {
  label: string,
  to: string
}

const NavBar = () => {
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

        <nav className={styles.navbar__Nav}>
          <ul className={styles.navbar__Items}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link className={styles.navbar__Link} to={route.to} key={index}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            theme={ButtonTheme.light}
            path="/contactus"
            size={ButtonSize.small}
          >
            CONTACT US
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;