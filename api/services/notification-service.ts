import type { NotificationProvider, NotificationPayload } from '../../src/types';

export class NotificationService {
  constructor(private providers: NotificationProvider[]) {}

  async notify(payload: NotificationPayload): Promise<void> {
    const results = await Promise.allSettled(
      this.providers.map((provider) => provider.send(payload)),
    );

    const failures = results.filter((r) => r.status === 'rejected');

    if (failures.length === results.length) {
      throw new Error('All notification providers failed');
    }

    failures.forEach((failure, index) => {
      if (failure.status === 'rejected') {
        console.error(
          `Provider ${this.providers[index]?.name} failed:`,
          failure.reason,
        );
      }
    });
  }
}
