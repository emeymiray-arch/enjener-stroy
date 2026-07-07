import type { ContactFormData, ContactFormErrors } from '@/types';
import { EMAIL_REGEX, PHONE_REGEX } from './constants';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Введите ваше имя';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Имя должно содержать минимум 2 символа';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Введите номер телефона';
  } else if (!PHONE_REGEX.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Введите корректный номер телефона';
  }

  if (!data.email.trim()) {
    errors.email = 'Введите email';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Введите корректный email';
  }

  if (!data.consent) {
    errors.consent = 'Необходимо согласие на обработку персональных данных';
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length === 0) return '';
  if (digits.length <= 1) return `+7 (${digits}`;
  if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
  if (digits.length <= 7)
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 9)
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}
