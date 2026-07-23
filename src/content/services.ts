import { stockImages } from './images';

export const servicesContent = {
  label: 'Услуги',
  title: 'Полный цикл проектно-строительных работ',
  description:
    'От разработки концепции и проектной документации до строительства, ввода объекта в эксплуатацию и последующего сопровождения.',
  items: [
    {
      id: 'general-contracting',
      title: 'Генеральный подряд',
      description:
        'Комплексное управление проектом: планирование, координация подрядчиков, контроль сроков и качества на каждом этапе строительства.',
      image: stockImages.services.generalContracting,
    },
    {
      id: 'construction',
      title: 'Строительство объектов',
      description:
        'Возведение частных, коммерческих и общественных зданий. Реализуем проекты как под ключ, так и по готовой проектной документации заказчика.',
      image: stockImages.services.construction,
    },
    {
      id: 'renovation',
      title: 'Реконструкция и модернизация',
      description:
        'Реконструкция существующих зданий с учётом современных требований, инженерных систем и нормативов безопасности.',
      image: stockImages.services.renovation,
    },
    {
      id: 'finishing',
      title: 'Отделочные работы',
      description:
        'Внутренняя и внешняя отделка объектов любого назначения с применением сертифицированных материалов и контролем качества.',
      image: stockImages.services.finishing,
    },
    {
      id: 'design',
      title: 'Проектирование',
      description:
        'Разработка концепции, проектной и рабочей документации, инженерные изыскания и согласование с надзорными органами.',
      image: stockImages.services.design,
    },
    {
      id: 'landscaping',
      title: 'Благоустройство и инженерные сети',
      description:
        'Благоустройство территорий, устройство наружных инженерных сетей, производственных площадок и прилегающих зон.',
      image: stockImages.services.landscaping,
    },
  ],
} as const;
