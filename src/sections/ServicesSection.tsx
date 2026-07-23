import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LazyImage } from '@/components/ui/LazyImage';
import { servicesContent } from '@/content/services';
import { scrollToElement } from '@/utils/helpers';

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={servicesContent.label}
            title={servicesContent.title}
            description={servicesContent.description}
          />
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2">
          {servicesContent.items.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.05}>
              <button
                onClick={() => scrollToElement('#contacts')}
                className="surface-card surface-card-hover group flex w-full overflow-hidden text-left"
              >
                <div className="relative hidden w-36 shrink-0 overflow-hidden sm:block md:w-44">
                  <LazyImage
                    src={service.image}
                    alt={`${service.title} в Грозном — ИНЖЕНЕР-СТРОЙ`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    wrapperClassName="h-full w-full min-h-[140px]"
                  />
                </div>
                <div className="flex flex-1 items-start gap-5 p-7 md:p-8">
                  <span className="mt-0.5 text-sm font-semibold tabular-nums text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
