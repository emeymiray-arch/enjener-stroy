import nodemailer from 'nodemailer';
import type { NotificationProvider, NotificationPayload } from '../../src/types';

export function createEmailProvider(): NotificationProvider | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return {
    name: 'email',
    async send(payload: NotificationPayload): Promise<void> {
      const { data } = payload;

      await transporter.sendMail({
        from: `"ИНЖЕНЕР-СТРОЙ" <${SMTP_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: data.email,
        subject: `Новая заявка с сайта — ${data.name}`,
        html: `
          <h2>Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Комментарий:</strong> ${data.comment || '—'}</p>
          <hr>
          <p><small>Отправлено: ${payload.timestamp}</small></p>
        `,
        text: `
Новая заявка с сайта
Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email}
Комментарий: ${data.comment || '—'}
        `.trim(),
      });
    },
  };
}
