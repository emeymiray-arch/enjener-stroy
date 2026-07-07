import { createContext } from 'react';
import type { CookieConsent } from '@/types';

export interface CookieContextValue {
  consent: CookieConsent;
  hasConsented: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
}

export const CookieContext = createContext<CookieContextValue | null>(null);
