"use client";

import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { ClientsRange } from "../Ranges/RangeClients";
import { OptimizedImage, Text, TextReveal } from "@/components/ui";
import { ArrowRightIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import { RangeQualitys } from "../Ranges/RangeQualitys";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SolutionContainer = styled.section`
  width: 100%;
  border-radius: 16px 16px 0 0; 
  height: auto;
  position: relative;
  z-index: 2;
  margin-top: -100vh;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;

  @media (max-width: 768px) {
    border-radius: 16px 16px 0 0;
  }

  & .solution__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 0 24px;
    }

    &-grid {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-template-rows: 1fr 2fr 1fr;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, auto);
      }

      &-item {
        flex: 1;
        will-change: clip-path;

        &--1 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;

          @media (max-width: 768px) {
            order: 1;
          }

          & .solution__container-grid-item-title strong {
            background: linear-gradient(140deg, #f41f1f 0, #fa6028 50%, #f41f1f 100%);
            color: transparent;
            font-weight: 500;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
        &--2 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(0, 0, 0, 0.1) 8px,
            rgba(0, 0, 0, 0.1) 8px
          );

          @media (max-width: 768px) {
            display: none;
          }
        }
        &--3 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;

          @media (max-width: 768px) {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            order: 4;
          }
          
          & .solution__container-grid-item-title strong {
            background: linear-gradient(140deg, #F4B41F 0, #FF8F2C 50%, #F4B41F 100%);
            color: transparent;
            font-weight: 500;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
        &--4 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          display: grid;

          @media (max-width: 768px) {
            order: 2;
          }
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          justify-content: center;

          & .problem__card {
            padding: 32px 42px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 12px;
            width: 100%;
            flex-direction: column;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.1);

            @media (max-width: 768px) {
              padding: 20px 16px;
              gap: 8px;
            }

            &:nth-child(1) {
              border-top: none;
              border-left: none;
            }

            &:nth-child(2) {
              border-top: none;
              border-left: none;
              border-right: none;
            }

            &:nth-child(3) {
              border-top: none;
              border-left: none;
              border-bottom: none;
            }

            &:nth-child(4) {
              border: none;
            }

            &-icon-float {
              position: absolute;
              right: 16px;
              top: 16px;
              font-size: 24px;
              color: ${({ theme }) => theme.colors.gray[100]};

              @media (max-width: 768px) {
                font-size: 20px;
                right: 10px;
                top: 10px;  
              }
            }

            &-title { 
              font-size: 20px;
              font-weight: 500;
              font-family: ${({ theme }) => theme.fonts.primary};
              color: ${theme.colors.secondary.dark};
              letter-spacing: ${({ theme }) => theme.letterSpacing.default};
              line-height: 110%;

              @media (max-width: 768px) {
                font-size: 16px;  
              }
            }

            &-description {
              font-size: 18px;
              font-family: ${({ theme }) => theme.fonts.primary};
              color: ${({ theme }) => theme.colors.gray[300]};
              line-height: 120%;

              @media (max-width: 768px) {
                font-size: 14px;
              }
            }
          }
        }
        &--5 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto; 

          @media (max-width: 768px) {
            padding: 48px 0;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            order: 3;
          }

          & img {
            width: auto;
            height: 120px;
            object-fit: contain;

            @media (max-width: 768px) {
              height: 80px;
            }
          }
        }
        &--6 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;
          display: grid;

          @media (max-width: 768px) {
            order: 5;
          }
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          justify-content: center;

          & .problem__card {
            padding: 32px 42px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 12px;
            width: 100%;
            flex-direction: column;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.1);

            @media (max-width: 768px) {
              padding: 20px 16px;
              gap: 8px;
            }

            &:nth-child(1) {
              border-top: none;
              border-left: none;

              @media (max-width: 768px) {
                border-left: 1px solid rgba(0, 0, 0, 0.1);
              }
            }

            &:nth-child(2) {
              border-top: none;
              border-left: none;
              border-right: none;
            }

            &:nth-child(3) {
              border-top: none;
              border-left: none;
              border-bottom: none;

              @media (max-width: 768px) {
                border-left: 1px solid rgba(0, 0, 0, 0.1);  
              }
            }

            &:nth-child(4) {
              border: none;
            }

            &-icon-float {
              position: absolute;
              right: 16px;
              top: 16px;
              font-size: 24px;
              color: ${({ theme }) => theme.colors.gray[100]};

              @media (max-width: 768px) {
                font-size: 20px;
                right: 10px;
                top: 10px;  
              }
            }

            &-title { 
              font-size: 20px;
              font-weight: 500;
              font-family: ${({ theme }) => theme.fonts.primary};
              color: ${theme.colors.secondary.dark};
              letter-spacing: ${({ theme }) => theme.letterSpacing.default};
              line-height: 110%;

              @media (max-width: 768px) {
                font-size: 16px;  
              }
            }

            &-description {
              font-size: 18px;
              font-family: ${({ theme }) => theme.fonts.primary};
              color: ${({ theme }) => theme.colors.gray[300]};
              line-height: 120%;

              @media (max-width: 768px) {
                font-size: 14px;
              }
            }
          }
        }
        &--7 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-bottom: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          font-size: 24px;

          @media (max-width: 768px) {
            display: none;
          }
        }
        &--8 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;
          border-bottom: none;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(0, 0, 0, 0.1) 8px,
            rgba(0, 0, 0, 0.1) 8px
          );

          @media (max-width: 768px) {
            display: none;
          }
        }
        &--9 {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top: none;
          border-left: none;
          border-bottom: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          font-size: 22px;
          font-weight: 500;
          font-family: ${({ theme }) => theme.fonts.primary};
          letter-spacing: ${({ theme }) => theme.letterSpacing.default};
          color: ${({ theme }) => theme.colors.black};
          gap: 12px;
          cursor: pointer;

          @media (max-width: 768px) {
            padding: 32px 16px;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            font-size: 18px;
            font-weight: 500;
            order: 6;
          }

          & svg {
            font-size: 24px;
            transition: transform 0.3s ease;

            @media (max-width: 768px) {
              font-size: 22px;
            }
          }

          &:hover svg {
            transform: translateX(4px);
          }
        }

        &-title {
          padding: 48px 0;
          display: flex;
          font-weight: 500;
          align-items: center;
          justify-content: center;
          letter-spacing: ${({ theme}) => theme.letterSpacing.default};
          font-size: 32px;
          font-family: ${({ theme }) => theme.fonts.primary};
          color: ${({ theme }) => theme.colors.secondary.dark};

          @media (max-width: 768px) {
            font-size: 24px;
            padding: 32px 0;
          }

          & strong {
            font-family: ${({ theme }) => theme.fonts.secondary};
            margin: 0 6px;
          }
        }
      }
    }
  }
`;

export function Solution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.solution__container-grid-item');

      gsap.set(items, { clipPath: 'inset(0 100% 0 0)' });
      gsap.set('.problem__card', { opacity: 0, y: 20 });
      gsap.set('.solution__container-grid-item--5 img', { opacity: 0, scale: 0.8 });
      gsap.set('.solution__container-grid-item--9', { opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.solution__container-grid',
            start: 'top 95%',
            end: 'bottom 100%',
            scrub: 1,
          },
        });

        // Row 1
        tl.to('.solution__container-grid-item--1', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        })
        .to('.solution__container-grid-item--2', {
          clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'none',
        }, '-=0.7')
        .to('.solution__container-grid-item--3', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        }, '-=0.4')

        // Row 2
        .to('.solution__container-grid-item--4', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        }, '-=0.5')
        .to('.solution__container-grid-item--5', {
          clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'none',
        }, '-=0.7')
        .to('.solution__container-grid-item--6', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        }, '-=0.4')

        // Row 3
        .to('.solution__container-grid-item--7', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        }, '-=0.5')
        .to('.solution__container-grid-item--8', {
          clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'none',
        }, '-=0.7')
        .to('.solution__container-grid-item--9', {
          clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
        }, '-=0.4')

        // Content reveal
        .to('.problem__card', {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'none',
        }, '-=1')
        .to('.solution__container-grid-item--5 img', {
          opacity: 1, scale: 1, duration: 0.8, ease: 'none',
        }, '-=1.2')
        .to('.solution__container-grid-item--9', {
          opacity: 1, duration: 0.6, ease: 'none',
        }, '-=0.8');
      });

      mm.add('(max-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.solution__container-grid',
            start: 'top 95%',
            end: 'bottom 85%',
            scrub: 0.8,
          },
        });

        // Mobile visual order: 1, 4, 5, 3, 6, 9
        [1, 4, 5, 3, 6, 9].forEach((num, i) => {
          tl.to(`.solution__container-grid-item--${num}`, {
            clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none',
          }, i * 0.3);
        });

        tl.to('.problem__card', {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: 'none',
        }, 0.5)
        .to('.solution__container-grid-item--5 img', {
          opacity: 1, scale: 1, duration: 1, ease: 'none',
        }, 0.8)
        .to('.solution__container-grid-item--9', {
          opacity: 1, duration: 0.8, ease: 'none',
        }, 1.2);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return <SolutionContainer ref={sectionRef} theme={theme} id="solucao">
    <ClientsRange />
    <main className="solution__container">
      <div className="solution__container-grid">
        <div className="solution__container-grid-item solution__container-grid-item--1">

          <Text as='h2' className="solution__container-grid-item-title">
            Você <strong> sofre </strong> com isso
          </Text>
        </div>
        
        <div className="solution__container-grid-item solution__container-grid-item--2" />

        <div className="solution__container-grid-item solution__container-grid-item--3">
          <Text as='h2' className="solution__container-grid-item-title">
            A <strong> solução </strong> está aqui
          </Text>
        </div>

        <div className="solution__container-grid-item solution__container-grid-item--4">
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <XIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Desorganização
            </Text>
            <Text as='p' className="problem__card-description">
              Retrabalho e caos por falta de plano
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <XIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Desperdício
            </Text>
            <Text as='p' className="problem__card-description">
              Material e recursos jogados sem rumo
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <XIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Imprevistos
            </Text>
            <Text as='p' className="problem__card-description">
              Gastos que fogem do controle da obra
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <XIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Atrasos
            </Text>
            <Text as='p' className="problem__card-description">
              Prazo que nunca é cumprido como deve
            </Text>
          </div>
        </div>

        <div className="solution__container-grid-item solution__container-grid-item--5">
          <OptimizedImage 
            src="/assets/images/logos/icon-fast-obras-black.svg" 
            alt="Imagem ilustrativa da solução" 
            width={120} 
            height={120} 
          />
        </div>

        <div className="solution__container-grid-item solution__container-grid-item--6">
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <CheckIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Organização
            </Text>
            <Text as='p' className="problem__card-description">
              Etapas planejadas com total precisão
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <CheckIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Economia
            </Text>
            <Text as='p' className="problem__card-description">
              Menos tempo e custo, mais rendimento
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <CheckIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Precisão
            </Text>
            <Text as='p' className="problem__card-description">
              Cálculos exatos, sem margem de erros
            </Text>
          </div>
          <div className="problem__card">
            <div className="problem__card-icon-float">
              <CheckIcon weight="light" />
            </div>
            <Text as='h2' className="problem__card-title">
              Pontualidade
            </Text>
            <Text as='p' className="problem__card-description">
              Sua obra entregue no prazo combinado
            </Text>
          </div>
        </div>

        <div className="solution__container-grid-item solution__container-grid-item--7">
          <ArrowRightIcon weight="light" />
        </div>

        <div className="solution__container-grid-item solution__container-grid-item--8" />

        <div className="solution__container-grid-item solution__container-grid-item--9 text-reveal-trigger" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
          <TextReveal>Solucionar meu problema</TextReveal>
          <ArrowRightIcon weight="light" />
        </div>

      </div>
    </main>
    <RangeQualitys />
  </SolutionContainer>;
}
