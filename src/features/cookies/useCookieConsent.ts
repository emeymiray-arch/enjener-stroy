import { useContext } from 'react';
import { CookieContext, type CookieContextValue } from './cookie-context';

export function useCookieConsent(): CookieContextValue {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieProvider');
  }
  return context;
}
