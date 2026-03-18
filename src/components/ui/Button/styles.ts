'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export type ButtonVariant = 'dark' | 'light' | 'ghost' | 'ghostLight';

const variants = {
  dark: css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }

    &:hover {
      opacity: 0.85;
    }
  `,
  light: css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};

    svg {
      fill: ${theme.colors.black};
    }

    &:hover {
      opacity: 0.85;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.gray[300]};

    svg {
      fill: ${theme.colors.black};
    }

    &:hover {
      border-color: ${theme.colors.black};
    }
  `,
  ghostLight: css`
    background-color: transparent;
    color: ${theme.colors.white};

    svg {
      display: none;
    }
  `,
};

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 14px 12px 14px;
  border: none;
  width: fit-content;
  border-radius: 999px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: ${theme.letterSpacing.min};
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) => variants[variant]}

  @media (max-width: 768px) {
    padding: 12px 14px 12px 14px;
  }

  svg {
    width: 22px;
    height: 22px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
