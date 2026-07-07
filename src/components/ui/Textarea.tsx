import { forwardRef } from 'react';
import { cn } from '@/utils/helpers';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s/g, '-');

    return (
      <div className="flex flex-col gap-2">
        {label ? (
          <label htmlFor={textareaId} className="text-sm font-medium text-ink">
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          className={cn(
            'w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/5',
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

Textarea.displayName = 'Textarea';
