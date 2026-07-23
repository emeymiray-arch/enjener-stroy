import { TeamSection } from '@/sections/TeamSection';
import { SEO } from '@/features/seo/SEO';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { AdvantagesSection } from '@/sections/AdvantagesSection';
import { PortfolioSection } from '@/sections/PortfolioSection';
import { StagesSection } from '@/sections/StagesSection';
import { ReviewsSection } from '@/sections/ReviewsSection';
import { FaqSection } from '@/sections/FaqSection';
import { ContactSection } from '@/sections/ContactSection';

export function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <StagesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
