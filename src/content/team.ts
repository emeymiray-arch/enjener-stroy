import { company } from './company';
import { stockImages } from './images';

export const teamContent = {
  label: 'Руководство',
  title: 'Команда управления',
  description:
    'Компания работает на строительном рынке более 7 лет и объединяет более 59 специалистов со средним опытом 5 лет. Руководство обеспечивает стратегическое развитие, производство и логистику каждого проекта.',
  members: [
    {
      id: 'director',
      name: company.director,
      role: 'Генеральный директор',
      image: stockImages.team.director,
      imageAlt: `${company.director} — генеральный директор`,
    },
    {
      id: 'deputy',
      name: 'Магомаев Рамзан Аслудинович',
      role: 'Заместитель генерального директора',
      image: stockImages.team.deputyProduction,
      imageAlt: 'Магомаев Рамзан Аслудинович — заместитель генерального директора',
    },
    {
      id: 'site-logistics',
      name: 'Исаев Мовсар Магомедович',
      role: 'Начальник участка и руководитель отдела логистики',
      image: stockImages.team.deputyCommercial,
      imageAlt:
        'Исаев Мовсар Магомедович — начальник участка и руководитель отдела логистики',
    },
  ],
} as const;
