import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from "./NavBar.module.scss";
import { ButtonSize } from '../../enum/ButtonSize';

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

        <div className={styles.navbar__Items}>
          <ul className={styles.navbar__Nav}>
            {routes.map((route, index) => (
              <Link className={styles.navbar__Link} to={route.to} key={index}>
                {route.label}
              </Link>
            ))}
          </ul>
          
          <Button path='/contactus' size={ButtonSize.small}>CONTACT US</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;