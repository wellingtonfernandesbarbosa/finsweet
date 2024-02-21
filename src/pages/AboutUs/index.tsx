import Header from "../../components/Header";
import styles from "./AboutUs.module.scss";
import BannerImage from "./Assets/banner.png";
import { ThemeColor } from "../../enum/ThemeColor";
import WelcomeSection from "../../components/WelcomeSection";
import BenefitsSection from "../../components/BenefitsSection";
import { Page } from "../../enum/Page";
import OurTeamSection from "../../components/OurTeamSection";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Header
        title="Serving the world around us"
        subtitle="About Us"
        image={BannerImage}
        textColor={ThemeColor.black}
      />

      <WelcomeSection footer={true} />

      <BenefitsSection
        subtitle="BENEFITS"
        page={Page.about}
        background="white"
      />

      <OurTeamSection />
    </div>
  );
}
