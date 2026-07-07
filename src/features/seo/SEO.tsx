import { useEffect } from 'react';
import { siteConfig } from '@/content/site';
import { company } from '@/content/company';
import type { SEOProps } from '@/types';

function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function SEO({
  title,
  description,
  canonical,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const pageUrl = canonical ?? siteConfig.url;

  useEffect(() => {
    document.title = pageTitle;

    setMetaTag('description', pageDescription);
    setMetaTag('keywords', siteConfig.keywords.join(', '));
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setLinkTag('canonical', pageUrl);

    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', pageTitle, true);
    setMetaTag('og:description', pageDescription, true);
    setMetaTag('og:url', pageUrl, true);
    const ogImage = siteConfig.ogImage.startsWith('http')
      ? siteConfig.ogImage
      : `${siteConfig.url}${siteConfig.ogImage}`;

    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', siteConfig.locale, true);
    setMetaTag('og:site_name', siteConfig.name, true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', pageTitle);
    setMetaTag('twitter:description', pageDescription);
    setMetaTag('twitter:image', ogImage);

    const schemaId = 'organization-schema';
    let schemaEl = document.getElementById(schemaId);
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = schemaId;
      schemaEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaEl);
    }

    schemaEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.fullName,
      alternateName: company.shortName,
      url: siteConfig.url,
      email: company.email,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Новопромысловая, д. 22',
        addressLocality: 'Грозный',
        addressRegion: 'Чеченская Республика',
        postalCode: '364042',
        addressCountry: 'RU',
      },
      foundingDate: String(company.foundedYear),
      taxID: company.inn,
      legalName: company.fullName,
    });
  }, [pageTitle, pageDescription, pageUrl, noindex]);

  return null;
}
