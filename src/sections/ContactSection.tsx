import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/features/contact/ContactForm';
import { contactContent } from '@/content/contact';
import { company } from '@/content/company';

export function ContactSection() {
  const { info } = contactContent;

  const contacts = [
    { icon: Mail, label: info.emailLabel, value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: info.phoneLabel, value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: info.addressLabel, value: company.legalAddress },
    { icon: Clock, label: info.workHoursLabel, value: info.workHours },
  ];

  return (
    <section id="contacts" className="section-padding bg-surface">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={contactContent.label}
            title={contactContent.title}
            description={contactContent.description}
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <div className="surface-card p-8 md:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="surface-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-muted">
                      <Icon size={16} className="text-gold" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="section-label mb-1.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm leading-relaxed font-medium text-ink transition-colors hover:text-gold"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed font-medium text-ink">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="surface-card flex-1 overflow-hidden">
                <iframe
                  title="Карта — ООО ИНЖЕНЕР-СТРОЙ"
                  src={`https://yandex.ru/map-widget/v1/?ll=${company.mapCoords.lng}%2C${company.mapCoords.lat}&z=15&pt=${company.mapCoords.lng}%2C${company.mapCoords.lat}%2Cpm2rdm`}
                  width="100%"
                  height="100%"
                  className="min-h-[200px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
