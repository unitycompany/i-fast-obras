'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export type BadgeVariant = 'dark' | 'light';

const variants = {
  light: css`
    background-color: #DCD8D510;
    color: ${theme.colors.white};
    backdrop-filter: blur(12px);

    svg {
      fill: ${theme.colors.white};
    }
  `,
  dark: css`
    background-color: ${theme.colors.gray[700]};
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }
  `,
};

export const StyledBadge = styled.span<{ variant: BadgeVariant }>`
  display: inline-flex;
  width: max-content;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 10px;
  border-radius: 12px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: ${theme.letterSpacing.min};
  white-space: nowrap;

  ${({ variant }) => variants[variant]}

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;
