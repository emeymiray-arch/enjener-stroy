import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ScrollToTopOnNavigate } from './ScrollToTopOnNavigate';
import { CookieBanner } from '@/features/cookies/CookieBanner';

export function Layout() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
