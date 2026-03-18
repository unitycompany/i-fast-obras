"use client";

import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Badge } from "@/components/ui/Badge";
import { Button, Text, TextReveal } from "@/components/ui";
import { SquaresFourIcon } from "@phosphor-icons/react";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const INITIAL_VISIBLE = 3;

const PortfolioContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .portfolio__container {
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
        padding: 72px 24px;
        gap: 48px;
      }

      &-texts {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          gap: 32px;

          @media (max-width: 768px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 24px;
          }

          &-header {
            flex: 2;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 24px;
            
            &-title {
              font-size: 54px;
              max-width: 720px;
              text-align: left;
              letter-spacing: ${props => props.theme.letterSpacing.default};
              line-height: 100%;
              font-weight: 500;
              font-family: ${props => props.theme.fonts.primary};
              color: ${props => props.theme.colors.black};
  
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
          }

          &-body {
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 24px;
         
            &-description {
              font-size: 20px;
              max-width: 540px;
              text-align: left;
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

      }

      &-grid {
        width: 100%;
        max-width: 1600px;
        display: flex;
        flex-direction: column;
        gap: 0;
        transition: none;

        &-item {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;

          &-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

          &-gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
            z-index: 1;
            pointer-events: none;
          }

          &-info {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding-bottom: 64px;

            @media (max-width: 768px) {
              padding-bottom: 48px;
            }

            &-name {
              font-size: 32px;
              font-weight: 600;
              color: ${props => props.theme.colors.whitePure};
              font-family: ${props => props.theme.fonts.primary};
              letter-spacing: ${props => props.theme.letterSpacing.default};
              text-align: center;

              @media (max-width: 768px) {
                font-size: 24px;
              }
            }

            &-year {
              font-size: 16px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.6);
              font-family: ${props => props.theme.fonts.primary};
              letter-spacing: ${props => props.theme.letterSpacing.default};

              @media (max-width: 768px) {
                font-size: 14px;
              }
            }
          }
        }
      }

      &-more {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 16px;
      }
    }
`;

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!gridRef.current) return;

    gsap.to(gridRef.current, {
      width: "100vw",
      maxWidth: "100vw",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <PortfolioContainer theme={theme}>
    <main className="portfolio__container">
      <article className="portfolio__container-texts">
        <div className="portfolio__container-texts-header">
          <Badge 
            variant="dark"
            icon={<SquaresFourIcon weight="bold" />}
            label="Projetos feitos"
          />
          <Text as='h1' className="portfolio__container-texts-header-title">
            Conheça todos os nossos <strong>projetos</strong> espalhados pelo Brasil
          </Text>
        </div>
        <div className="portfolio__container-texts-body">
          <Text as='p' className="portfolio__container-texts-body-description">
            Com uma estratégia validada, e uma equipe super organizada, conseguimos garantir o melhor para a sua empresa
          </Text>
          <div className="portfolio__container-texts-body-actions">
            <Button variant="dark" className="portfolio__container-texts-body-action-button-contact">
              <TextReveal>Orçamento</TextReveal>
            </Button>
          </div>
        </div>
      </article>
      <div ref={gridRef} className="portfolio__container-grid">
        {visibleProjects.map((project) => (
          <div key={project.id} className="portfolio__container-grid-item">
            <img
              src={project.mainImage}
              alt={project.name}
              className="portfolio__container-grid-item-bg"
            />
            <div className="portfolio__container-grid-item-gradient" />
            <div className="portfolio__container-grid-item-info">
              <Text as="h2" className="portfolio__container-grid-item-info-name">
                {project.name}
              </Text>
              <Text as="span" className="portfolio__container-grid-item-info-year">
                At. {project.year}
              </Text>
            </div>
          </div>
        ))}
      </div>
      {hasMore && !showAll && (
        <div className="portfolio__container-more">
          <Button variant="dark" onClick={() => setShowAll(true)}>
            <TextReveal>Ver mais projetos</TextReveal>
          </Button>
        </div>
      )}
    </main>
  </PortfolioContainer>;
}
