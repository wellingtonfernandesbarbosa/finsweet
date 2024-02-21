import styles from "./SocialMediaLinks.module.scss";
import Facebook from "./assets/facebook.svg";
import FacebookBlack from "./assets/facebookBlack.svg";
import Twitter from "./assets/twitter.svg";
import TwitterBlack from "./assets/twitterBlack.svg";
import LinkedIn from "./assets/linkedin.svg";
import LinkedInBlack from "./assets/linkedinBlack.svg";

import { ThemeColor } from "../../enum/ThemeColor";

export default function SocialMediaLinks({ theme }: { theme: ThemeColor }) {
  let [facebook, twitter, linkedin] = [Facebook, Twitter, LinkedIn];
  
  if (theme === ThemeColor.black) {
    [facebook, twitter, linkedin] = [FacebookBlack, TwitterBlack, LinkedInBlack];
  }

  return (
    <ul className={styles.socialMediaLinks}>
      <li className={styles.socialMediaLinks__item}>
        <a className={styles.socialMediaLinks__link} href="https://twitter.com">
          <img className={styles.socialMediaLinks__logo} src={twitter} alt="Twitter logo" />
        </a>
      </li>

      <li className={styles.socialMediaLinks__item}>
        <a className={styles.socialMediaLinks__link} href="https://facebook.com">
          <img className={styles.socialMediaLinks__logo} src={facebook} alt="Facebook logo" />
        </a>
      </li>
      
      <li className={styles.socialMediaLinks__item}>
        <a className={styles.socialMediaLinks__link} href="https://linkedin.com">
          <img className={styles.socialMediaLinks__logo} src={linkedin} alt="LinkedIn logo" />
        </a>
      </li>
    </ul>
  );
}
