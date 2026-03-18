"use client";

import styled from "@emotion/styled";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { theme } from "@/styles/theme";
import { Badge, Button, Text, TextReveal, VideoBackground } from "@/components/ui";
import { FacebookLogoIcon, InstagramLogoIcon, TimerIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footer__container {
    width: 100%;
    height: 800px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 72px;

    @media (max-width: 768px) {
      height: 680px;
      padding: 72px 24px;
      align-items: flex-start;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, ${props => props.theme.colors.black}, transparent);
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, ${props => props.theme.colors.black}, transparent);
      z-index: 1;
    }

    &-texts {
      position: relative;
      z-index: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 32px;

      @media (max-width: 768px) {
        width: 100%;
        gap: 32px;
        align-items: flex-start;
      }

      &-title {
        font-size: 54px;
        max-width: 600px;
        text-align: center;
        letter-spacing: ${props => props.theme.letterSpacing.default};
        line-height: 100%;
        font-weight: 500;
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.white};

        @media (max-width: 768px) {
          width: 100%;
          max-width: 320px;
          font-size: 42px;
          line-height: 100%;
          text-align: left;
        }

        & strong {
          font-weight: 500;
          font-family: ${props => props.theme.fonts.secondary};
          letter-spacing: ${props => props.theme.letterSpacing.default};
          font-style: italic;
        }
      }

      &-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        position: relative;

        @media (max-width: 768px) {
          width: 100%;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 12px;
        }
      }
    }
    
  }

  .footer__content {
    width: 100%;
    padding: 0px;
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;

    @media (max-width: 768px) {
      gap: 24px 48px;
    }

    &-options {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: flex-start;
      justify-content: center;
      gap: 24px;
      padding: 48px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 48px 24px;
        padding: 24px;
      }

      &-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2px;
        opacity: 0;
        transform: translateY(30px);

        & > span {
          clip-path: inset(-4px -4px 0px -4px);
        }

        li {
          & > span {
            clip-path: inset(-4px -4px 0px -4px);
          }

          @media (hover: hover) and (pointer: fine) {
            &:hover .footer__content-options-list-item {
              color: ${props => props.theme.colors.white};
            }
          }
        }

        &-title {
          font-size: 20px;
          line-height: 100%;
          color: ${props => props.theme.colors.gray[100]};
          font-weight: 500;
          font-family: ${props => props.theme.fonts.secondary};
          letter-spacing: ${props => props.theme.letterSpacing.default};
          margin-bottom: 16px;
          cursor: default;
        }

        &-item {
          font-size: 18px;
          line-height: 100%;
          color: ${props => props.theme.colors.gray[400]};
          font-weight: 400;
          font-family: ${props => props.theme.fonts.primary};
          letter-spacing: ${props => props.theme.letterSpacing.default};
          cursor: pointer;
          transition: color 0.3s ease;

          &--active {
            color: ${props => props.theme.colors.white};
          }
        }
      }
    }

    &-policies {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 32px;
      border-top: 1px solid ${props => props.theme.colors.gray[700]};
      padding: 48px;
      opacity: 0;
      transform: translateY(30px);

      @media (max-width: 768px) {
        padding: 48px 24px;
      }

      &-infos {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 24px;  

        &-copyright {
          font-size: 20px;
          color: ${props => props.theme.colors.gray[200]};
          font-weight: 400;
          font-family: ${props => props.theme.fonts.primary};
          letter-spacing: ${props => props.theme.letterSpacing.default};
          line-height: 120%;

          @media (max-width: 768px) {
            font-size: 20px;
          }

          & strong {
            font-weight: 400;
            font-family: ${props => props.theme.fonts.secondary};
            letter-spacing: ${props => props.theme.letterSpacing.default};
            color: ${props => props.theme.colors.gray[100]};
          }
        }

        &-links {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          gap: 16px;

          @media (max-width: 768px) {
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
          }

          &-link {
            font-size: 18px;
            color: ${props => props.theme.colors.gray[400]};
            font-weight: 400;
            letter-spacing: ${props => props.theme.letterSpacing.min};
            cursor: pointer;
            font-family: ${props => props.theme.fonts.primary};
            transition: color 0.3s ease;
          }

          li {
            & > span {
              clip-path: inset(-4px -4px 0px -4px);
            }

            @media (hover: hover) and (pointer: fine) {
              &:hover .footer__content-policies-infos-links-link {
                color: ${props => props.theme.colors.white};
              }
            }
          }
        }
      }

      &-socials {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 24px;

        &-links {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          gap: 12px;

          &-link {
            font-size: 24px;
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.gray[700]};
            border: 1px solid ${props => props.theme.colors.gray[600]};
            padding: 6px;
            border-radius: 12px;
            cursor: pointer;
            transition: background-color 0.3s ease, border-color 0.3s ease;

            @media (max-width: 768px) {
              font-size: 24px;
            }

            &:hover {
              background-color: ${props => props.theme.colors.gray[600]};
              border-color: ${props => props.theme.colors.gray[500]};
            }
          }
        }
      }
    }
  }
`;

const siteMap = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre nós", href: "/sobre-nos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLOListElement[]>([]);
  const policiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lists = listsRef.current.filter(Boolean);
    const policies = policiesRef.current;
    if (!lists.length && !policies) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === contentRef.current) {
            gsap.to(lists, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.1,
            });

            gsap.to(policies, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              delay: lists.length * 0.1 + 0.15,
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return <FooterContainer theme={theme}>
    <div className="footer__container">
      <VideoBackground 
        src="/assets/videos/footer-video.mp4"
        style={{ position: 'absolute', inset: 0 }}
      />
      <article className="footer__container-texts">
        <Badge 
          icon={<TimerIcon weight="bold" />}
          label="Entrega rápida"
        />
        <Text as='h1' className="footer__container-texts-title">
          A <strong>solução</strong> ideal que a sua obra precisava
        </Text>
        <div className="footer__container-texts-actions">
          <Button variant="light" className="footer__container-texts-action-button-contact">
            <TextReveal>Orçamento</TextReveal>
          </Button>
          <Button variant="ghostLight" className="footer__container-texts-action-button-contact">
            <TextReveal>Saber mais</TextReveal>
          </Button>
        </div>
      </article>
    </div>
    <main className="footer__content" ref={contentRef}>
        <div className="footer__content-options"> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[0] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Serviços</Text>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">Contrução Comercial</Text></TextReveal></li>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">Projeto Comercial</Text></TextReveal></li>
          </ol>
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[1] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Mapa do site</Text>
            {siteMap.map((item) => (
              <li key={item.href}>
                <TextReveal>
                  <Text
                    as="span"
                    className={`footer__content-options-list-item${pathname === item.href ? " footer__content-options-list-item--active" : ""}`}
                  >
                    {item.name}
                  </Text>
                </TextReveal>
              </li>
            ))}
          </ol> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[2] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Contato</Text>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">+55 (24) 99288-2282</Text></TextReveal></li>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">WhatsApp</Text></TextReveal></li>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">Instagram</Text></TextReveal></li>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">E-mail</Text></TextReveal></li>
          </ol> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[3] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Localização</Text>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">Avenida Roberto Silveira, 251 - Centro, Miguel Pereira - RJ, CEP 26900-000</Text></TextReveal></li>
          </ol>
        </div>
        <div className="footer__content-policies" ref={policiesRef}>
          <article className="footer__content-policies-infos">
            <Text as="span" className="footer__content-policies-infos-copyright">
              <strong>© 2026 Fast Obras.</strong> Todos os direitos reservados.
            </Text>
            <ul className="footer__content-policies-infos-links">
              <li><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Política de Privacidade</Text></TextReveal></li>
              <li><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Termos de Uso</Text></TextReveal></li>
              <li><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Cookies</Text></TextReveal></li>
            </ul>
          </article>
          <div className="footer__content-policies-socials">
            <ul className="footer__content-policies-socials-links">
              <li className="footer__content-policies-socials-links-link">
                <InstagramLogoIcon weight="light" />
              </li>
              <li className="footer__content-policies-socials-links-link">
                <FacebookLogoIcon weight="light" />
              </li>
              <li className="footer__content-policies-socials-links-link">
                <WhatsappLogoIcon weight="light" />
              </li>
            </ul>
          </div>
        </div>
    </main>
  </FooterContainer>;
}
