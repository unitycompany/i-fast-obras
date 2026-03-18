'use client';

import { ReactNode } from 'react';
import { StyledBadge, BadgeVariant } from './styles';

interface BadgeProps {
  icon: ReactNode;
  label: string;
  variant?: BadgeVariant;
}

export function Badge({ icon, label, variant = 'light' }: BadgeProps) {
  return (
    <StyledBadge variant={variant}>
      {icon}
      {label}
    </StyledBadge>
  );
}
