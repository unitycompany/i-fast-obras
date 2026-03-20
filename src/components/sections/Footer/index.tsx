"use client";

import styled from "@emotion/styled";
import gsap from "gsap";
import { useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { theme } from "@/styles/theme";
import { Badge, Button, Text, TextReveal, VideoBackground, usePageTransition } from "@/components/ui";
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
  { name: "Início", href: "#inicio" },
  { name: "Método", href: "#metodo" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Etapas", href: "#etapas" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { navigateWithTransition } = usePageTransition();
  const contentRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLOListElement[]>([]);
  const policiesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

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

  return <FooterContainer theme={theme} id="footer" aria-label="Rodapé">
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
          <Button variant="light" className="footer__container-texts-action-button-contact" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            <TextReveal>Orçamento</TextReveal>
          </Button>
          <Button variant="ghostLight" className="footer__container-texts-action-button-contact" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            <TextReveal>Saber mais</TextReveal>
          </Button>
        </div>
      </article>
    </div>
    <div className="footer__content" ref={contentRef} role="contentinfo">
        <nav className="footer__content-options" aria-label="Links do rodapé"> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[0] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Serviços</Text>
            <li role="button" tabIndex={0} onClick={() => scrollToSection('#metodo')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('#metodo'); } }}><TextReveal><Text as="span" className="footer__content-options-list-item">Construção Comercial</Text></TextReveal></li>
            <li role="button" tabIndex={0} onClick={() => scrollToSection('#metodo')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('#metodo'); } }}><TextReveal><Text as="span" className="footer__content-options-list-item">Projeto Comercial</Text></TextReveal></li>
          </ol>
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[1] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Mapa do site</Text>
            {siteMap.map((item) => (
              <li key={item.href} role="button" tabIndex={0} onClick={() => scrollToSection(item.href)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection(item.href); } }} style={{ cursor: 'pointer' }}>
                <TextReveal>
                  <Text
                    as="span"
                    className="footer__content-options-list-item"
                  >
                    {item.name}
                  </Text>
                </TextReveal>
              </li>
            ))}
          </ol> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[2] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Contato</Text>
            <li><TextReveal><a href="tel:+5524992882282" style={{ textDecoration: 'none', color: 'inherit' }}><Text as="span" className="footer__content-options-list-item">+55 (24) 99288-2282</Text></a></TextReveal></li>
            <li><TextReveal><a href="https://wa.me/5524992882282" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><Text as="span" className="footer__content-options-list-item">WhatsApp</Text></a></TextReveal></li>
            <li><TextReveal><a href="https://instagram.com/fastobrasbr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><Text as="span" className="footer__content-options-list-item">Instagram</Text></a></TextReveal></li>
            <li role="button" tabIndex={0} onClick={() => scrollToSection('#contato')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('#contato'); } }} style={{ cursor: 'pointer' }}><TextReveal><Text as="span" className="footer__content-options-list-item">E-mail</Text></TextReveal></li>
          </ol> 
          <ol className="footer__content-options-list" ref={(el) => { if (el) listsRef.current[3] = el; }}>
            <Text as="h6" className="footer__content-options-list-title">Localização</Text>
            <li><TextReveal><Text as="span" className="footer__content-options-list-item">Avenida Roberto Silveira, 251 - Centro, Miguel Pereira - RJ, CEP 26900-000</Text></TextReveal></li>
          </ol>
        </nav>
        <div className="footer__content-policies" ref={policiesRef}>
          <article className="footer__content-policies-infos">
            <Text as="span" className="footer__content-policies-infos-copyright">
              <strong>© 2026 Fast Obras.</strong> Todos os direitos reservados.
            </Text>
            <ul className="footer__content-policies-infos-links" role="list">
              <li role="button" tabIndex={0} onClick={() => navigateWithTransition('/politica-de-privacidade')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateWithTransition('/politica-de-privacidade'); } }} style={{ cursor: 'pointer' }}><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Política de Privacidade</Text></TextReveal></li>
              <li role="button" tabIndex={0} onClick={() => navigateWithTransition('/termos-e-condicoes')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateWithTransition('/termos-e-condicoes'); } }} style={{ cursor: 'pointer' }}><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Termos de Uso</Text></TextReveal></li>
              <li role="button" tabIndex={0} onClick={() => navigateWithTransition('/politica-de-cookies')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateWithTransition('/politica-de-cookies'); } }} style={{ cursor: 'pointer' }}><TextReveal><Text as="span" className="footer__content-policies-infos-links-link">Cookies</Text></TextReveal></li>
            </ul>
          </article>
          <div className="footer__content-policies-socials">
            <ul className="footer__content-policies-socials-links">
              <li className="footer__content-policies-socials-links-link">
                <a href="https://instagram.com/fastobras" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram" style={{ color: 'inherit', display: 'flex' }}>
                  <InstagramLogoIcon weight="light" aria-hidden="true" />
                </a>
              </li>
              <li className="footer__content-policies-socials-links-link">
                <a href="https://facebook.com/fastobras" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Facebook" style={{ color: 'inherit', display: 'flex' }}>
                  <FacebookLogoIcon weight="light" aria-hidden="true" />
                </a>
              </li>
              <li className="footer__content-policies-socials-links-link">
                <a href="https://wa.me/5524992882282" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp" style={{ color: 'inherit', display: 'flex' }}>
                  <WhatsappLogoIcon weight="light" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </FooterContainer>;
}
