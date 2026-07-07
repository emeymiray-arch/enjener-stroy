import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/content/navigation';
import { useScrollPosition } from '@/hooks/useMediaQuery';
import { navigateToSection, cn } from '@/utils/helpers';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isSolid = !isHome || scrollY > 8;

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      navigateToSection(navigate, href, location.pathname);
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          isSolid
            ? 'border-b border-border bg-white/95 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5',
        )}
        style={isSolid ? { boxShadow: 'var(--shadow-sm)' } : undefined}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo size="md" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" size="sm" onClick={() => handleNavClick('#contacts')}>
              Оставить заявку
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-white p-8 pt-24"
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-xl py-3.5 text-left text-base font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => handleNavClick('#contacts')}
              >
                Оставить заявку
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
