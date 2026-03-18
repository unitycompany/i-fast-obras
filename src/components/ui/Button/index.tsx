'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton, ButtonVariant } from './styles';
import { ArrowRightIcon } from '@phosphor-icons/react';

// import ArrowRight from "@/assets/icons/arrow-right.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = 'dark',
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
      <ArrowRightIcon weight="regular" />
    </StyledButton>
  );
}
