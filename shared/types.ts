export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  comment: string;
  consent: boolean;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
  consent?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface NotificationPayload {
  type: 'contact_form';
  data: ContactFormData;
  timestamp: string;
  source: string;
}

export interface NotificationProvider {
  name: string;
  send(payload: NotificationPayload): Promise<void>;
}
