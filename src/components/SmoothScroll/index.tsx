"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Override native scrollIntoView so CTA buttons work with Lenis
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (arg?: boolean | ScrollIntoViewOptions) {
      if (typeof arg === "object" && arg?.behavior === "smooth") {
        lenis.scrollTo(this as HTMLElement, { offset: 0, duration: 2.5, easing: (t) => 1 - Math.pow(1 - t, 3) });
        return;
      }
      originalScrollIntoView.call(this, arg);
    };

    // Also handle window.scrollTo for smooth calls (used by Header)
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function (...args: any[]) {
      if (args.length === 1 && typeof args[0] === "object" && args[0]?.behavior === "smooth") {
        lenis.scrollTo(args[0].top ?? 0, { offset: 0, duration: 2.5, easing: (t) => 1 - Math.pow(1 - t, 3) });
        return;
      }
      originalScrollTo.apply(window, args as any);
    };

    return () => {
      Element.prototype.scrollIntoView = originalScrollIntoView;
      window.scrollTo = originalScrollTo;
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
