import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { faqContent } from '@/content/faq';

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-surface">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={faqContent.label}
            title={faqContent.title}
            description={faqContent.description}
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqContent.items.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.04}>
              <details className="surface-card group open:shadow-none">
                <summary className="cursor-pointer list-none px-6 py-5 text-left text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-0.5 shrink-0 text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </p>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
