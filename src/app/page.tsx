import { HeroSection } from '@/components/sections/hero-section';
import { VisionMissionSection } from '@/components/sections/vision-mission-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <VisionMissionSection />
      <ExperienceSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
