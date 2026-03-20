'use client';

import { useEffect, useRef, CSSProperties } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
  overlay?: boolean;
  overlayColor?: string;
}

export function VideoBackground({
  src,
  poster,
  className,
  style,
  overlay = false,
  overlayColor = 'rgba(29, 29, 27, 0.5)',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: overlayColor,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
