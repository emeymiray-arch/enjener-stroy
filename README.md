# enjener-stroy

Корпоративный сайт ООО «ИНЖЕНЕР-СТРОЙ» (Грозный).

## Стек

- React 19, TypeScript, Vite
- Tailwind CSS v4, Framer Motion
- React Router
- Vercel Serverless Functions (`api/contact.ts`)

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run lint
npm run build
```

## Деплой

Проект настроен для [Vercel](https://vercel.com). Скопируйте `.env.example` в `.env` и укажите SMTP-настройки для формы обратной связи.

## Изображения

Файлы в `public/images/` можно обновить вручную или через `npm run install-images` (требуется доступ к внешним CDN).
