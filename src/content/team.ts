import { company } from './company';
import { stockImages } from './images';

export const teamContent = {
  label: 'Руководство',
  title: 'Команда управления',
  description:
    'Компания работает на строительном рынке более 7 лет и объединяет более 59 специалистов со средним опытом 5 лет. Руководство обеспечивает стратегическое развитие, производственный контроль и качество реализации каждого проекта.',
  members: [
    {
      id: 'director',
      name: company.director,
      role: 'Генеральный директор',
      image: stockImages.team.director,
      imageAlt: `${company.director} — генеральный директор`,
    },
    {
      id: 'deputy-production',
      name: 'Заместитель генерального директора',
      role: 'По производству и техническому контролю',
      image: stockImages.team.deputyProduction,
      imageAlt: 'Заместитель генерального директора по производству',
    },
    {
      id: 'deputy-commercial',
      name: 'Заместитель генерального директора',
      role: 'По коммерции и развитию',
      image: stockImages.team.deputyCommercial,
      imageAlt: 'Заместитель генерального директора по коммерции',
    },
  ],
} as const;
