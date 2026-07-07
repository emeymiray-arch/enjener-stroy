import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox, ConsentLabel } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { contactContent } from '@/content/contact';
import { submitContactForm } from '@/api/contact';
import {
  validateContactForm,
  hasErrors,
  formatPhone,
} from '@/utils/validation';
import type { ContactFormData, ContactFormErrors } from '@/types';

const initialFormData: ContactFormData = {
  name: '',
  phone: '',
  email: '',
  comment: '',
  consent: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { form } = contactContent;

  const handleChange = (
    field: keyof ContactFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof ContactFormErrors];
        return next;
      });
    }
  };

  const handlePhoneChange = (value: string) => {
    handleChange('phone', formatPhone(value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validateContactForm(formData);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setIsSuccess(true);
      setFormData(initialFormData);
    } catch {
      setSubmitError(form.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-muted">
          <CheckCircle size={28} className="text-gold" />
        </div>
        <h3 className="text-xl font-semibold text-ink">
          {form.successMessage}
        </h3>
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => setIsSuccess(false)}
        >
          Отправить ещё одну заявку
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <h3 className="text-xl font-semibold text-ink">{form.title}</h3>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label={form.nameLabel}
          placeholder={form.namePlaceholder}
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          required
        />
        <Input
          label={form.phoneLabel}
          placeholder={form.phonePlaceholder}
          value={formData.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          error={errors.phone}
          type="tel"
          required
        />
      </div>

      <Input
        label={form.emailLabel}
        placeholder={form.emailPlaceholder}
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
        type="email"
        required
      />

      <Textarea
        label={form.commentLabel}
        placeholder={form.commentPlaceholder}
        value={formData.comment}
        onChange={(e) => handleChange('comment', e.target.value)}
        error={errors.comment}
      />

      <Checkbox
        checked={formData.consent}
        onChange={(e) => handleChange('consent', e.target.checked)}
        label={<ConsentLabel />}
        error={errors.consent}
        required
      />

      <AnimatePresence>
        {submitError ? (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-400"
          >
            {submitError}
          </motion.p>
        ) : null}
      </AnimatePresence>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full md:w-auto"
      >
        {form.submitButton}
      </Button>
    </form>
  );
}
