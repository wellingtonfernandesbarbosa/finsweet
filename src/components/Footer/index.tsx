import { Link } from "react-router-dom";
import { TextColor } from "../../enum/TextColor";
import { Heading4 } from "../Heading";
import styles from "./Footer.module.scss";
import Logo from "./assets/Logo.svg";
import Paragraph from "../Paragraph";
import { Chapter02 } from "../Chapters";
import Facebook from "./assets/facebook.svg";
import Twitter from "./assets/twitter.svg";
import Linkedin from "./assets/linkedin.svg";
import Button from "../Button";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonSize } from "../../enum/ButtonSize";

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
          <Paragraph textColor={TextColor.white}>Quicklinks</Paragraph>
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
            <Link to="/blog">Events</Link>
          </Chapter02>
          <Chapter02>
            <Link to="/blog">Blog</Link>
          </Chapter02>
        </div>

        <div className={styles.footer__links__connect}>
          <Paragraph textColor={TextColor.white}>Connect</Paragraph>
          <ul>
            <li>
              <a href="https://facebook.com/">
                <img src={Facebook} alt="Facebook logo" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src={Twitter} alt="Twitter logo" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/">
                <img src={Linkedin} alt="Linkedin logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__subscribe}>
        <Heading4 theme={TextColor.white}>
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
