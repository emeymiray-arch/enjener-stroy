import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { Container } from '@/components/ui/Container';
import { footerNavigation, legalNavigation } from '@/content/navigation';
import { footerContent } from '@/content/common';
import { company } from '@/content/company';
import { navigateToSection } from '@/utils/helpers';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      navigateToSection(navigate, href, location.pathname);
    }
  };

  return (
    <footer className="mt-0 border-t border-white/10 bg-ink text-white">
      <Container className="pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo size="md" theme="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              {footerContent.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="section-label mb-5 text-white/40">Навигация</h4>
            <ul className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="section-label mb-5 text-white/40">Документы</h4>
            <ul className="space-y-3">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="section-label mb-5 text-white/40">Контакты</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>ИНН {company.inn} · КПП {company.kpp}</p>
              <p>ОГРН {company.ogrn}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="divider mt-16 mb-8 !bg-white/10" />

        <div className="flex flex-col gap-4 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {company.shortName}. {footerContent.copyright}
          </p>
          <p className="max-w-md text-right">{company.legalAddress}</p>
        </div>
      </Container>
    </footer>
  );
}
