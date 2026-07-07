import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '@/features/seo/SEO';
import { Container } from '@/components/ui/Container';
import { legalNavigation } from '@/content/navigation';
import { renderLegalContent } from '@/utils/legal-content';
import type { LegalPageContent } from '@/types';

interface LegalPageProps {
  content: LegalPageContent;
}

export function LegalPage({ content }: LegalPageProps) {
  const location = useLocation();

  const otherDocuments = legalNavigation.filter(
    (item) => item.href !== location.pathname,
  );

  return (
    <>
      <SEO title={content.title} />
      <section className="bg-white pt-28 pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={16} />
              На главную
            </Link>

            <p className="section-label mb-4">Документ</p>

            <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {content.title}
            </h1>
            <p className="mt-3 text-sm text-ink-faint">
              Последнее обновление: {content.lastUpdated}
            </p>

            <div className="mt-14 space-y-12">
              {content.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-ink-muted">
                    {renderLegalContent(section.content)}
                  </div>
                </article>
              ))}
            </div>

            {otherDocuments.length > 0 ? (
              <div className="mt-20 rounded-2xl border border-border bg-surface p-8 md:p-10">
                <p className="section-label mb-5">Связанные документы</p>
                <ul className="space-y-3">
                  {otherDocuments.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-[15px] font-medium text-ink transition-colors hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
