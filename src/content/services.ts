import { stockImages } from './images';

export const servicesContent = {
  label: 'Услуги',
  title: 'Услуги строительной компании в Грозном',
  description:
    'Нужен ремонт, стройка или отдельные работы? Делаем всё сами — от демонтажа до чистовой отделки. Работаем в Грозном и по Чеченской Республике.',
  items: [
    {
      id: 'construction',
      title: 'Строительные работы',
      description:
        'Строим дома, магазины, офисы и другие объекты в Грозном. Можно заказать стройку под ключ или работы по вашему проекту.',
      image: stockImages.services.construction,
    },
    {
      id: 'demolition',
      title: 'Демонтажные работы',
      description:
        'Аккуратно разбираем ненужные стены, конструкции и старую отделку. Вывозим мусор и готовим объект к новым работам.',
      image: stockImages.services.demolition,
    },
    {
      id: 'finishing',
      title: 'Отделочные работы',
      description:
        'Штукатурка, покраска, плитка, полы и чистовая отделка внутри и снаружи. Делаем так, чтобы можно было сразу пользоваться помещением.',
      image: stockImages.services.finishing,
    },
    {
      id: 'plumbing',
      title: 'Сантехнические работы',
      description:
        'Вода, канализация, отопление, установка сантехники. Монтаж и ремонт — для домов, офисов и коммерческих объектов.',
      image: stockImages.services.plumbing,
    },
    {
      id: 'electrical',
      title: 'Электрические работы',
      description:
        'Проводка, щитки, свет, розетки и подключение оборудования. Работаем по нормам безопасности, без «временных скруток».',
      image: stockImages.services.electrical,
    },
    {
      id: 'carpentry',
      title: 'Плотницкие работы',
      description:
        'Деревянные конструкции, каркасы, опалубка, лестницы и столярка для стройки и отделки.',
      image: stockImages.services.carpentry,
    },
    {
      id: 'cleaning',
      title: 'Клининговые услуги',
      description:
        'Уборка после ремонта и стройки: пыль, следы материалов, подготовка объекта к сдаче заказчику.',
      image: stockImages.services.cleaning,
    },
    {
      id: 'loading',
      title: 'Погрузочно-разгрузочные работы',
      description:
        'Погрузка и разгрузка материалов и оборудования на объекте. Быстро, аккуратно и с соблюдением техники безопасности.',
      image: stockImages.services.loading,
    },
    {
      id: 'other',
      title: 'Другие услуги',
      description:
        'Генеральный подряд, проектирование, благоустройство и дополнительные работы — обсудим под вашу задачу.',
      image: stockImages.services.other,
    },
  ],
} as const;
