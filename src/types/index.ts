export type {
  ContactFormData,
  ContactFormErrors,
  ApiResponse,
  NotificationPayload,
  NotificationProvider,
} from '../../shared/types.js';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StageItem {
  step: string;
  title: string;
  description: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
}

export type CookieConsent = 'all' | 'necessary' | null;

export interface CookiePreferences {
  consent: CookieConsent;
  timestamp: number;
}
