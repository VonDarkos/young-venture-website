import styles from "./AboutUsPage.module.css";
import AboutHero from "./AboutHero";
import FocusAreasSection from "./FocusAreasSection";
import CollegeDeepTechSection from "./CollegeDeepTechSection";
import BeliefsSection from "./BeliefsSection";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutPage}>
      <AboutHero />
      <FocusAreasSection />
      <CollegeDeepTechSection />
      <BeliefsSection/>
    </main>
  );
}