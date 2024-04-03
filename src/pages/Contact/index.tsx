import styles from "./Contact.module.scss";

import { useEffect, useState } from "react";

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

import Banner from "./assets/banner.webp";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent");

    setName("");
    setEmail("");
    setQuery("");
    setMessage("");
  };
  
  return (
    <div className={styles.body}>
      <Header
        title="Get in touch with our CHURCH"
        subtitle="Contact"
        textColor={ThemeColor.white}
        image={Banner}
      />

      <main className={styles.container}>
        <form className={styles.container__form} onSubmit={onSubmitForm}>
          <Heading5 theme={ThemeColor.black}>Contact Form:</Heading5>

          <div className={styles.container__form__input}>
            <input type="text" placeholder="Your full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Query Related" value={query} onChange={(e) => setQuery(e.target.value)} />
            <input type="text" placeholder="Message" className={styles.container__form__input__message} value={message} onChange={(e) => setMessage(e.target.value)} />
            
            <Button
              buttonType={ButtonType.Submit}
              theme={ButtonTheme.light}
              size={ButtonSize.medium}
            >
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
