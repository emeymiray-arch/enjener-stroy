import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { stagesContent } from '@/content/stages';

export function StagesSection() {
  return (
    <section id="stages" className="section-padding bg-surface">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={stagesContent.label}
            title={stagesContent.title}
            description={stagesContent.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 lg:grid-cols-2">
          {stagesContent.items.map((stage, index) => (
            <AnimatedSection key={stage.step} delay={index * 0.05}>
              <div className="surface-card flex gap-5 p-7 md:p-8">
                <span className="text-2xl font-semibold tabular-nums text-gold/30">
                  {stage.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {stage.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
