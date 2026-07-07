import type { LucideIcon } from 'lucide-react';
import {
  FileCheck,
  Users,
  Clock,
  Cpu,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

export interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantagesContent = {
  label: 'Преимущества',
  title: 'Почему выбирают нас',
  description:
    'Мы создаём ценность для каждого клиента, сочетая профессионализм, технологии и индивидуальный подход.',
  items: [
    {
      icon: FileCheck,
      title: 'Работа по договору',
      description:
        'Все работы оформляются официальным договором с чёткими сроками, стоимостью и гарантийными обязательствами.',
    },
    {
      icon: Users,
      title: 'Квалифицированные специалисты',
      description:
        'В нашей команде — опытные инженеры, прорабы и мастера с подтверждённой квалификацией и стажем.',
    },
    {
      icon: Clock,
      title: 'Соблюдение сроков',
      description:
        'Строгое планирование и контроль каждого этапа позволяют нам сдавать объекты точно в срок.',
    },
    {
      icon: Cpu,
      title: 'Современные технологии',
      description:
        'Применяем передовые строительные технологии и материалы для достижения наилучшего результата.',
    },
    {
      icon: ShieldCheck,
      title: 'Гарантия качества',
      description:
        'Предоставляем гарантию на все виды выполненных работ и используем только сертифицированные материалы.',
    },
    {
      icon: HeartHandshake,
      title: 'Индивидуальный подход',
      description:
        'Разрабатываем уникальные решения с учётом пожеланий, бюджета и особенностей каждого проекта.',
    },
  ] satisfies AdvantageItem[],
} as const;
