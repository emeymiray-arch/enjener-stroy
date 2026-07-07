import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from './useCookieConsent';
import { cookiePolicyContent } from '@/content/legal/cookie-policy';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const { hasConsented, acceptAll, acceptNecessary } = useCookieConsent();
  const { banner } = cookiePolicyContent;

  return (
    <AnimatePresence>
      {!hasConsented ? (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 bottom-0 left-0 z-[90] border-t border-border bg-white p-6 md:p-8"
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <div className="container-custom">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-base font-semibold text-ink">{banner.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {banner.description}{' '}
                  <Link
                    to="/cookie-policy"
                    className="text-gold hover:underline"
                  >
                    {banner.settings}
                  </Link>
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button variant="secondary" size="sm" onClick={acceptNecessary}>
                  {banner.acceptNecessary}
                </Button>
                <Button variant="primary" size="sm" onClick={acceptAll}>
                  {banner.acceptAll}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
