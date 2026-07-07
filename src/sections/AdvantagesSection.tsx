import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { advantagesContent } from '@/content/advantages';

export function AdvantagesSection() {
  return (
    <section id="advantages" className="section-padding bg-surface">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={advantagesContent.label}
            title={advantagesContent.title}
            description={advantagesContent.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantagesContent.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <div className="surface-card h-full p-7 md:p-8">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-muted">
                    <Icon size={18} className="text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
