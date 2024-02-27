import Button from "../../components/Button";
import Header from "../../components/Header";
import { Heading5 } from "../../components/Heading";
import { Label3 } from "../../components/Label";
import Paragraph from "../../components/Paragraph";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import { ButtonSize } from "../../enum/ButtonSize";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";
import { ThemeColor } from "../../enum/ThemeColor";
import styles from "./Contact.module.scss";
import Banner from "./assets/banner.png";

export default function Contact() {
  return (
    <div className={styles.body}>
      <Header title="Get in touch with our CHURCH" subtitle="Contact" textColor={ThemeColor.white} image={Banner} />
      <main className={styles.container}>
        <form className={styles.container__form}>
          <Heading5 theme={ThemeColor.black}>Contact Form:</Heading5>
          <div className={styles.container__form__input}>
            <input type="text" placeholder="Your full Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Query Related" />
            <input type="text" placeholder="Message" className={styles.container__form__input__message}/>
            <Button buttonType={ButtonType.Submit} theme={ButtonTheme.light} size={ButtonSize.medium} onclick={() => {alert("Message sent");}}>
              Send Message
            </Button>
          </div>
        </form>
        <div className={styles.container__info}>
          <div className={styles.container__info__location}>
            <Label3>Finsweet</Label3>
            <Heading5 theme={ThemeColor.black}>
              NH 234 Public Square San Francisco 65368
            </Heading5>
          </div>
          <div>
            <Paragraph textColor={ThemeColor.black}>Contact Details</Paragraph>
            <Heading5 theme={ThemeColor.black}>(480) 555-0103</Heading5>
            <Heading5 theme={ThemeColor.black}>finsweet@example.com</Heading5>
          </div>
          <div>
            <Paragraph textColor={ThemeColor.black}>Find us here</Paragraph>
            <SocialMediaLinks theme={ThemeColor.black} />
          </div>
        </div>
      </main>
    </div>
  );
}
