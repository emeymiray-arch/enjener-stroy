import { cn } from '@/utils/helpers';
import { company } from '@/content/company';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const sizes = {
  sm: { img: 'h-8 w-8', name: 'text-[14px]' },
  md: { img: 'h-9 w-9', name: 'text-[15px]' },
  lg: { img: 'h-11 w-11', name: 'text-lg' },
};

export function Logo({
  className,
  showText = true,
  size = 'md',
  theme = 'light',
}: LogoProps) {
  const { logo } = company;
  const s = sizes[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('relative shrink-0', s.img)}>
        {logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-lg font-bold text-gold">ИС</span>
        )}
      </div>

      {showText ? (
        <div className="flex min-w-0 flex-col">
          <span
            className={cn(
              'font-semibold leading-none tracking-tight',
              s.name,
              theme === 'dark' ? 'text-white' : 'text-ink',
            )}
          >
            {company.brandName}
          </span>
          <span
            className={cn(
              'mt-1 text-[10px] font-medium uppercase tracking-[0.18em]',
              theme === 'dark' ? 'text-white/50' : 'text-ink-faint',
            )}
          >
            Строительная компания
          </span>
        </div>
      ) : null}
    </div>
  );
}
