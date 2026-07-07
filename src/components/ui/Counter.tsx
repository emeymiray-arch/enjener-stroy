import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/helpers';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  size?: 'sm' | 'lg';
}

export function Counter({
  value,
  suffix = '',
  label,
  duration = 2,
  size = 'lg',
}: CounterProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          'font-semibold tabular-nums tracking-tight text-ink',
          size === 'sm' ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl',
        )}
      >
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <p
        className={cn(
          'mt-1.5 leading-snug text-ink-muted',
          size === 'sm' ? 'text-xs' : 'text-sm',
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}
