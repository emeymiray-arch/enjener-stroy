import { cn } from '@/utils/helpers';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
  id?: string;
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn('container-custom', className)}>
      {children}
    </Tag>
  );
}
