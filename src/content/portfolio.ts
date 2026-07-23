import { stockImages } from './images';

export const portfolioContent = {
  label: 'Портфолио',
  title: 'Реализованные проекты',
  description:
    'Десятки объектов различного назначения и уровня сложности — от частных домов до зданий с комплексными инженерными системами.',
  items: [
    {
      id: 'project-1',
      title: 'Частные жилые дома',
      category: 'Индивидуальное строительство',
      image: stockImages.portfolio.cottage,
    },
    {
      id: 'project-2',
      title: 'Коммерческие здания',
      category: 'Коммерческое строительство',
      image: stockImages.portfolio.commercial,
    },
    {
      id: 'project-3',
      title: 'Административные объекты',
      category: 'Общественное строительство',
      image: stockImages.portfolio.office,
    },
    {
      id: 'project-4',
      title: 'Жилые комплексы',
      category: 'Жилое строительство',
      image: stockImages.portfolio.residential,
    },
    {
      id: 'project-5',
      title: 'Объекты с инженерными системами',
      category: 'Инженерное строительство',
      image: stockImages.portfolio.industrial,
    },
    {
      id: 'project-6',
      title: 'Реконструкция и модернизация',
      category: 'Реконструкция',
      image: stockImages.portfolio.reconstruction,
    },
  ],
} as const;
