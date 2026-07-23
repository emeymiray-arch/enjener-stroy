import { stockImages } from './images';

export const portfolioContent = {
  label: 'Портфолио',
  title: 'Реализованные проекты',
  description:
    'Частные дома, коммерческие объекты и работы с инженерными системами — от стройки до отделки.',
  items: [
    {
      id: 'project-1',
      title: 'Современный частный дом',
      category: 'Индивидуальное строительство',
      image: stockImages.portfolio.residential,
    },
    {
      id: 'project-2',
      title: 'Дом с отделкой под ключ',
      category: 'Жилое строительство',
      image: stockImages.portfolio.commercial,
    },
    {
      id: 'project-3',
      title: 'Интерьер и чистовая отделка',
      category: 'Отделочные работы',
      image: stockImages.portfolio.reconstruction,
    },
    {
      id: 'project-4',
      title: 'Объект по проекту',
      category: 'Проектирование и стройка',
      image: stockImages.portfolio.cottage,
    },
    {
      id: 'project-5',
      title: 'Многоэтажное строительство',
      category: 'Строительные работы',
      image: stockImages.portfolio.industrial,
    },
    {
      id: 'project-6',
      title: 'Отделка помещений',
      category: 'Ремонт и отделка',
      image: stockImages.portfolio.office,
    },
  ],
} as const;
