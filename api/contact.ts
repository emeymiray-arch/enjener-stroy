import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { ContactFormData, NotificationPayload, NotificationProvider } from '../src/types';
import { createEmailProvider } from './providers/email';
import { createTelegramProvider } from './providers/telegram';
import { createCrmProvider } from './providers/crm';
import { createGoogleSheetsProvider } from './providers/google-sheets';
import { NotificationService } from './services/notification-service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

function validatePayload(data: ContactFormData): string | null {
  if (!data.name?.trim()) return 'Имя обязательно';
  if (!data.phone?.trim() || !PHONE_REGEX.test(data.phone.replace(/\s/g, '')))
    return 'Некорректный телефон';
  if (!data.email?.trim() || !EMAIL_REGEX.test(data.email))
    return 'Некорректный email';
  if (!data.consent) return 'Необходимо согласие на обработку данных';
  return null;
}

function getActiveProviders(): NotificationProvider[] {
  const providers: NotificationProvider[] = [];

  const emailProvider = createEmailProvider();
  if (emailProvider) providers.push(emailProvider);

  const telegramProvider = createTelegramProvider();
  if (telegramProvider) providers.push(telegramProvider);

  const crmProvider = createCrmProvider();
  if (crmProvider) providers.push(crmProvider);

  const sheetsProvider = createGoogleSheetsProvider();
  if (sheetsProvider) providers.push(sheetsProvider);

  return providers;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    const data = req.body as ContactFormData;
    const validationError = validatePayload(data);

    if (validationError) {
      res.status(400).json({ success: false, error: validationError });
      return;
    }

    const payload: NotificationPayload = {
      type: 'contact_form',
      data,
      timestamp: new Date().toISOString(),
      source: 'website',
    };

    const providers = getActiveProviders();

    if (providers.length === 0) {
      res.status(500).json({
        success: false,
        error: 'Сервис отправки не настроен. Обратитесь к администратору.',
      });
      return;
    }

    const service = new NotificationService(providers);
    await service.notify(payload);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Ошибка при отправке заявки. Попробуйте позже.',
    });
  }
}
