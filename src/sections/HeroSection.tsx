import { Counter } from '@/components/ui/Counter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LazyImage } from '@/components/ui/LazyImage';
import { Container } from '@/components/ui/Container';
import { heroContent } from '@/content/hero';
import { aboutContent } from '@/content/about';
import { scrollToElement } from '@/utils/helpers';
import { fadeInUp } from '@/utils/animations';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-0 md:pt-32">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pb-12 lg:pb-0"
          >
            <p className="section-label mb-6">{heroContent.subtitle}</p>

            <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]">
              Строительная компания{' '}
              <span className="text-gold">Грозный</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToElement('#contacts')}
              >
                {heroContent.ctaConsultation}
                <ArrowRight size={16} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToElement('#services')}
              >
                Наши услуги
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
              {aboutContent.trustItems.map((item) => (
                <Counter
                  key={item.label}
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  size="sm"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface md:aspect-[5/6] lg:aspect-auto lg:h-[min(72vh,680px)]">
              <LazyImage
                src={heroContent.backgroundImage}
                alt={heroContent.backgroundImageAlt}
                className="h-full w-full object-cover"
                wrapperClassName="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
