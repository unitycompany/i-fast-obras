'use client';

import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
}

export function OptimizedImage({
  alt,
  quality = 90,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'blur',
  loading,
  priority,
  blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRENEOEQ1Ii8+PC9zdmc+',
  ...rest
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      quality={quality}
      sizes={sizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={priority ? undefined : (loading ?? 'lazy')}
      priority={priority}
      {...rest}
    />
  );
}
