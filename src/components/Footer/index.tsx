import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

import Button from "../Button";
import Logo from "./assets/Logo.svg";
import Paragraph from "../Paragraph";
import { Chapter02 } from "../Chapters";
import { Heading4 } from "../Heading";
import { ThemeColor } from "../../enum/ThemeColor";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonSize } from "../../enum/ButtonSize";
import SocialMediaLinks from "../SocialMediaLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__info__header}>
          <Link to="/">
            <img src={Logo} alt="Logo Finsweet" />
          </Link>

          <Chapter02>© Copyright Finsweet 2022</Chapter02>
        </div>

        <div className={styles.footer__info__location}>
          <Chapter02>(480) 555-0103</Chapter02>

          <Chapter02>4517 Washington Ave.</Chapter02>

          <Chapter02>finsweet@example.com</Chapter02>
        </div>
      </div>

      <div className={styles.footer__links}>
        <div>
          <Paragraph textColor={ThemeColor.white}>Quicklinks</Paragraph>
          <Chapter02>
            <Link to="/">Home</Link>
          </Chapter02>
          <Chapter02>
            <Link to="/aboutus">About Us</Link>
          </Chapter02>
          <Chapter02>
            <Link to="/sermon">Sermons</Link>
          </Chapter02>
          <Chapter02>
            <Link to="/sermon">Events</Link>
          </Chapter02>
          <Chapter02>
            <Link to="/blog">Blog</Link>
          </Chapter02>
        </div>

        <div className={styles.footer__links__connect}>
          <Paragraph textColor={ThemeColor.white}>Connect</Paragraph>
          
          <SocialMediaLinks theme={ThemeColor.white} />
        </div>
      </div>

      <div className={styles.footer__subscribe}>
        <Heading4 theme={ThemeColor.white}>
          Subscribe to get Latest Updates and News
        </Heading4>
        <div>
          <input type="email" placeholder="Yourmail@gmail.com" />
          <Button theme={ButtonTheme.light} path="/" size={ButtonSize.small}>
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
}
