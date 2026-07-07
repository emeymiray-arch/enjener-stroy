import { useState } from 'react';
import { cn } from '@/utils/helpers';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
}

export function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: LazyImageProps) {
  const isLocal = src.startsWith('/');
  const [isLoaded, setIsLoaded] = useState(isLocal);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-gray-100', wrapperClassName)}>
      {!isLoaded && !hasError ? (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      ) : null}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          hasError && 'opacity-30',
          className,
        )}
        {...props}
      />
    </div>
  );
}
