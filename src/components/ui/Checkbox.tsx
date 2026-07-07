import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/helpers';

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const checkboxId = id ?? 'consent-checkbox';

    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={checkboxId}
          className="flex cursor-pointer items-start gap-3"
        >
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-0.5 h-4 w-4 shrink-0 rounded accent-gold',
              className,
            )}
            {...props}
          />
          <span className="text-xs leading-relaxed text-ink-muted">
            {label}
          </span>
        </label>
        {error ? <span className="text-xs text-red-500">{error}</span> : null}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export function ConsentLabel() {
  return (
    <>
      Я соглашаюсь с{' '}
      <Link to="/privacy-policy" className="text-gold hover:underline">
        Политикой конфиденциальности
      </Link>
      ,{' '}
      <Link to="/personal-data" className="text-gold hover:underline">
        Политикой обработки персональных данных
      </Link>
      ,{' '}
      <Link to="/terms" className="text-gold hover:underline">
        Пользовательским соглашением
      </Link>{' '}
      и{' '}
      <Link to="/cookie-policy" className="text-gold hover:underline">
        Политикой использования Cookie
      </Link>
      .
    </>
  );
}
