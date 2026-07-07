import { LegalPage } from './LegalPage';
import { termsContent } from '@/content/legal/terms';

export function TermsPage() {
  return <LegalPage content={termsContent} />;
}
