/** Локальные фото в public/images/ */
const p = (name: string) => `/images/${name}.jpg`;

export const stockImages = {
  hero: p('hero'),
  about: p('about'),
  og: p('hero'),

  team: {
    director: p('team-director'),
    deputyProduction: p('team-deputy-1'),
    deputyCommercial: p('team-deputy-2'),
  },

  services: {
    construction: p('service-construction'),
    demolition: p('service-demolition'),
    finishing: p('service-finishing'),
    plumbing: p('service-plumbing'),
    electrical: p('service-electrical'),
    carpentry: p('service-carpentry'),
    cleaning: p('service-cleaning'),
    loading: p('service-loading'),
    other: p('service-other'),
  },

  portfolio: {
    residential: p('portfolio-1'),
    commercial: p('portfolio-2'),
    reconstruction: p('portfolio-3'),
    cottage: p('portfolio-4'),
    industrial: p('portfolio-5'),
    office: p('portfolio-6'),
  },
} as const;
