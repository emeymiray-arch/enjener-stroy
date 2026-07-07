import { LegalPage } from './LegalPage';
import { personalDataContent } from '@/content/legal/personal-data';

export function PersonalDataPage() {
  return <LegalPage content={personalDataContent} />;
}
