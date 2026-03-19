"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Badge } from "@/components/ui/Badge";
import { Button, Text, TextReveal } from "@/components/ui";
import { SquaresFourIcon, X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { projects, Project } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const INITIAL_VISIBLE = 4;

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
      padding: 96px 48px 0 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
      gap: 96px;

      @media (max-width: 768px) {
        padding: 72px 24px 0 24px;
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
        width: 100vw;
        max-width: 100vw;
        position: relative;
        overflow: hidden;

        &-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        &-cursor {
          position: fixed;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transform: scale(0);
          box-shadow: 0 0px 40px rgba(0, 0, 0, 0.15);

          span {
            font-size: 16px;
            font-weight: 600;
            color: ${props => props.theme.colors.gray[700]};
            font-family: ${props => props.theme.fonts.primary};
            letter-spacing: -0.06em;
            text-transform: uppercase;
          }

          @media (max-width: 768px) {
            display: none;
          }
        }

        &-item {
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          will-change: transform, clip-path;
          cursor: none;

          @media (max-width: 768px) {
            cursor: pointer;
          }

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
            background: linear-gradient(to top, rgba(29, 29, 27, 0.85) 0%, rgba(29, 29, 27, 0.4) 50%, transparent 100%);
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

            &-mobile-btn {
              display: none;
              margin-top: 16px;

              @media (max-width: 768px) {
                display: flex;
              }
            }
          }

          &--last {
            .portfolio__container-grid-item-more {
              position: relative;
              z-index: 2;
              margin-top: 24px;
            }
          }
        }
      }
    }
`;

const GalleryOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

  &.active {
    pointer-events: all;
  }

  .gallery__close {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: border-color 0.3s ease;
    z-index: 2;

    &:hover {
      border-color: rgba(255, 255, 255, 0.6);
    }

    @media (max-width: 768px) {
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
    }
  }

  .gallery__header {
    position: absolute;
    top: 32px;
    left: 48px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 768px) {
      top: 16px;
      left: 24px;
    }

    &-name {
      font-size: 24px;
      font-weight: 600;
      color: white;
      font-family: ${props => props.theme.fonts.primary};
      letter-spacing: ${props => props.theme.letterSpacing.default};

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }

    &-location {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      font-family: ${props => props.theme.fonts.primary};
    }
  }

  .gallery__content {
    width: 100%;
    max-width: 1200px;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      max-width: 100%;
      height: 50vh;
      padding: 0 16px;
    }

    .swiper {
      width: 100%;
      height: 100%;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    &-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 8px;
      user-select: none;
      -webkit-user-drag: none;
    }
  }

  .gallery__counter {
    margin-top: 24px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    font-family: ${props => props.theme.fonts.primary};
    letter-spacing: 0.05em;
  }

  .gallery__nav {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 24px;

    &-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: white;
      transition: border-color 0.3s ease, background 0.3s ease;

      &:hover {
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.05);
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
`;

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) itemsRef.current[index] = el;
  }, []);

  // Cursor follower for desktop
  useEffect(() => {
    const cursor = cursorRef.current;
    const grid = gridRef.current;
    if (!cursor || !grid) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 48,
        y: e.clientY - 48,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
    };

    const onLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3, ease: "power2.in" });
    };

    // Hide cursor when hovering over buttons
    const buttons = grid.querySelectorAll("button");
    const onBtnEnter = () => {
      gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.25, ease: "power2.in" });
    };
    const onBtnLeave = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
    };
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", onBtnEnter);
      btn.addEventListener("mouseleave", onBtnLeave);
    });

    grid.addEventListener("mousemove", onMove);
    grid.addEventListener("mouseenter", onEnter);
    grid.addEventListener("mouseleave", onLeave);

    return () => {
      grid.removeEventListener("mousemove", onMove);
      grid.removeEventListener("mouseenter", onEnter);
      grid.removeEventListener("mouseleave", onLeave);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", onBtnEnter);
        btn.removeEventListener("mouseleave", onBtnLeave);
      });
    };
  }, []);

  // Open gallery
  const openGallery = useCallback((project: Project) => {
    const images = [project.mainImage, ...project.gallery];
    if (images.length === 0) return;
    setGalleryProject(project);
    setGalleryIndex(0);

    gsap.to(galleryRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  // Close gallery
  const closeGallery = useCallback(() => {
    gsap.to(galleryRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setGalleryProject(null);
        setGalleryIndex(0);
      },
    });
  }, []);

  // Scroll-triggered card animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!gridRef.current) return;

    const items = itemsRef.current.filter(Boolean);
    const count = items.length;
    if (count <= 1) return;

    const ctx = gsap.context(() => {
      // First item on top (highest z-index), last on bottom (z-index 1)
      items.forEach((item, i) => {
        const bg = item.querySelector<HTMLElement>(".portfolio__container-grid-item-bg");
        const info = item.querySelector<HTMLElement>(".portfolio__container-grid-item-info");

        gsap.set(item, {
          zIndex: count - i,
          clipPath: "inset(0% 0% 0% 0%)",
        });

        // Cards underneath start zoomed in and with hidden info
        if (i > 0) {
          if (bg) gsap.set(bg, { scale: 1.15 });
          if (info) gsap.set(info, { opacity: 0, y: 30 });
        }
      });

      // Single timeline pinned to the grid, scrubbed by scroll
      const isMobile = window.innerWidth <= 768;
      const perCard = isMobile ? 400 : 600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top top",
          end: () => `+=${count * perCard}vh`,
          pin: true,
          pinSpacing: true,
          scrub: isMobile ? 1.5 : 4,
        },
      });

      // Each card (except last): elaborate multi-layer transition
      items.forEach((item, i) => {
        if (i === count - 1) return;

        const currentBg = item.querySelector<HTMLElement>(".portfolio__container-grid-item-bg");
        const currentInfo = item.querySelector<HTMLElement>(".portfolio__container-grid-item-info");
        const nextItem = items[i + 1];
        const nextBg = nextItem?.querySelector<HTMLElement>(".portfolio__container-grid-item-bg");
        const nextInfo = nextItem?.querySelector<HTMLElement>(".portfolio__container-grid-item-info");

        const step = gsap.timeline();

        // Current card: zoom in image + fade out info + clip away
        step.to(currentInfo!, { opacity: 0, y: -40, duration: 0.3, ease: "power2.in" }, 0);
        step.to(currentBg!, { scale: 1.08, duration: 1, ease: "sine.in" }, 0);
        step.to(item, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1,
          ease: "sine.inOut",
        }, 0.15);

        // Next card: zoom out image to normal + fade in info
        if (nextBg) {
          step.to(nextBg, { scale: 1, duration: 1, ease: "sine.out" }, 0.2);
        }
        if (nextInfo) {
          step.to(nextInfo, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.6);
        }

        tl.add(step);
      });

      // Hold the last card on screen longer before unpinning
      tl.to({}, { duration: 1 });
    }, gridRef);

    return () => {
      ctx.revert();
    };
  }, [visibleProjects]);

  const galleryImages = galleryProject ? [galleryProject.mainImage, ...galleryProject.gallery] : [];

  return <>
    <PortfolioContainer theme={theme} id="portfolio">
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
          <div ref={cursorRef} className="portfolio__container-grid-cursor">
            <span>Ver mais</span>
          </div>
          <div className="portfolio__container-grid-wrapper">
            {visibleProjects.map((project, index) => {
              const isLast = index === visibleProjects.length - 1;
              const isLastBeforeMore = isLast && hasMore && !showAll;
              return (
                <div
                  key={project.id}
                  ref={(el) => setItemRef(el, index)}
                  className={`portfolio__container-grid-item${isLastBeforeMore ? " portfolio__container-grid-item--last" : ""}`}
                  onClick={() => openGallery(project)}
                >
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
                    {isLastBeforeMore && (
                      <div className="portfolio__container-grid-item-more">
                        <Button variant="light" onClick={(e) => { e.stopPropagation(); setShowAll(true); }}>
                          <TextReveal>Ver mais projetos</TextReveal>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </PortfolioContainer>

    <GalleryOverlay
      ref={galleryRef}
      theme={theme}
      className={galleryProject ? "active" : ""}
    >
      {galleryProject && (
        <>
          <button className="gallery__close" onClick={closeGallery}>
            <X size={20} weight="bold" />
          </button>
          <div className="gallery__header">
            <span className="gallery__header-name">{galleryProject.name}</span>
            <span className="gallery__header-location">{galleryProject.location}</span>
          </div>
          <div className="gallery__content">
            <Swiper
              modules={[Navigation]}
              grabCursor
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={galleryIndex}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setGalleryIndex(swiper.activeIndex)}
            >
              {galleryImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${galleryProject.name} - ${i + 1}`}
                    className="gallery__content-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {galleryImages.length > 1 && (
            <div className="gallery__nav">
              <button
                className="gallery__nav-btn"
                disabled={galleryIndex === 0}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeft size={20} weight="bold" />
              </button>
              <span className="gallery__counter">
                {galleryIndex + 1} / {galleryImages.length}
              </span>
              <button
                className="gallery__nav-btn"
                disabled={galleryIndex === galleryImages.length - 1}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRight size={20} weight="bold" />
              </button>
            </div>
          )}
        </>
      )}
    </GalleryOverlay>
  </>;
}
