import { cn } from '@/utils/helpers';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {label ? <p className="section-label mb-4">{label}</p> : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight md:text-[2.5rem] lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed text-ink-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
