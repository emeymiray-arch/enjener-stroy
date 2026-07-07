import { Link } from 'react-router-dom';
import { SEO } from '@/features/seo/SEO';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { notFoundContent } from '@/content/common';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Страница не найдена" noindex />
      <section className="flex min-h-screen items-center justify-center bg-white">
        <Container className="text-center">
          <p className="text-8xl font-semibold text-gold/20 md:text-9xl">
            {notFoundContent.title}
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
            {notFoundContent.subtitle}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-ink-muted">
            {notFoundContent.description}
          </p>
          <Link to="/" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              {notFoundContent.button}
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
