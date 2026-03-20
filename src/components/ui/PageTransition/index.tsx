'use client';

import styled from '@emotion/styled';
import gsap from 'gsap';
import { useRef, useCallback, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { theme } from '@/styles/theme';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;

  .pt-back {
    position: absolute;
    inset: 0;
    background: ${theme.colors.gray[700]};
    transform: translateX(-101%);
    will-change: transform;
  }

  .pt-front {
    position: absolute;
    inset: 0;
    background: ${theme.colors.black};
    transform: translateX(-101%);
    will-change: transform;
  }

  .pt-line {
    position: absolute;
    top: 0;
    right: -1px;
    width: 3px;
    height: 100%;
    background: ${theme.gradients.primary};
    border-radius: 2px;
    box-shadow: 0 0 20px ${theme.colors.primary.main}88,
                0 0 40px ${theme.colors.primary.main}44;
  }
`;

type TransitionContextType = {
  navigateWithTransition: (href: string, delay?: number) => void;
  overlayRef: React.RefObject<HTMLDivElement | null>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const navigateWithTransition = useCallback((href: string) => {
      window.location.href = href;
    }, []);
    return { overlayRef, navigateWithTransition };
  }
  return ctx;
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const router = useRouter();

  const navigateWithTransition = useCallback((href: string, delay = 0) => {
    if (!overlayRef.current || isAnimating.current) {
      router.push(href);
      return;
    }

    isAnimating.current = true;

    const back = overlayRef.current.querySelector('.pt-back') as HTMLElement;
    const front = overlayRef.current.querySelector('.pt-front') as HTMLElement;

    // Reset panels off-screen left
    gsap.set([back, front], { x: '-101%' });

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        // Navigate while screen is covered
        router.push(href);

        // Wait a frame for route change, then reveal
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo(0, 0);
            const exitTl = gsap.timeline({
              onComplete: () => {
                isAnimating.current = false;
              },
            });

            // Exit: panels slide out to the right
            exitTl
              .to(front, {
                x: '101%',
                duration: 0.65,
                ease: 'power4.inOut',
              })
              .to(back, {
                x: '101%',
                duration: 0.65,
                ease: 'power4.inOut',
              }, '<0.06');
          }, 150);
        });
      },
    });

    // Enter: back panel slides in, front follows with slight delay
    tl.to(back, {
      x: '0%',
      duration: 0.65,
      ease: 'power4.inOut',
    })
    .to(front, {
      x: '0%',
      duration: 0.65,
      ease: 'power4.inOut',
    }, '<0.06');
  }, [router]);

  // Ensure panels start off-screen
  useEffect(() => {
    if (!overlayRef.current) return;
    const back = overlayRef.current.querySelector('.pt-back');
    const front = overlayRef.current.querySelector('.pt-front');
    gsap.set([back, front], { x: '-101%' });
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, overlayRef }}>
      {children}
      <Overlay ref={overlayRef}>
        <div className="pt-back" />
        <div className="pt-front">
          <div className="pt-line" />
        </div>
      </Overlay>
    </TransitionContext.Provider>
  );
}

// Keep for backwards compat — Header renders this but it's now a no-op
export function PageTransition({ overlayRef: _ }: { overlayRef: React.RefObject<HTMLDivElement | null> }) {
  return null;
}
