'use client';

import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  clip-path: inset(-4px -4px -8px -4px);

  .text-reveal__inner {
    display: block;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .text-reveal__clone {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(110%);
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover > &,
    a:hover > &,
    li:hover > &,
    .text-reveal-trigger:hover > &,
    button:hover &,
    a:hover &,
    li:hover &,
    .text-reveal-trigger:hover & {
      .text-reveal__inner {
        transform: translateY(-110%);
      }
      .text-reveal__clone {
        transform: translateY(0%);
      }
    }
  }
`;

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

export function TextReveal({ children, className }: TextRevealProps) {
  return (
    <Wrapper className={className}>
      <span className="text-reveal__inner">{children}</span>
      <span className="text-reveal__clone" aria-hidden="true">{children}</span>
    </Wrapper>
  );
}
