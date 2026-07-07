import { company } from './company';
import { stockImages } from './images';

export const teamContent = {
  label: 'Руководство',
  title: 'Команда управления',
  description:
    'Опытные специалисты, отвечающие за стратегию, производство и развитие компании.',
  members: [
    {
      id: 'director',
      name: company.director,
      role: 'Генеральный директор',
      image: stockImages.team.director,
      imageAlt: 'Рабочее пространство — иллюстрация',
    },
    {
      id: 'deputy-production',
      name: 'Заместитель генерального директора',
      role: 'По производству и техническому контролю',
      image: stockImages.team.deputyProduction,
      imageAlt: 'Современная архитектура — иллюстрация',
    },
    {
      id: 'deputy-commercial',
      name: 'Заместитель генерального директора',
      role: 'По коммерции и развитию',
      image: stockImages.team.deputyCommercial,
      imageAlt: 'Проектная документация — иллюстрация',
    },
  ],
} as const;
