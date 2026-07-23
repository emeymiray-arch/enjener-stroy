import type { LucideIcon } from 'lucide-react';
import {
  Layers,
  Users,
  MapPin,
  Handshake,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantagesContent = {
  label: 'Почему мы',
  title: 'Почему в Грозном выбирают ИНЖЕНЕР-СТРОЙ',
  description:
    'Простыми словами: делаем сами, отвечаем за результат и не пропадаем после сдачи объекта.',
  items: [
    {
      icon: Layers,
      title: 'Всё в одних руках',
      description:
        'Стройка, демонтаж, отделка, сантехника, электрика и другие работы — без беготни по разным бригадам.',
    },
    {
      icon: Users,
      title: 'Своя команда',
      description:
        'Больше 59 человек, средний опыт около 5 лет. На большие объекты подключаем проверенных подрядчиков.',
    },
    {
      icon: MapPin,
      title: 'Работаем рядом',
      description:
        'Грозный и Чечня — наша основная зона. Также берём объекты по Северному Кавказу.',
    },
    {
      icon: Handshake,
      title: 'Понятный договор',
      description:
        'Фиксируем объём, сроки и стоимость. Вы всегда понимаете, за что платите.',
    },
    {
      icon: ShieldCheck,
      title: 'Контроль качества',
      description:
        'Проверяем этапы работ сами. Сдаём объект так, чтобы им можно было пользоваться.',
    },
    {
      icon: Building2,
      title: 'Ответственность',
      description:
        'Работаем без внешних инвесторов — отвечаем перед заказчиком напрямую.',
    },
  ] satisfies AdvantageItem[],
} as const;
