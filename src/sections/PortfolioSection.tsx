import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LazyImage } from '@/components/ui/LazyImage';
import { portfolioContent } from '@/content/portfolio';

export function PortfolioSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = portfolioContent.items.find((p) => p.id === selectedId);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={portfolioContent.label}
            title={portfolioContent.title}
            description={portfolioContent.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioContent.items.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <button
                onClick={() => setSelectedId(project.id)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface"
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  wrapperClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6 text-left">
                  <span className="section-label text-gold-light">{project.category}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              className="max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-white"
              style={{ boxShadow: 'var(--shadow-lg)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[70vh] w-full object-cover"
              />
              <div className="p-8">
                <span className="section-label">{selected.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {selected.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
