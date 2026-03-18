"use client";

import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Text } from "@/components/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const qualitys = [
  { value: "31%", description: "A cada 3 pessoas que compram, 1 vira cliente recorrente pela qualidade" },
  { value: "+ 25", description: "Mais de 25 anos de experiência entregando todo tipo de produto" },
  { value: "+ 1M", description: "Mais de 1 milhão de clientes atendidos em todo Brasil" },
  { value: "96%", description: "Uma taxa de satisfação acima da média em todos os setores" },
];

const QualitysRangeContainer = styled.section`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .qualitys__content {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    padding: 0 48px;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .qualitys__content-item {
    padding: 48px 48px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: none;
    border-bottom: none;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    flex-direction: column;
    will-change: clip-path;

    &:nth-child(1) {
        border-right: none;
    }

    &:nth-child(2) {
        border-right: none;
    }

    &:nth-child(3) {
        border-right: none;
    }
  }

  .qualitys__content-item-value {
    font-size: 48px;
    font-weight: 500;
    color: ${theme.colors.secondary.dark};
    letter-spacing: ${theme.letterSpacing.secondary};
    font-family: ${theme.fonts.primary};
    line-height: 1;
  }

  .qualitys__content-item-description {
    font-size: 16px;
    color: ${theme.colors.gray[400]};
    line-height: 120%;
    font-family: ${theme.fonts.primary};
  }

  .qualitys__mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }

    .swiper-slide {
      width: auto;
    }
  }

  .qualitys__mobile-item {
    padding: 24px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .qualitys__mobile-item-value {
    font-size: 32px;
    font-weight: 500;
    color: ${theme.colors.secondary.dark};
    letter-spacing: ${theme.letterSpacing.default};
    font-family: ${theme.fonts.primary};
    line-height: 1;
    margin-bottom: 8px;
  }

  .qualitys__mobile-item-description {
    font-size: 13px;
    color: ${theme.colors.gray[400]};
    line-height: 120%;
    font-family: ${theme.fonts.primary};
  }
`;

export const RangeQualitys = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.qualitys__content-item');
      gsap.set(items, { clipPath: 'inset(0 100% 0 0)' });
      gsap.set('.qualitys__content-item-value', { opacity: 0, y: 12 });
      gsap.set('.qualitys__content-item-description', { opacity: 0 });
      gsap.set('.qualitys__mobile', { opacity: 0, y: 20 });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.qualitys__content',
            start: 'top 95%',
            end: 'bottom 70%',
            scrub: 1,
          },
        });

        tl.to(items, {
          clipPath: 'inset(0 0% 0 0)', duration: 1, stagger: 0.15, ease: 'none',
        })
        .to('.qualitys__content-item-value', {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'none',
        }, '-=0.6')
        .to('.qualitys__content-item-description', {
          opacity: 1, duration: 0.8, stagger: 0.1, ease: 'none',
        }, '-=0.6');
      });

      mm.add('(max-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.qualitys__mobile',
            start: 'top 98%',
            end: 'bottom 85%',
            scrub: 1,
          },
        });

        tl.to('.qualitys__mobile', {
          opacity: 1, y: 0, duration: 1, ease: 'none',
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <QualitysRangeContainer ref={ref}>
      <div className="qualitys__content">
        {qualitys.map((item, index) => (
          <div className="qualitys__content-item" key={index}>
            <Text as="h3" className="qualitys__content-item-value">
              {item.value}
            </Text>
            <Text as="p" className="qualitys__content-item-description">
              {item.description}
            </Text>
          </div>
        ))}
      </div>

      <div className="qualitys__mobile">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
        >
          {qualitys.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="qualitys__mobile-item">
                <Text as="h3" className="qualitys__mobile-item-value">
                  {item.value}
                </Text>
                <Text as="p" className="qualitys__mobile-item-description">
                  {item.description}
                </Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </QualitysRangeContainer>
  );
};