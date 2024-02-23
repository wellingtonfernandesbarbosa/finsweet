import styles from "./Sermon.module.scss";

import HeaderImage from "./assets/sermonHeader.png";

import Header from "../../components/Header";
import UpcomingSermonsSection from "../../components/UpcomingSermonsSection";
import SermonEventsSection from "../../components/SermonEventsSection";

import { ThemeColor } from "../../enum/ThemeColor";

export default function Sermon() {
  return (
    <div className={styles.container}>
      <Header
        image={HeaderImage}
        textColor={ThemeColor.black}
        title="take part in OUR SERMON"
        subtitle="SERMON"
      />

      <UpcomingSermonsSection />

      <SermonEventsSection />
    </div>
  );
}
