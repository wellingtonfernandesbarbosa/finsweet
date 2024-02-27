import Header from "../../components/Header";
import { ThemeColor } from "../../enum/ThemeColor";
import styles from "./Contact.module.scss";
import Banner from "./assets/banner.png";

export default function Contact() {
  return (
    <body className={styles.body}>
      <Header title="Get in touch with our CHURCH" subtitle="Contact" textColor={ThemeColor.white} image={Banner} />
    </body>
  );
}
