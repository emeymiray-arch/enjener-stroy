import type { NotificationProvider, NotificationPayload } from '../../src/types';

/**
 * Telegram notification provider.
 * Enable by setting TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID env variables.
 */
export function createTelegramProvider(): NotificationProvider | null {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return null;
  }

  return {
    name: 'telegram',
    async send(payload: NotificationPayload): Promise<void> {
      const { data } = payload;
      const message = [
        '🏗 *Новая заявка с сайта*',
        '',
        `👤 *Имя:* ${data.name}`,
        `📞 *Телефон:* ${data.phone}`,
        `📧 *Email:* ${data.email}`,
        `💬 *Комментарий:* ${data.comment || '—'}`,
      ].join('\n');

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.status}`);
      }
    },
  };
}
