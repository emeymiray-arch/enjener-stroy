import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Preloader } from '@/components/ui/Preloader';
import { CookieProvider } from '@/features/cookies/CookieContext';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { PersonalDataPage } from '@/pages/PersonalDataPage';
import { TermsPage } from '@/pages/TermsPage';
import { CookiePolicyPage } from '@/pages/CookiePolicyPage';

export function App() {
  return (
    <CookieProvider>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="personal-data" element={<PersonalDataPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookieProvider>
  );
}
