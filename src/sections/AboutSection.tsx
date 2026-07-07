import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LazyImage } from '@/components/ui/LazyImage';
import { aboutContent } from '@/content/about';
import { company } from '@/content/company';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <SectionTitle label={aboutContent.label} title={aboutContent.title} />
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              {aboutContent.history.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white lg:aspect-[5/6]">
              <LazyImage
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                className="h-full w-full object-cover"
                wrapperClassName="h-full w-full"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.directions.map((direction) => (
              <div
                key={direction}
                className="flex items-center gap-3 bg-white px-6 py-5 text-sm font-medium text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {direction}
              </div>
            ))}
            <div className="flex items-center gap-3 bg-white px-6 py-5 text-sm font-medium text-ink-muted sm:col-span-2 lg:col-span-3">
              <span className="text-gold">©</span>
              Работаем с {company.foundedYear} года · {company.shortName}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
