import { BackgroundOrbs } from './components/BackgroundOrbs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GrowthSection } from './components/GrowthSection';
import { EvidenceSection } from './components/EvidenceSection';
import { ContactSection } from './components/ContactSection';
import { PresentationControls } from './components/PresentationControls';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#060d1a] overflow-x-hidden">
      <a href="#main-content" className="skip-nav absolute top-0 left-0 m-4 p-2 rounded bg-blue-600 text-white font-semibold z-[70] focus-visible:opacity-100 opacity-0">Skip to content</a>
      <BackgroundOrbs />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <GrowthSection />
        <EvidenceSection />
        <ContactSection />
      </main>
      <PresentationControls />
      <ScrollToTop />
    </div>
  );
}
