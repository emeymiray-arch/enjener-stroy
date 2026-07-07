import { stockImages } from './images';

export const portfolioContent = {
  label: 'Портфолио',
  title: 'Наши реализованные проекты',
  description:
    'Каждый объект — это результат слаженной работы команды профессионалов и внимания к деталям.',
  items: [
    {
      id: 'project-1',
      title: 'Жилой комплекс «Горный»',
      category: 'Жилое строительство',
      image: stockImages.portfolio.residential,
    },
    {
      id: 'project-2',
      title: 'Бизнес-центр «Прометей»',
      category: 'Коммерческое строительство',
      image: stockImages.portfolio.commercial,
    },
    {
      id: 'project-3',
      title: 'Реконструкция исторического здания',
      category: 'Реконструкция',
      image: stockImages.portfolio.reconstruction,
    },
    {
      id: 'project-4',
      title: 'Частный коттедж',
      category: 'Индивидуальное строительство',
      image: stockImages.portfolio.cottage,
    },
    {
      id: 'project-5',
      title: 'Промышленный склад',
      category: 'Промышленное строительство',
      image: stockImages.portfolio.industrial,
    },
    {
      id: 'project-6',
      title: 'Офисное пространство',
      category: 'Отделочные работы',
      image: stockImages.portfolio.office,
    },
  ],
} as const;
