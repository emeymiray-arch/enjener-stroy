import type { ContactFormData, ApiResponse } from '@/types';

const API_BASE = '/api';

export async function submitContactForm(
  data: ContactFormData,
): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as ApiResponse;

  if (!response.ok) {
    throw new Error(result.error ?? 'Ошибка отправки формы');
  }

  return result;
}
