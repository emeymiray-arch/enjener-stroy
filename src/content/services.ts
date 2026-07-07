import { stockImages } from './images';

export const servicesContent = {
  label: 'Услуги',
  title: 'Комплексные строительные решения',
  description:
    'Предлагаем полный спектр строительных услуг — от проектирования до сдачи объекта под ключ.',
  items: [
    {
      id: 'general-contracting',
      title: 'Генеральный подряд',
      description:
        'Полное управление строительным проектом: от планирования и закупок до сдачи объекта. Берём на себя все организационные вопросы.',
      image: stockImages.services.generalContracting,
    },
    {
      id: 'construction',
      title: 'Строительство зданий',
      description:
        'Возведение жилых, коммерческих и промышленных объектов с использованием современных технологий и материалов.',
      image: stockImages.services.construction,
    },
    {
      id: 'renovation',
      title: 'Ремонт и реконструкция',
      description:
        'Капитальный и косметический ремонт, реконструкция зданий с полным соблюдением строительных норм и правил.',
      image: stockImages.services.renovation,
    },
    {
      id: 'finishing',
      title: 'Отделочные работы',
      description:
        'Высококачественная внутренняя и внешняя отделка: штукатурка, покраска, укладка плитки, монтаж напольных покрытий.',
      image: stockImages.services.finishing,
    },
    {
      id: 'design',
      title: 'Проектирование',
      description:
        'Разработка проектной и рабочей документации, инженерные изыскания, согласование с надзорными органами.',
      image: stockImages.services.design,
    },
    {
      id: 'landscaping',
      title: 'Благоустройство',
      description:
        'Озеленение территорий, устройство дорожек, малые архитектурные формы, системы освещения и дренажа.',
      image: stockImages.services.landscaping,
    },
  ],
} as const;
