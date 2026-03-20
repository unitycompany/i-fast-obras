"use client";

import styled from "@emotion/styled";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { OptimizedImage, Text, TextReveal, PageTransition, usePageTransition } from "@/components/ui";
import { theme } from "@/styles/theme";

import ArrowRight from "@/assets/icons/arrow-right.svg";

const HeaderContainer = styled.header`
  /* Box-shadow colors — edite aqui */
  --header-shadow: ${({ theme }) => theme.colors.gray[100]};
  --header-shadow-dark: ${({ theme }) => theme.colors.gray[600]};
  --header-shadow-light: ${({ theme }) => theme.colors.gray[200]};

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  box-shadow: 0 0.4px 0 0 var(--header-shadow);

  & .header__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 16px 48px;

    @media (max-width: 768px) {
      padding: 16px 24px;
      grid-template-columns: 1fr 1fr;
      direction: rtl;
    }
  }

  & .header__button-menu {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-self: start;

    @media (max-width: 768px) {
      justify-self: right;
    }

    & > svg {
      width: 16px;
      height: 16px;
    }

    .header__menu-text-wrapper {
      display: inline-grid;
      clip-path: inset(-4px -4px -8px -4px);

      > span {
        grid-area: 1 / 1;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: ${({ theme }) => theme.letterSpacing.min};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
      }

      > span:last-child {
        transform: translateY(110%);
      }
    }
  }

  & .header__logo-wrapper {
    position: relative;
    justify-self: center;
    width: 180px;
    height: 40px;
    cursor: pointer;

    @media (max-width: 768px) {
      justify-self: end;
      width: 160px;
    }
  }

  & .header__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &--black {
      opacity: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      cursor: pointer;
    }
  }

  & .header__button-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    gap: 12px;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 768px) {
      display: none;
    }

    & > svg {
      width: 18px;
      height: 18px;
      color: inherit;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
    }

    &:hover > svg {
      transform: translateX(4px);
    }

    .header__contact-text {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;
      font-weight: 500;
      letter-spacing: ${({ theme }) => theme.letterSpacing.min};
      text-transform: uppercase;
      color: inherit;
    }
  }
`;

const MenuIcon = styled.svg`
  overflow: visible;

  .menu-line {
    stroke: ${theme.colors.white};
    stroke-width: 1.5;
    stroke-linecap: round;
    transition: none;
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  padding-top: var(--header-height);
  z-index: 99;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  will-change: clip-path;
  clip-path: inset(0 0 100% 0);

  & .sidebar__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 100%;

    @media (max-width: 768px) {
      gap: 18px;
      align-items: flex-start;
      padding: 24px;
    }

    &-item {
      display: flex;
      align-items: center;
      gap: 0;
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 48px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: ${({ theme }) => theme.letterSpacing.default};
      cursor: pointer;
      line-height: 100%;
      opacity: 0;
      transform: translateY(40px);

      @media (max-width: 768px) {
        font-size: 42px;
      }

      .sidebar__nav-arrow {
        display: inline-flex;
        overflow: hidden;
        width: 0;
        transition: width 0.4s cubic-bezier(0.76, 0, 0.24, 1), margin 0.4s cubic-bezier(0.76, 0, 0.24, 1);
        margin-left: 0;

        svg {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          color: ${({ theme }) => theme.colors.white};
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);

          @media (max-width: 768px) {
            width: 28px;
            height: 28px;
          }
        }
      }

      &:hover .sidebar__nav-arrow {
        @media (hover: hover) and (pointer: fine) {
          width: 32px;
          margin-left: 16px;

          svg {
            transform: translateX(0);
          }
        }
      }
    }
  }

  & .sidebar__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -0.4px 0 0 ${({ theme }) => theme.colors.gray[600]};
    opacity: 0;
    transform: translateY(20px);

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 24px;
      box-shadow: none;
    }

    &-adress {
      padding: 48px 48px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
      height: 100%;
      justify-content: flex-end;

      @media (max-width: 768px) {
        padding: 24px;
        width: 100%;
      }

      &-text {
        color: ${({ theme }) => theme.colors.gray[400]};
        font-size: 20px;
        max-width: 400px;
        letter-spacing: ${({ theme }) => theme.letterSpacing.default};
        line-height: 120%;

        @media (max-width: 768px) {
          font-size: 16px;
          max-width: 280px;
          text-align: left;
        }
      }

      button {
        padding: 6px 2px;
        border-bottom: ${({ theme }) => `2px solid ${theme.colors.white}`};
        color: ${({ theme }) => theme.colors.white};
        background: transparent;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: ${({ theme }) => theme.letterSpacing.min};
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    &-copyright {
      padding: 24px 48px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;

      @media (max-width: 768px) {
        padding: 24px;
        width: 100%;
        justify-content: flex-start;
        box-shadow: 0 -0.4px 0 0 ${({ theme }) => theme.colors.gray[600]};
      }
    
      &-text {
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
    }
  }
`;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const menuTextRef = useRef<HTMLSpanElement>(null);
  const fecharTextRef = useRef<HTMLSpanElement>(null);
  const logoBlackRef = useRef<HTMLDivElement>(null);
  const logoWhiteRef = useRef<HTMLDivElement>(null);
  const contactBtnRef = useRef<HTMLButtonElement>(null);
  const { overlayRef, navigateWithTransition } = usePageTransition();

  const isScrolledRef = useRef(false);

  useEffect(() => {
    if (headerRef.current) {
      const h = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 40;
      if (scrolled === isScrolledRef.current || isOpen) return;
      isScrolledRef.current = scrolled;

      const headerEl = headerRef.current;
      const textColor = scrolled ? theme.colors.black : theme.colors.white;

      gsap.to(headerEl, {
        backgroundColor: scrolled ? theme.colors.white : 'transparent',
        duration: 0.35,
        ease: 'power2.out',
      });

      // Text & icon colors
      gsap.to('.menu-line', { stroke: textColor, duration: 0.35, ease: 'power2.out' });
      gsap.to([menuTextRef.current, fecharTextRef.current], { color: textColor, duration: 0.35, ease: 'power2.out' });
      gsap.to(contactBtnRef.current, { color: textColor, duration: 0.35, ease: 'power2.out' });

      // Logo swap
      gsap.to(logoBlackRef.current, { opacity: scrolled ? 1 : 0, duration: 0.3, ease: 'power2.out' });
      gsap.to(logoWhiteRef.current, { opacity: scrolled ? 0 : 1, duration: 0.3, ease: 'power2.out' });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const navigateTo = (href: string, index: number) => {
    const li = navItemsRef.current[index];
    if (!li) return;

    const arrow = li.querySelector('.sidebar__nav-arrow') as HTMLElement;
    const arrowSvg = arrow?.querySelector('svg') as SVGElement;
    const inner = li.querySelector('.text-reveal__inner') as HTMLElement;
    const clone = li.querySelector('.text-reveal__clone') as HTMLElement;

    const isAnchor = href.startsWith('#');

    const tl = gsap.timeline({
      onComplete: () => {
        if (isAnchor) {
          toggle();
          setTimeout(() => scrollToSection(href), 600);
        } else {
          navigateWithTransition(href);
        }
      }
    });

    // Text reveal
    if (inner && clone) {
      tl.to(inner, { y: '-110%', duration: 0.4, ease: 'power3.inOut' }, 0)
        .to(clone, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0);
    }

    // Arrow slide in
    if (arrow && arrowSvg) {
      tl.to(arrow, { width: 32, marginLeft: 16, duration: 0.4, ease: 'power3.inOut' }, 0)
        .to(arrowSvg, { x: 0, duration: 0.4, ease: 'power3.inOut' }, 0);
    }

    // Fade out all items after animation
    tl.to(navItemsRef.current, {
      opacity: 0, duration: 0.3, ease: 'power3.in'
    }, 0.35)
    .to(bottomContainerRef.current, {
      opacity: 0, duration: 0.2, ease: 'power3.in'
    }, 0.35);
  };

  const toggle = () => {
    const opening = !isOpen;
    setIsOpen(opening);

    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } });

    if (opening) {
      // Icon: hambúrguer → X
      tl.to(line2Ref.current, { opacity: 0, duration: 0.15 }, 0)
        .to(line1Ref.current, { attr: { x1: 2, y1: 2, x2: 16, y2: 14 } }, 0)
        .to(line3Ref.current, { attr: { x1: 2, y1: 14, x2: 16, y2: 2 } }, 0)
        // Text: Menu → Fechar (rolling)
        .to(menuTextRef.current, { y: '-110%', duration: 0.4, ease: 'power3.inOut' }, 0)
        .fromTo(fecharTextRef.current, { y: '110%' }, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0)
        // Sidebar abre
        .to(sidebarRef.current, { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power3.inOut' }, 0)
        // Header → preto
        .to(headerRef.current, { backgroundColor: theme.colors.black, boxShadow: `0 0.4px 0 0 var(--header-shadow-dark)`, duration: 0.5 }, 0)
        // Linhas do menu → branco
        .to('.menu-line', { stroke: theme.colors.white, duration: 0.4 }, 0.1)
        // Texto menu → branco
        .to([menuTextRef.current, fecharTextRef.current], { color: theme.colors.white, duration: 0.4 }, 0.1)
        // Logo: black fade out, white fade in
        .to(logoBlackRef.current, { opacity: 0, duration: 0.3 }, 0.1)
        .to(logoWhiteRef.current, { opacity: 1, duration: 0.3 }, 0.2)
        // Botão contato → branco
        .to(contactBtnRef.current, { color: theme.colors.white, duration: 0.4 }, 0.1)
        // Nav items stagger
        .to(navItemsRef.current, {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          stagger: 0.07
        }, 0.25)
        // Bottom container
        .to(bottomContainerRef.current, {
          y: 0, opacity: 1, duration: 0.5, ease: 'power3.out'
        }, 0.5);
    } else {
      // Nav items + bottom fade out
      tl.to(navItemsRef.current, {
          y: -20, opacity: 0, duration: 0.3, ease: 'power3.in',
          stagger: 0.03
        }, 0)
        .to(bottomContainerRef.current, {
          y: -10, opacity: 0, duration: 0.25, ease: 'power3.in'
        }, 0)
        // Icon: X → hambúrguer
        .to(line1Ref.current, { attr: { x1: 0, y1: 2, x2: 18, y2: 2 } }, 0)
        .to(line3Ref.current, { attr: { x1: 0, y1: 14, x2: 18, y2: 14 } }, 0)
        .to(line2Ref.current, { opacity: 1, duration: 0.15 }, 0.2)
        // Text: Fechar → Menu (rolling)
        .to(fecharTextRef.current, { y: '-110%', duration: 0.4, ease: 'power3.inOut' }, 0)
        .fromTo(menuTextRef.current, { y: '110%' }, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0)
        // Sidebar fecha
        .to(sidebarRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'power3.inOut' }, 0)
        // Header → restaurar com base no scroll
        .to(headerRef.current, {
          backgroundColor: window.scrollY > 40 ? theme.colors.white : 'transparent',
          boxShadow: `0 0.4px 0 0 var(--header-shadow-light)`,
          duration: 0.5
        }, 0)
        // Cores baseadas no scroll
        .to('.menu-line', { stroke: window.scrollY > 40 ? theme.colors.black : theme.colors.white, duration: 0.4 }, 0.1)
        .to([menuTextRef.current, fecharTextRef.current], { color: window.scrollY > 40 ? theme.colors.black : theme.colors.white, duration: 0.4 }, 0.1)
        // Logo: restaurar com base no scroll
        .to(logoWhiteRef.current, { opacity: window.scrollY > 40 ? 0 : 1, duration: 0.3 }, 0.1)
        .to(logoBlackRef.current, { opacity: window.scrollY > 40 ? 1 : 0, duration: 0.3 }, 0.2)
        // Botão contato
        .to(contactBtnRef.current, { color: window.scrollY > 40 ? theme.colors.black : theme.colors.white, duration: 0.4 }, 0.1)
        // Reset items for next open
        .set(navItemsRef.current, { y: 40, opacity: 0 })
        .set(bottomContainerRef.current, { y: 20, opacity: 0 });

      isScrolledRef.current = window.scrollY > 40;
    }
  };

  const nav = [
    {
      id: 1,
      name: 'Início',
      href: '#inicio'
    },
    {
      id: 2,
      name: 'Método',
      href: '#metodo'
    },
    {
      id: 3,
      name: 'Portfólio',
      href: '#portfolio'
    },
    {
      id: 4,
      name: 'Etapas',
      href: '#etapas'
    },
    {
      id: 5,
      name: 'Contato',
      href: '#contato'
    },
  ]

  return <>
    <HeaderContainer theme={theme} ref={headerRef}>
      <div className="header__inner">
      <button className="header__button-menu" onClick={toggle} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen}>
        <MenuIcon width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
          <line ref={line1Ref} className="menu-line" x1="0" y1="2" x2="18" y2="2" />
          <line ref={line2Ref} className="menu-line" x1="0" y1="8" x2="18" y2="8" />
          <line ref={line3Ref} className="menu-line" x1="0" y1="14" x2="18" y2="14" />
        </MenuIcon>
        <span className="header__menu-text-wrapper">
          <Text as="span" ref={menuTextRef}>Menu</Text>
          <Text as="span" ref={fecharTextRef}>Fechar</Text>
        </span>
      </button>
      <div className="header__logo-wrapper" role="button" tabIndex={0} onClick={() => scrollToSection('#inicio')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('#inicio'); } }} aria-label="Fast Obras - Ir para o início">
        <div ref={logoBlackRef} className="header__image header__image--black">
          <OptimizedImage
            src="/assets/images/logos/logo-fast-obras-black.svg"
            alt="Logo da Fast Obras"
            width={180}
            height={40}
            placeholder="empty"
          />
        </div>
        <div ref={logoWhiteRef} className="header__image header__image--white">
          <OptimizedImage
            src="/assets/images/logos/logo-fast-obras-white.svg"
            alt="Logo da Fast Obras"
            width={180}
            height={40}
            placeholder="empty"
          />
        </div>
      </div>
      <button className="header__button-contact" ref={contactBtnRef} onClick={() => scrollToSection('#contato')} aria-label="Solicitar orçamento">
        <TextReveal className="header__contact-text">
          <Text as="span">Solicitar orçamento</Text>
        </TextReveal>
        <ArrowRight width={16} height={16} aria-hidden="true" />
      </button>
      </div>
    </HeaderContainer>
    <Sidebar ref={sidebarRef} theme={theme} role="dialog" aria-label="Menu de navegação">
      <nav aria-label="Navegação principal">
      <ul className="sidebar__nav">
        {
          nav.map((i, item) => (
            <li className="sidebar__nav-item" key={item} role="button" tabIndex={0} ref={(el) => { if (el) navItemsRef.current[item] = el; }} onClick={() => navigateTo(i.href, item)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(i.href, item); } }}>
              <TextReveal>
                <Text as='span'>
                  {i.name}
                </Text>
              </TextReveal>
              <span className="sidebar__nav-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </li>
          ))
        }
      </ul>
      </nav>
      <div className="sidebar__container" ref={bottomContainerRef}>
          <div className="sidebar__container-adress">
            <Text as="p" className="sidebar__container-adress-text">
              Avenida Roberto Silveira, 251 - Centro, Miguel Pereira - RJ, CEP 26900-000
            </Text>
            <button onClick={() => { toggle(); setTimeout(() => scrollToSection('#contato'), 600); }}>
              <TextReveal>
                <Text as='span' className="sidebar__container-adress-button">
                  Entrar em contato
                </Text>
              </TextReveal>
            </button>
          </div>
          <div className="sidebar__container-copyright">
            <Text as="p" className="sidebar__container-copyright-text">
              <strong>© 2026 Fast Obras.</strong> Todos os direitos reservados.
            </Text>
          </div>
      </div>
    </Sidebar>
    <PageTransition overlayRef={overlayRef} />
  </>;
}
