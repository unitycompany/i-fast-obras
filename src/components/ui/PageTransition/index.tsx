'use client';

import styled from '@emotion/styled';
import gsap from 'gsap';
import { useRef, useCallback, useEffect } from 'react';
import { theme } from '@/styles/theme';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;

  .page-transition__slice {
    flex: 1;
    width: 100%;
    background: ${theme.colors.black};
    transform: scaleY(0);
    transform-origin: bottom;
  }
`;

export function usePageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const navigateWithTransition = useCallback((href: string, delay = 0) => {
    if (!overlayRef.current) {
      window.location.href = href;
      return;
    }

    const slices = overlayRef.current.querySelectorAll('.page-transition__slice');

    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = href;
      },
    });

    tl.to(slices, {
      scaleY: 1,
      duration: 0.5,
      ease: 'power3.inOut',
      stagger: 0.05,
    }, delay);
  }, []);

  return { overlayRef, navigateWithTransition };
}

export function PageTransition({ overlayRef }: { overlayRef: React.RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    // On page load, if slices are visible (coming from transition), animate them out
    if (!overlayRef.current) return;
    const slices = overlayRef.current.querySelectorAll('.page-transition__slice');

    gsap.set(slices, { scaleY: 0, transformOrigin: 'top' });
  }, [overlayRef]);

  return (
    <Overlay ref={overlayRef}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="page-transition__slice" />
      ))}
    </Overlay>
  );
}
