"use client";

import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const logos = [
  { src: "/assets/images/logos/maplebear.svg", alt: "Maplebear" },
  { src: "/assets/images/logos/localiza.svg", alt: "Localiza" },
  { src: "/assets/images/logos/sesc.svg", alt: "Sesc" },
  { src: "/assets/images/logos/smartfit.svg", alt: "Smart Fit" },
];

const ClientsRangeContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & .clients__content {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 24px 48px;
    position: relative;
  
    @media (max-width: 768px) {
      padding: 24px;
    }

    &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 48px;
      width: 200px;
      height: 100%;
      z-index: 1;
      background: linear-gradient(to right, rgba(238, 237, 234, 1), rgba(238, 237, 234, 0));

      @media (max-width: 768px) {
        width: 80px;
        left: 24px;
      }
    }

    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      z-index: 1;
      background: linear-gradient(to left, rgba(238, 237, 234, 1), rgba(238, 237, 234, 0));
      right: 48px;
      left: auto;

      @media (max-width: 768px) {
        width: 80px;
        right: 24px;
      }
    }
  }

  .swiper {
    width: 100%;
    position: relative;
    z-index: -1;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .slide-inner {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .slide-logo {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 248px;
      object-fit: contain;
      height: 124px;

      @media (max-width: 768px) {
        width: 200px;
        height: auto;
      }
    }
  }

  .slide-divider {
    width: 1px;
    height: 0;
    background: rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
`;

export function ClientsRange() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set('.clients__content', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 95%',
          end: 'bottom 70%',
          scrub: 1,
        },
      });

      tl.to('.clients__content', {
        opacity: 1, duration: 1, ease: 'none',
      })
      .to('.slide-divider', {
        height: 32, duration: 0.8, stagger: 0.08, ease: 'none',
      }, '-=0.5')
      .to('.slide-logo img', {
        opacity: 1, duration: 0.8, stagger: 0.08, ease: 'none',
      }, '-=0.6');
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <ClientsRangeContainer ref={ref}>
      <div className="clients__content">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={0}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="slide-inner">
                <div className="slide-logo">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="slide-divider" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ClientsRangeContainer>
  );
}
