export const contactContent = {
  label: 'Контакты',
  title: 'Свяжитесь с нами',
  description:
    'Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами напрямую — мы ответим в ближайшее время.',
  form: {
    title: 'Оставить заявку',
    nameLabel: 'Имя',
    namePlaceholder: 'Ваше имя',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+7 (___) ___-__-__',
    emailLabel: 'Email',
    emailPlaceholder: 'example@mail.ru',
    commentLabel: 'Комментарий',
    commentPlaceholder: 'Расскажите о вашем проекте...',
    consentLabel:
      'Я соглашаюсь с Политикой обработки персональных данных и Пользовательским соглашением.',
    submitButton: 'Отправить заявку',
    successMessage:
      'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.',
    errorMessage:
      'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по email.',
  },
  info: {
    emailLabel: 'Email',
    phoneLabel: 'Телефон',
    addressLabel: 'Адрес',
    workHoursLabel: 'Режим работы',
    workHours: 'Пн–Пт: 9:00 – 18:00',
  },
} as const;
