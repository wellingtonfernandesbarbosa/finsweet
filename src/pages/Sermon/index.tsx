import styles from "./Sermon.module.scss";

import HeaderImage from "./assets/sermonHeader.png";

import Header from "../../components/Header";
import UpcomingSermonsSection from "../../components/UpcomingSermonsSection";
import SermonEventsSection from "../../components/SermonEventsSection";

import { ThemeColor } from "../../enum/ThemeColor";
import { useEffect } from "react";

export default function Sermon() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className={styles.container}>
      <Header image={HeaderImage} textColor={ThemeColor.black} title="participe do NOSSO SERMÃO" subtitle="Sermão" />

      <UpcomingSermonsSection />

      <SermonEventsSection sectionTitle="Ver todos os eventos" />
    </div>
  );
}
