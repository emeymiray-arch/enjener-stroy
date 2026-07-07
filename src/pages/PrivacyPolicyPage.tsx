import { LegalPage } from './LegalPage';
import { privacyPolicyContent } from '@/content/legal/privacy-policy';

export function PrivacyPolicyPage() {
  return <LegalPage content={privacyPolicyContent} />;
}
