import { useCallback, useEffect, useState } from 'react';
import type { CookieConsent, CookiePreferences } from '@/types';
import { COOKIE_STORAGE_KEY } from '@/utils/constants';
import { CookieContext } from './cookie-context';

function loadPreferences(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return null;
  }
}

function savePreferences(consent: CookieConsent): void {
  const preferences: CookiePreferences = {
    consent,
    timestamp: Date.now(),
  };
  localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
}

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const stored = loadPreferences();
    if (stored?.consent) {
      setConsent(stored.consent);
      setHasConsented(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    setConsent('all');
    setHasConsented(true);
    savePreferences('all');
  }, []);

  const acceptNecessary = useCallback(() => {
    setConsent('necessary');
    setHasConsented(true);
    savePreferences('necessary');
  }, []);

  return (
    <CookieContext.Provider
      value={{ consent, hasConsented, acceptAll, acceptNecessary }}
    >
      {children}
    </CookieContext.Provider>
  );
}
