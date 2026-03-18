'use client';

import { ReactNode, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { OptimizedImage } from "../OptimizedImage";
import { Text } from "../Text";
import { Button } from "../Button";
import { TextReveal } from "../TextReveal";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CardVariant = "default" | "featured";

const CardContainer = styled.div<{ variant: CardVariant, theme: any }>`
    width: 100%;
    height: 420px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: ${({ variant }) => variant === "featured" ? "row-reverse" : "column"};
    grid-column: ${({ variant }) => variant === "featured" ? "span 2" : "span 1"};
    border: 6px solid ${({ theme }) => theme.colors.whitePure};
    background: ${({ variant }) => variant === "featured" ? 
    "linear-gradient(270deg, #FFFFFF 0%, #EEEDEA 100%)" : "linear-gradient(0deg, #ffffff 0%, #eeedea 100%)" };

    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        grid-column: span 1;
    }

    .card__image-wrapper {
        position: relative;
        width: ${({ variant }) => variant === "featured" ? "400px" : "100%"};
        height: ${({ variant }) => variant === "featured" ? "100%" : "100%"};
        scale: ${({ variant }) => variant === "featured" ? "1.4" : "1"};
        right: ${({ variant }) => variant === "featured" ? "0%" : "50%"};
        top: ${({ variant }) => variant === "featured" ? "0%" : "-15%"};
        transform: ${({ variant }) => variant === "featured" ? "translate(0, 0)" : "translateX(50%)"};
        flex-shrink: 0;
        position: absolute;

        @media (max-width: 768px) {
            position: relative;
            width: 100%;
            height: 220px;
            scale: 1;
            right: 0;
            top: 0;
            transform: translate(0, 0);
        }

        img {
            object-fit: contain;

            @media (max-width: 768px) {
                object-fit: ${({ variant }) => variant === "featured" ? "cover" : "contain"};
            }
        }
    }

    .card__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 12px;
        padding: ${({ variant }) => variant === "featured" ? "32px" : "24px"};
        flex: 1;

        @media (max-width: 768px) {
            padding: 22px;
        }

        &-normas {
            font-size: 16px;
            font-family: ${({ theme }) => theme.fonts.accent};
            letter-spacing: ${({ theme }) => theme.letterSpacing.min};
            color: ${({ theme }) => theme.colors.gray[400]};
            line-height: 100%;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        &-title {
            font-size: 28px;
            font-family: ${({ theme }) => theme.fonts.primary};
            font-weight: 500;
            letter-spacing: ${({ theme }) => theme.letterSpacing.default};
            color: ${({ theme }) => theme.colors.black};
            line-height: 110%;
            max-width: 400px;

            @media (max-width: 768px) {
                font-size: 22px;
            }

            & strong {
              font-weight: 500;
              font-family: ${props => props.theme.fonts.secondary};
              letter-spacing: ${props => props.theme.letterSpacing.default};
              font-style: italic;
            }
        }

        &-description {
            font-size: 16px;
            font-family: ${({ theme }) => theme.fonts.primary};
            letter-spacing: ${({ theme }) => theme.letterSpacing.default};
            color: ${({ theme }) => theme.colors.gray[400]};
            line-height: 120%;
            max-width: 400px;
        }
    }
`;

interface CardProps {
    image: string;
    alt?: string;
    normas?: string;
    title: ReactNode;
    description: ReactNode;
    textButton?: string;
    variant?: CardVariant;
}

export default function Card({
    image,
    alt = "Card Image",
    normas,
    title,
    description,
    textButton,
    variant = "default"
}: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const card = cardRef.current;
        if (!card) return;

        const imageWrapper = card.querySelector('.card__image-wrapper');
        const normasEl = card.querySelector('.card__content-normas');
        const titleEl = card.querySelector('.card__content-title') as HTMLElement;
        const descEl = card.querySelector('.card__content-description');
        const btnEl = card.querySelector('.card__content-button');

        // Split title text into individual characters wrapped in spans
        let chars: HTMLElement[] = [];
        if (titleEl) {
            const splitNode = (node: ChildNode): DocumentFragment => {
                const frag = document.createDocumentFragment();
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent || '';
                    for (const char of text) {
                        const span = document.createElement('span');
                        span.style.display = 'inline-block';
                        span.textContent = char === ' ' ? '\u00A0' : char;
                        frag.appendChild(span);
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const el = node as HTMLElement;
                    const wrapper = document.createElement(el.tagName.toLowerCase());
                    // Copy attributes
                    for (const attr of Array.from(el.attributes)) {
                        wrapper.setAttribute(attr.name, attr.value);
                    }
                    // Copy computed styles for inline-styled elements
                    wrapper.style.cssText = el.style.cssText;
                    for (const child of Array.from(el.childNodes)) {
                        wrapper.appendChild(splitNode(child));
                    }
                    frag.appendChild(wrapper);
                }
                return frag;
            };

            const originalHTML = titleEl.innerHTML;
            const frag = document.createDocumentFragment();
            for (const child of Array.from(titleEl.childNodes)) {
                frag.appendChild(splitNode(child));
            }
            titleEl.innerHTML = '';
            titleEl.appendChild(frag);

            // Collect all leaf spans (the actual character spans)
            chars = Array.from(titleEl.querySelectorAll('span')).filter(
                s => s.children.length === 0
            );

            gsap.set(chars, { opacity: 0, filter: 'blur(8px)' });

            // Store original HTML for cleanup
            (titleEl as any).__originalHTML = originalHTML;
        }

        // Initial states — only opacity, clipPath, filter
        gsap.set(imageWrapper, { opacity: 0 });

        if (normasEl) {
            gsap.set(normasEl, { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
        }

        if (descEl) {
            gsap.set(descEl, { opacity: 0, clipPath: 'inset(100% 0 0 0)' });
        }

        if (btnEl) {
            gsap.set(btnEl, { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Image fade in
            tl.to(imageWrapper, {
                opacity: 1,
                duration: 1.4,
                ease: 'power2.out',
            });

            // Normas: wipe left to right
            if (normasEl) {
                tl.to(normasEl, {
                    opacity: 1,
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 0.8,
                    ease: 'power3.inOut',
                }, '-=1');
            }

            // Title: per-character blur + fade reveal
            if (chars.length > 0) {
                tl.to(chars, {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 0.6,
                    stagger: 0.02,
                    ease: 'power2.out',
                }, '-=0.6');
            }

            // Description: reveal top down
            if (descEl) {
                tl.to(descEl, {
                    opacity: 1,
                    clipPath: 'inset(0% 0 0 0)',
                    duration: 0.9,
                    ease: 'power3.out',
                }, '-=0.4');
            }

            // Button: smooth wipe from left + fade
            if (btnEl) {
                tl.to(btnEl, {
                    opacity: 1,
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 0.5,
                    ease: 'power4.out',
                }, '-=0.5');
            }
        }, card);

        return () => {
            ctx.revert();
            // Restore original title HTML
            if (titleEl && (titleEl as any).__originalHTML) {
                titleEl.innerHTML = (titleEl as any).__originalHTML;
            }
        };
    }, []);

    return (
        <CardContainer ref={cardRef} variant={variant} theme={theme}>
            <div className="card__image-wrapper">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes={variant === "featured" ? "50vw" : "33vw"}
                />
            </div>
            <div className="card__content">
                {normas && (
                    <Text as="span" className="card__content-normas">
                        {normas}
                    </Text>
                )}
                <Text as="h2" className="card__content-title">
                    {title}
                </Text>
                <Text as="p" className="card__content-description">
                    {description}
                </Text>
                {textButton && (
                    <Button variant="dark" className="card__content-button">
                        <TextReveal>{textButton}</TextReveal>
                    </Button>
                )}
            </div>
        </CardContainer>
    );
}