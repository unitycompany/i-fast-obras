"use client";

import { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CrosshairIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    id: 1,
    label: "Etapa 01",
    title: "Briefing e Estudo de Viabilidade",
    description:
      "Realizamos uma reunião técnica para analisar as necessidades da sua operação comercial. Avaliamos o terreno, as exigências do plano diretor e definimos as metas de prazo e orçamento para garantir o melhor retorno sobre o investimento.",
    image: "/assets/images/sections/step-01.webp",
  },
  {
    id: 2,
    label: "Etapa 02",
    title: "Projeto Arquitetônico e Engenharia",
    description:
      "Elaboramos os projetos executivos e estruturais específicos para Steel Frame. Diferente da alvenaria, aqui cada perfil de aço é calculado para evitar desperdícios, garantindo uma estrutura leve, resistente e termicamente eficiente.",
    image: "/assets/images/sections/step-02.webp",
  },
  {
    id: 3,
    label: "Etapa 03",
    title: "Fabricação e Logística Inteligente",
    description:
      "Enquanto preparamos a fundação, a estrutura de aço galvanizado é fabricada com precisão industrial. Os kits chegam à obra prontos para a montagem, o que reduz drasticamente o entulho e o tempo de mobilização no local.",
    image: "/assets/images/sections/step-03.webp",
  },
  {
    id: 4,
    label: "Etapa 04",
    title: "Montagem e Fechamentos",
    description:
      "A estrutura é erguida rapidamente (em dias, não meses). Aplicamos os sistemas de fechamento, junto com o isolamento termoacústico, permitindo que as instalações elétricas e hidráulicas ocorram simultaneamente.",
    image: "/assets/images/sections/step-04.webp",
  },
  {
    id: 5,
    label: "Etapa 05",
    title: "Acabamento e Entrega das Chaves",
    description:
      "Finalizamos os revestimentos e detalhes estéticos conforme a identidade da sua marca. Entregamos uma obra limpa, sustentável e com alto padrão de acabamento, permitindo que sua empresa comece a operar em tempo recorde.",
    image: "/assets/images/sections/step-05.webp",
  },
];

const StepsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.black};

  .step__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 96px 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    gap: 96px;

    @media (max-width: 768px) {
      padding: 72px 24px 24px 24px;
      gap: 48px;
    }

    &-texts {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 32px;

      @media (max-width: 768px) {
        align-items: flex-start;
        gap: 24px;
        height: auto;
      }

      &-title {
        font-size: 54px;
        max-width: 720px;
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

      &-description {
        font-size: 20px;
        max-width: 540px;
        text-align: center;
        letter-spacing: ${props => props.theme.letterSpacing.default};
        line-height: 120%;
        color: ${props => props.theme.colors.gray[400]};
        font-family: ${props => props.theme.fonts.primary};

        @media (max-width: 768px) {
          text-align: left;
          font-size: 18px;
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

    &-timeline {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 96px;
      position: relative;

      @media (max-width: 768px) {
        display: block;
        position: relative;
      }
    }
  }
`;

const StickyImageWrapper = styled.div`
  width: 45%;
  position: relative;
  float: left;

  @media (max-width: 768px) {
    width: 100%;
    float: auto;
    position: sticky;
    top: 96px;
    z-index: 3;

    &::after {
      content: '';
      position: absolute;
      left: -24px;
      right: -24px;
      bottom: -48px;
      height: 48px;
      z-index: 1;
      background: linear-gradient(to bottom, ${props => props.theme.colors.black} 40%, transparent 100%);
      pointer-events: none;
    }

    &::before {
      content: '';
      position: absolute;
      left: -24px;
      right: -24px;
      top: -24px;
      bottom: 0;
      height: calc(100% + 24px);
      z-index: 0;
      background: ${props => props.theme.colors.black};
      pointer-events: none;
    }
  }

  .step__sticky-inner {
    position: sticky;
    top: 124px;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 16px;
    overflow: hidden;
    background: ${props => props.theme.colors.gray[700]};

    @media (max-width: 768px) {
      position: relative;
      top: auto;
      aspect-ratio: 16 / 9;
      border-radius: 12px;
      z-index: 2;
    }
  }

  .step__sticky-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease;

    &.active {
      opacity: 1;
    }
  }

  .step__sticky-note {
    margin-top: 16px;
    font-size: 14px;
    color: ${props => props.theme.colors.gray[400]};
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: ${props => props.theme.letterSpacing.default};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StepsList = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 32px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 28px;
    position: relative;
    z-index: 1;
  }

  .step__timeline-track {
    position: absolute;
    left: 0;
    width: 2px;
    background: ${props => props.theme.colors.gray[700]};
    top: 0;
    bottom: 0;
    pointer-events: none;
  }

  .step__timeline-fill {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 0;
    background: ${props => props.theme.colors.primary.main};
    will-change: height;
    pointer-events: none;
    z-index: 1;
  }
`;

const StepItem = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  @media (max-width: 768px) {
    padding: 32px 0;
    gap: 12px;
  }

  .step__item-dot {
    position: absolute;
    left: -32px;
    top: 48px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.colors.gray[600]};
    transform: translateX(-5px);
    transition: background 0.4s ease, box-shadow 0.4s ease;
    z-index: 2;
    flex-shrink: 0;

    &.active {
      background: ${props => props.theme.colors.primary.main};
      box-shadow: 0 0 0 4px ${props => props.theme.colors.primary.main}33;
    }

    @media (max-width: 768px) {
      left: -28px;
      top: 32px;
      width: 10px;
      height: 10px;
      transform: translateX(-4px);
    }
  }

  .step__item-label {
    display: flex;
    align-items: center;
    gap: 0;
    font-size: 14px;
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: ${props => props.theme.letterSpacing.default};
    color: ${props => props.theme.colors.primary.main};
    font-weight: 500;
    text-transform: uppercase;
  }

  .step__item-title {
    font-size: 32px;
    font-weight: 500;
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: ${props => props.theme.letterSpacing.default};
    line-height: 110%;
    color: ${props => props.theme.colors.white};

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .step__item-description {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: ${props => props.theme.letterSpacing.default};
    line-height: 140%;
    color: ${props => props.theme.colors.gray[400]};
    max-width: 540px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const StepCTA = styled.div`
  padding: 48px 0;
  padding-left: 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;

export function Steps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsListRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineFillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!stepsListRef.current || !timelineFillRef.current || !timelineTrackRef.current) return;

    const listEl = stepsListRef.current;
    const trackEl = timelineTrackRef.current;
    const fillEl = timelineFillRef.current;

    // Position the track line to span only from first dot to last dot
    const positionTrack = () => {
      const firstDot = stepRefs.current[0]?.querySelector('.step__item-dot');
      const lastDot = stepRefs.current[stepRefs.current.length - 1]?.querySelector('.step__item-dot');
      if (!firstDot || !lastDot) return;

      const listRect = listEl.getBoundingClientRect();
      const firstDotCenter = firstDot.getBoundingClientRect().top + firstDot.getBoundingClientRect().height / 2 - listRect.top;
      const lastDotCenter = lastDot.getBoundingClientRect().top + lastDot.getBoundingClientRect().height / 2 - listRect.top;

      trackEl.style.top = `${firstDotCenter}px`;
      trackEl.style.bottom = 'auto';
      trackEl.style.height = `${lastDotCenter - firstDotCenter}px`;
    };

    positionTrack();

    const ctx = gsap.context(() => {
      // Step active index detection
      stepRefs.current.forEach((stepEl, i) => {
        if (!stepEl) return;

        ScrollTrigger.create({
          trigger: stepEl,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });

      // Step reveal animations — scroll-driven
      stepRefs.current.forEach((stepEl) => {
        if (!stepEl) return;

        const dot = stepEl.querySelector('.step__item-dot');
        const label = stepEl.querySelector('.step__item-label');
        const title = stepEl.querySelector('.step__item-title');
        const desc = stepEl.querySelector('.step__item-description');

        gsap.set([dot, label, title, desc].filter(Boolean), {
          opacity: 0,
          y: 40,
          filter: 'blur(8px)',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stepEl,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.4,
          },
        });

        tl.to(dot, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.2,
          ease: 'none',
        }, 0);

        tl.to(label, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.25,
          ease: 'none',
        }, 0.05);

        tl.to(title, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.3,
          ease: 'none',
        }, 0.15);

        tl.to(desc, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.35,
          ease: 'none',
        }, 0.25);
      });

      // Timeline fill animation
      const lastStep = stepRefs.current[stepRefs.current.length - 1];
      if (lastStep) {
        ScrollTrigger.create({
          trigger: listEl,
          start: "top 50%",
          end: () => {
            const lastDot = lastStep.querySelector('.step__item-dot');
            if (!lastDot) return `bottom 50%`;
            const listRect = listEl.getBoundingClientRect();
            const dotCenter = lastDot.getBoundingClientRect().top + lastDot.getBoundingClientRect().height / 2 - listRect.top;
            return `top+=${dotCenter} 50%`;
          },
          scrub: 0.3,
          onUpdate: (self) => {
            if (!fillEl) return;
            const firstDot = stepRefs.current[0]?.querySelector('.step__item-dot');
            const lastDot = lastStep.querySelector('.step__item-dot');
            if (!firstDot || !lastDot) return;

            const listRect = listEl.getBoundingClientRect();
            const firstDotCenter = firstDot.getBoundingClientRect().top + firstDot.getBoundingClientRect().height / 2 - listRect.top;
            const lastDotCenter = lastDot.getBoundingClientRect().top + lastDot.getBoundingClientRect().height / 2 - listRect.top;
            const totalHeight = lastDotCenter - firstDotCenter;

            fillEl.style.top = `${firstDotCenter}px`;
            fillEl.style.height = `${totalHeight * self.progress}px`;
          },
        });
      }
    }, sectionRef);

    // Recalculate track on resize
    const onResize = () => {
      positionTrack();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <StepsContainer theme={theme} ref={sectionRef}>
      <main className="step__container">
        <article className="step__container-texts">
          <Badge
            variant="dark"
            icon={<CrosshairIcon weight="bold" />}
            label="Processo simples"
          />
          <Text as="h1" className="step__container-texts-title">
            Sua <strong>construção</strong> pronta em poucas etapas
          </Text>
          <Text as="p" className="step__container-texts-description">
            Com uma estratégia validada, e uma equipe super organizada,
            conseguimos garantir o melhor para a sua empresa
          </Text>
          <div className="step__container-texts-actions">
            <Button
              variant="light"
              className="step__container-texts-action-button-contact"
            >
              <TextReveal>Orçamento</TextReveal>
            </Button>
          </div>
        </article>

        <div className="step__container-timeline">
          <StickyImageWrapper theme={theme}>
            <div className="step__sticky-inner">
              {stepsData.map((step, i) => (
                <OptimizedImage
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  fill
                  className={`step__sticky-image${i === activeIndex ? " active" : ""}`}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              ))}
            </div>
            <p className="step__sticky-note">
              *O processo pode variar dependendo da sua necessidade
            </p>
          </StickyImageWrapper>

          <StepsList ref={stepsListRef} theme={theme}>
            <div className="step__timeline-track" ref={timelineTrackRef} />
            <div className="step__timeline-fill" ref={timelineFillRef} />
            {stepsData.map((step, i) => (
              <StepItem
                key={step.id}
                ref={(el) => { stepRefs.current[i] = el; }}
                theme={theme}
              >
                <span className={`step__item-dot${i <= activeIndex ? " active" : ""}`} />
                <span className="step__item-label">
                  {step.label}
                </span>
                <h3 className="step__item-title">{step.title}</h3>
                <p className="step__item-description">{step.description}</p>
              </StepItem>
            ))}
            <StepCTA>
              <Button variant="light">
                <TextReveal>Solicitar orçamento</TextReveal>
              </Button>
            </StepCTA>
          </StepsList>
        </div>
      </main>
    </StepsContainer>
  );
}
