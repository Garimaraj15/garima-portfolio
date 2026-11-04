import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import AchievementsSection from "./components/homepage/achievements";
import TerminalSection from "./components/homepage/terminal";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <div suppressHydrationWarning className="space-y-4">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <AchievementsSection />
      <TerminalSection />
      <Education />
      <ContactSection />
    </div>
  );
}