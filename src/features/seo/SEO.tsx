import { useEffect } from 'react';
import { siteConfig } from '@/content/site';
import { company } from '@/content/company';
import { servicesContent } from '@/content/services';
import { faqContent } from '@/content/faq';
import type { SEOProps } from '@/types';

function setMetaTag(name: string, content: string, property = false) {
  if (!content) return;
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

function buildStructuredData(pageUrl: string, pageTitle: string, pageDescription: string) {
  const logoUrl = `${siteConfig.url}${company.logo.src}`;
  const imageUrl = siteConfig.ogImage.startsWith('http')
    ? siteConfig.ogImage
    : `${siteConfig.url}${siteConfig.ogImage}`;

  const address = {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Новопромысловая, д. 22',
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    postalCode: '364042',
    addressCountry: 'RU',
  };

  const organization = {
    '@type': ['Organization', 'LocalBusiness', 'GeneralContractor'],
    '@id': `${siteConfig.url}/#organization`,
    name: company.shortName,
    legalName: company.fullName,
    alternateName: [
      company.brandName,
      'ИнженерСтрой',
      'строительная компания Грозный ИНЖЕНЕР-СТРОЙ',
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    image: imageUrl,
    email: company.email,
    ...(!company.phonePlaceholder ? { telephone: company.phone } : {}),
    address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.mapCoords.lat,
      longitude: company.mapCoords.lng,
    },
    hasMap: `https://yandex.ru/maps/?pt=${company.mapCoords.lng},${company.mapCoords.lat}&z=16&l=map`,
    areaServed: [
      { '@type': 'City', name: 'Грозный' },
      { '@type': 'AdministrativeArea', name: 'Чеченская Республика' },
      { '@type': 'AdministrativeArea', name: 'Республика Ингушетия' },
      { '@type': 'AdministrativeArea', name: 'Республика Дагестан' },
    ],
    foundingDate: String(company.foundedYear),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: company.employees,
    },
    taxID: company.inn,
    priceRange: '₽₽',
    slogan: 'Строительная компания в Грозном — полный цикл работ',
    knowsAbout: [
      siteConfig.primaryKeyword,
      ...servicesContent.items.map((item) => item.title),
    ],
    makesOffer: servicesContent.items.map((item) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: item.title,
        description: item.description,
        areaServed: siteConfig.city,
        provider: { '@id': `${siteConfig.url}/#organization` },
      },
    })),
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.primaryKeyword} — ${company.brandName}`,
    alternateName: company.shortName,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    primaryImageOfPage: imageUrl,
    inLanguage: siteConfig.language,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'meta[name="description"]'],
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faqContent.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webpage, faqPage],
  };
}

export function SEO({
  title,
  description,
  canonical,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const pageUrl = canonical ?? siteConfig.canonical;

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.lang = siteConfig.language;

    setMetaTag('description', pageDescription);
    setMetaTag('keywords', siteConfig.keywords.join(', '));
    setMetaTag(
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );
    setMetaTag('author', siteConfig.name);
    setMetaTag('geo.region', 'RU-CE');
    setMetaTag('geo.placename', `${siteConfig.city}, ${siteConfig.region}`);
    setMetaTag(
      'geo.position',
      `${company.mapCoords.lat};${company.mapCoords.lng}`,
    );
    setMetaTag(
      'ICBM',
      `${company.mapCoords.lat}, ${company.mapCoords.lng}`,
    );

    if (siteConfig.yandexVerification) {
      setMetaTag('yandex-verification', siteConfig.yandexVerification);
    }
    if (siteConfig.googleVerification) {
      setMetaTag('google-site-verification', siteConfig.googleVerification);
    }

    setLinkTag('canonical', pageUrl);

    let hreflang = document.querySelector(
      'link[rel="alternate"][hreflang="ru"]',
    );
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'ru');
      document.head.appendChild(hreflang);
    }
    hreflang.setAttribute('href', pageUrl);

    const ogImage = siteConfig.ogImage.startsWith('http')
      ? siteConfig.ogImage
      : `${siteConfig.url}${siteConfig.ogImage}`;

    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', pageTitle, true);
    setMetaTag('og:description', pageDescription, true);
    setMetaTag('og:url', pageUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:alt', siteConfig.primaryKeyword, true);
    setMetaTag('og:locale', siteConfig.locale, true);
    setMetaTag('og:site_name', siteConfig.name, true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', pageTitle);
    setMetaTag('twitter:description', pageDescription);
    setMetaTag('twitter:image', ogImage);

    const schemaId = 'structured-data';
    let schemaEl = document.getElementById(schemaId);
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = schemaId;
      schemaEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(
      buildStructuredData(pageUrl, pageTitle, pageDescription),
    );
  }, [pageTitle, pageDescription, pageUrl, noindex]);

  return null;
}
