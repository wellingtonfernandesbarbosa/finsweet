import styles from "./Home.module.scss";

import Header from "../../components/Header";
import headerImage from "../../assets/praying.webp";
import { ThemeColor } from "../../enum/ThemeColor";
import WhatDoWeDoSection from "../../components/WhatDoWeDoSection";
import WelcomeSection from "../../components/WelcomeSection";
import BenefitsSection from "../../components/BenefitsSection";
import UpcomingSermonsSection from "../../components/UpcomingSermonsSection";
import CallToActionSection from "../../components/CallToActionSection";
import BlogPostsSection from "../../components/BlogPostsSection";
import { Page } from "../../enum/Page";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header
        title="Become a part of our community"
        subtitle="Welcome to our CHURCH"
        buttonText="LEARN MORE"
        text="---- We are here to help you in your church. We are here to help you in your church. We are here to help you in your church."
        image={headerImage}
        textColor={ThemeColor.white}
      />
      <main className={styles.container}>
        <WhatDoWeDoSection />

        <WelcomeSection />

        <BenefitsSection subtitle="Whatch and Listen" page={Page.home} />

        <UpcomingSermonsSection />

        <CallToActionSection />

        <BlogPostsSection />
      </main>
    </>
  );
}
