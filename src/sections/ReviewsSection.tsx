import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { reviewsContent } from '@/content/reviews';

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const total = reviewsContent.items.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const review = reviewsContent.items[current]!;

  return (
    <section id="reviews" className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            label={reviewsContent.label}
            title={reviewsContent.title}
            description={reviewsContent.description}
          />
        </AnimatedSection>

        <div className="relative mx-auto max-w-3xl">
          <div className="surface-card p-10 md:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-xl leading-relaxed font-medium text-ink md:text-2xl md:leading-relaxed">
                  «{review.text}»
                </blockquote>

                <footer className="mt-8 flex items-center gap-4 border-t border-border pt-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-semibold text-gold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{review.name}</p>
                    <p className="text-sm text-ink-muted">{review.role}</p>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => goTo(current - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {reviewsContent.items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === current ? 'w-8 bg-ink' : 'w-1.5 bg-border-strong'
                  }`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
