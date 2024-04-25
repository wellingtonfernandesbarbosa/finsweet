import styles from "./Footer.module.scss";

import { Link, useLocation } from "react-router-dom";

import Logo from "./assets/Logo.svg";

import Button from "../Button";
import Paragraph from "../Paragraph";
import { Chapter02 } from "../Chapters";
import { Heading4 } from "../Heading";
import { ThemeColor } from "../../enum/ThemeColor";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonSize } from "../../enum/ButtonSize";
import SocialMediaLinks from "../SocialMediaLinks";
import { ButtonType } from "../../enum/ButtonType";

export default function Footer() {
  const pathname = useLocation().pathname;
  const displayWidth = window.innerWidth;
  console.log(displayWidth > 620 && pathname !== "/contactus");
  
  return (
    <footer className={styles.footer}>
      {((displayWidth > 620 && pathname !== "/contactus") || (pathname === "/contactus")) && <div className={styles.footer__container}>
        {pathname !== "/contactus" && (
          <div className={styles.footer__container__info}>
            <div className={styles.footer__container__info__content}>
              <div className={styles.footer__container__info__header}>
                <Link to="/">
                  <img src={Logo} alt="Logo Finsweet" />
                </Link>

                <Chapter02>© Copyright Finsweet 2022</Chapter02>
              </div>

              <div className={styles.footer__container__info__location}>
                <a href="tel:(480) 555-0100" target="_blank">
                  <Chapter02>(480) 555-0103</Chapter02>
                </a>

                <a
                  href="https://www.google.com/maps/@37.9699894,-87.5406932,3a,75y,0.01h,99.11t/data=!3m7!1e1!3m5!1ssLqqkzQnDgkKie7XKNqwLw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DsLqqkzQnDgkKie7XKNqwLw%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D55.36667%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
                  target="_blank"
                >
                  <Chapter02>4517 Washington Ave.</Chapter02>
                </a>

                <a href="mailto:finsweet@example.com" target="_blank">
                  <Chapter02>finsweet@example.com</Chapter02>
                </a>
              </div>
            </div>

            <div className={styles.footer__container__info__links}>
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
            </div>

            <div className={styles.footer__container__info__links__connect}>
              <Paragraph textColor={ThemeColor.white}>Connect</Paragraph>
              <SocialMediaLinks theme={ThemeColor.white} />
            </div>
          </div>
        )}

        <div className={styles.footer__container__subscribe}>
          <Heading4 theme={ThemeColor.white}>Subscribe to get Latest Updates and News</Heading4>
          <div>
            <input type="email" placeholder="Yourmail@gmail.com" />
            <Button buttonType={ButtonType.Submit} theme={ButtonTheme.light} path="/" size={ButtonSize.small}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>}
      <div className={styles.footer__credits}>
        Developed by:{" "}
        <a href="https://github.com/wellingtonfernandesbarbosa" target="_blank">
          Wellington Fernandes
        </a>
      </div>
    </footer>
  );
}
