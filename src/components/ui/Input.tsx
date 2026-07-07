import { forwardRef } from 'react';
import { cn } from '@/utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, '-');

    return (
      <div className="flex flex-col gap-2">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-ink">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/5',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/10',
            className,
          )}
          {...props}
        />
        {error ? <span className="text-xs text-red-500">{error}</span> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
