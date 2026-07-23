export const company = {
  fullName: 'Общество с ограниченной ответственностью «ИНЖЕНЕР-СТРОЙ»',
  shortName: 'ООО «ИНЖЕНЕР-СТРОЙ»',
  brandName: 'ИНЖЕНЕР-СТРОЙ',
  logo: {
    /** Укажите путь к файлу логотипа, например: '/logo.svg' */
    src: '/logo.png',
    alt: 'ООО «ИНЖЕНЕР-СТРОЙ»',
  },
  foundedYear: 2024,
  yearsOnMarket: 7,
  averageEmployeeExperienceYears: 5,
  completedProjects: 30,
  totalAreaSqm: 42_000,
  employees: 59,
  inn: '2015010728',
  kpp: '201501001',
  ogrn: '1242000001649',
  legalAddress:
    '364042, Чеченская Республика, г. Грозный, Байсангуровский район, ул. Новопромысловая, д. 22',
  postalAddress:
    '364042, Чеченская Республика, г. Грозный, Байсангуровский район, ул. Новопромысловая, д. 22',
  email: 'enjener_stroi@mail.ru',
  phone: '+7 (928) 000-00-00',
  phonePlaceholder: true,
  director: 'Магомаев Магомед-Эмин Аслудинович',
  directorBasis: 'Устава',
  bank: {
    name: 'ЧЕЧЕНСКИЙ РФ АО «РОССЕЛЬХОЗБАНК»',
    bik: '049690719',
    account: '40702810134100000916',
  },
  mapCoords: {
    lat: 43.3178,
    lng: 45.6985,
  },
} as const;
