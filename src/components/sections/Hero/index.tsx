"use client";

import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Badge, Button, Text, TextReveal } from "@/components/ui";
import { TimerIcon, TrophyIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroContainer = styled.section`
  width: 100%;
  position: relative;
  height: 200vh;

  .hero__pinned {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    will-change: transform;
  }

  .hero__video-wrapper {
    position: absolute;
    inset: 0;
    will-change: transform;
  }

  .hero__container {
    width: 100%;
    position: relative;
    display: flex;
    min-height: 100vh;
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
      will-change: transform, opacity;

      @media (max-width: 768px) {
        width: 100%;
        gap: 32px;
        align-items: flex-start;
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
`;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // Video zooms in slowly
      tl.to('.hero__video-wrapper', {
        scale: 1.2,
        ease: 'none',
        duration: 1,
      }, 0);

      // Text floats up and fades out
      tl.to('.hero__container-texts', {
        y: -150,
        opacity: 0,
        ease: 'none',
        duration: 1,
      }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return <HeroContainer ref={sectionRef} theme={theme} id="inicio">
    <div className="hero__pinned">
    <div className="hero__container">
        <div className="hero__video-wrapper">
          <VideoBackground 
            src="/assets/videos/footer-video.mp4"
            style={{ position: 'absolute', inset: 0 }}
          />
        </div>
        <article className="hero__container-texts">
          <Badge 
            icon={<TrophyIcon weight="bold" />}
            label="Maior do Brasil"
          />
          <Text as='h1' className="hero__container-texts-title">
            Somos a <strong>maior</strong> construtora com aço do <strong>Brasil</strong>
          </Text>
          <div className="hero__container-texts-actions">
            <Button variant="light" className="hero__container-texts-action-button-contact">
              <TextReveal>Orçamento</TextReveal>
            </Button>
            <Button variant="ghostLight" className="hero__container-texts-action-button-contact">
              <TextReveal>Saber mais</TextReveal>
            </Button>
          </div>
        </article>
      </div>
    </div>
  </HeroContainer>;
}