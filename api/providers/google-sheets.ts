import type { NotificationProvider, NotificationPayload } from '../../src/types';

/**
 * Google Sheets integration provider.
 * Enable by setting GOOGLE_SHEETS_WEBHOOK_URL env variable.
 */
export function createGoogleSheetsProvider(): NotificationProvider | null {
  const { GOOGLE_SHEETS_WEBHOOK_URL } = process.env;

  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    return null;
  }

  return {
    name: 'google-sheets',
    async send(payload: NotificationPayload): Promise<void> {
      const { data } = payload;

      const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: payload.timestamp,
          name: data.name,
          phone: data.phone,
          email: data.email,
          comment: data.comment || '',
        }),
      });

      if (!response.ok) {
        throw new Error(`Google Sheets webhook error: ${response.status}`);
      }
    },
  };
}
