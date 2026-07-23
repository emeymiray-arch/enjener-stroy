import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LazyImage } from '@/components/ui/LazyImage';
import { teamContent } from '@/content/team';

export function TeamSection() {
  const [director, ...deputies] = teamContent.members;

  return (
    <section id="team" className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={teamContent.label}
            title={teamContent.title}
            description={teamContent.description}
            align="center"
          />
        </AnimatedSection>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
          {director ? (
            <AnimatedSection className="w-full max-w-xl">
              <article className="surface-card overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <LazyImage
                    src={director.image}
                    alt={director.imageAlt}
                    className="h-full w-full object-cover"
                    wrapperClassName="h-full w-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="section-label mb-2">{director.role}</p>
                  <h3 className="text-lg font-semibold leading-snug text-ink">
                    {director.name}
                  </h3>
                </div>
              </article>
            </AnimatedSection>
          ) : null}

          <div className="grid w-full max-w-lg grid-cols-2 gap-5">
            {deputies.map((member, index) => (
              <AnimatedSection key={member.id} delay={(index + 1) * 0.08}>
                <article className="surface-card overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <LazyImage
                      src={member.image}
                      alt={member.imageAlt}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="section-label mb-1.5 text-[10px] leading-snug">
                      {member.role}
                    </p>
                    <h3 className="text-sm font-semibold leading-snug text-ink">
                      {member.name}
                    </h3>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
