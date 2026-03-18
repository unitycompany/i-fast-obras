'use client';

import { ElementType, HTMLAttributes, ReactNode, forwardRef } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'p', children, className, ...rest }, ref) => {
    return (
      <Component className={className} ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
