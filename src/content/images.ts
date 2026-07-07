/** Локальные фото в public/images/ — надёжно грузятся без внешних CDN */
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
    generalContracting: p('service-1'),
    construction: p('service-2'),
    renovation: p('service-3'),
    finishing: p('service-4'),
    design: p('service-5'),
    landscaping: p('service-6'),
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
