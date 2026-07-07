import type { NotificationProvider, NotificationPayload } from '../../src/types';

/**
 * CRM integration provider.
 * Enable by setting CRM_API_URL and CRM_API_KEY env variables.
 */
export function createCrmProvider(): NotificationProvider | null {
  const { CRM_API_URL, CRM_API_KEY } = process.env;

  if (!CRM_API_URL || !CRM_API_KEY) {
    return null;
  }

  return {
    name: 'crm',
    async send(payload: NotificationPayload): Promise<void> {
      const response = await fetch(CRM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CRM_API_KEY}`,
        },
        body: JSON.stringify({
          source: payload.source,
          timestamp: payload.timestamp,
          contact: payload.data,
        }),
      });

      if (!response.ok) {
        throw new Error(`CRM API error: ${response.status}`);
      }
    },
  };
}
