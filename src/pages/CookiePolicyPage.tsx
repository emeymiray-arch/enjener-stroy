import { LegalPage } from './LegalPage';
import { cookiePolicyContent } from '@/content/legal/cookie-policy';

export function CookiePolicyPage() {
  return <LegalPage content={cookiePolicyContent} />;
}
