"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { usePageTransition } from "@/components/ui";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  .policy__header {
    width: 100%;
    padding: 48px 48px 0;

    @media (max-width: 768px) {
      padding: 24px 24px 0;
    }

    &-back {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.primary};
      letter-spacing: ${({ theme }) => theme.letterSpacing.min};
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: pointer;
      background: none;
      border: none;
      padding: 8px 0;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }

      svg {
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(-4px);
      }
    }
  }

  .policy__content {
    width: 100%;
    max-width: 800px;
    padding: 64px 48px 96px;

    @media (max-width: 768px) {
      padding: 48px 24px 72px;
    }

    h1 {
      font-size: 42px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.primary};
      letter-spacing: ${({ theme }) => theme.letterSpacing.default};
      color: ${({ theme }) => theme.colors.black};
      line-height: 110%;
      margin-bottom: 16px;

      @media (max-width: 768px) {
        font-size: 32px;
      }
    }

    .policy__date {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.gray[400]};
      margin-bottom: 48px;
    }

    h2 {
      font-size: 24px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.primary};
      letter-spacing: ${({ theme }) => theme.letterSpacing.default};
      color: ${({ theme }) => theme.colors.black};
      line-height: 120%;
      margin-top: 40px;
      margin-bottom: 16px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    p {
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.primary};
      letter-spacing: ${({ theme }) => theme.letterSpacing.default};
      color: ${({ theme }) => theme.colors.gray[400]};
      line-height: 160%;
      margin-bottom: 16px;
    }

    ul {
      margin-bottom: 16px;
      padding-left: 24px;

      li {
        font-size: 16px;
        font-family: ${({ theme }) => theme.fonts.primary};
        letter-spacing: ${({ theme }) => theme.letterSpacing.default};
        color: ${({ theme }) => theme.colors.gray[400]};
        line-height: 160%;
        margin-bottom: 8px;
        list-style: disc;
      }
    }

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.black};
    }

    a {
      color: ${({ theme }) => theme.colors.primary.main};
      text-decoration: underline;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }
`;

interface PolicyLayoutProps {
  title: string;
  date: string;
  children: ReactNode;
}

export function PolicyLayout({ title, date, children }: PolicyLayoutProps) {
  const { navigateWithTransition } = usePageTransition();

  return (
    <Container theme={theme}>
      <div className="policy__header" style={{ maxWidth: 800, width: "100%" }}>
        <button className="policy__header-back" onClick={() => navigateWithTransition("/")}>
          <ArrowLeftIcon size={18} weight="bold" />
          Voltar ao início
        </button>
      </div>
      <div className="policy__content">
        <h1>{title}</h1>
        <p className="policy__date">Última atualização: {date}</p>
        {children}
      </div>
    </Container>
  );
}
