"use client";

import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "@/styles/theme";
import { Badge, Text, TextReveal, OptimizedImage } from "@/components/ui";
import {
  UserIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  UsersThreeIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const checkIn = keyframes`
  0% { transform: scale(0) rotate(-45deg); opacity: 0; }
  50% { transform: scale(1.2) rotate(0deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const ContactContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};

  .contact__container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 48px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 48px 24px;
      gap: 48px;
    }

    &-form {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 36px;

      @media (max-width: 768px) {
        gap: 24px;
      }

      &-texts {
        display: flex;
        flex-direction: column;
        gap: 28px;
        position: relative;

        &-title {
          font-size: 54px;
          max-width: 640px;
          letter-spacing: ${({ theme }) => theme.letterSpacing.default};
          line-height: 100%;
          font-weight: 500;
          font-family: ${({ theme }) => theme.fonts.primary};
          color: ${({ theme }) => theme.colors.black};

          @media (max-width: 768px) {
            font-size: 42px;
            max-width: 320px;
          }

          & strong {
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.secondary};
            letter-spacing: ${({ theme }) => theme.letterSpacing.default};
            font-style: italic;
          }
        }
      }

      &-fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 480px;
      }

      &-input {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        background: transparent;
        transition: border-color 0.3s ease;

        &:focus-within {
          border-color: ${({ theme }) => theme.colors.black};
        }

        input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 600;
          font-size: 16px;
          letter-spacing: ${({ theme }) => theme.letterSpacing.min};
          color: ${({ theme }) => theme.colors.black};

          &::placeholder {
            color: ${({ theme }) => theme.colors.gray[300]};
            font-weight: 400;
          }
        }

        svg {
          width: 20px;
          height: 20px;
          color: ${({ theme }) => theme.colors.gray[400]};
          flex-shrink: 0;
        }
      }

      &-consent {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
        width: 100%;
        max-width: 480px;
        cursor: pointer;

        .contact__checkbox {
          width: 20px;
          height: 20px;
          min-width: 20px;
          margin-top: 1px;
          border-radius: 6px;
          border: 1.5px solid rgba(0, 0, 0, 0.15);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;

          &.checked {
            background: ${({ theme }) => theme.colors.black};
            border-color: ${({ theme }) => theme.colors.black};

            svg {
              animation: ${checkIn} 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
          }

          &:not(.checked) svg {
            opacity: 0;
            transform: scale(0);
          }

          svg {
            width: 12px;
            height: 12px;
            color: ${({ theme }) => theme.colors.white};
            stroke-width: 3px;
          }
        }

        label {
          font-family: ${({ theme }) => theme.fonts.primary};
          font-size: 14px;
          letter-spacing: ${({ theme }) => theme.letterSpacing.min};
          color: ${({ theme }) => theme.colors.gray[400]};
          line-height: 140%;
          cursor: pointer;

          a {
            color: ${({ theme }) => theme.colors.black};
            text-decoration: underline;
            font-weight: 500;
          }
        }
      }

      &-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        max-width: 380px;
        padding: 12px 14px;
        border: none;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 600;
        letter-spacing: ${({ theme }) => theme.letterSpacing.min};
        cursor: pointer;
        transition: all 0.3s ease;

        svg {
          width: 22px;
          height: 22px;
          transition: transform 0.3s ease;
        }

        &:hover {
          opacity: 0.85;

          svg {
            transform: translateX(4px);
          }
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;

          &:hover svg {
            transform: none;
          }
        }
      }
    }

    &-image {
      width: 100%;
      height: 800px;
      position: relative;
      overflow: hidden;
      border-radius: 48px;

      @media (max-width: 768px) {
        height: 360px;
        border-radius: 24px;
        display: none;
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function Contact() {
  const [consent, setConsent] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  function handleWhatsAppChange(e: ChangeEvent<HTMLInputElement>) {
    setWhatsapp(formatWhatsApp(e.target.value));
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".contact__container-form-texts", { opacity: 0, y: 40 });
      gsap.set(".contact__container-form-fields", { opacity: 0, y: 30 });
      gsap.set(".contact__container-form-consent", { opacity: 0, y: 20 });
      gsap.set(".contact__container-form-submit", { opacity: 0, y: 20 });
      gsap.set(".contact__container-image", { opacity: 0, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.to(".contact__container-form-texts", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "none",
      })
        .to(
          ".contact__container-form-fields",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "none",
          },
          "-=0.6"
        )
        .to(
          ".contact__container-form-consent",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "none",
          },
          "-=0.5"
        )
        .to(
          ".contact__container-form-submit",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "none",
          },
          "-=0.5"
        )
        .to(
          ".contact__container-image",
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "none",
          },
          "-=1.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const message = encodeURIComponent(
      `Olá! Meu nome é ${name}, meu e-mail é ${email}. Gostaria de saber mais sobre os serviços da Fast Obras.`
    );
    const phone = "5500000000000";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }

  return (
    <ContactContainer ref={sectionRef} theme={theme} id="contato">
      <div className="contact__container">
        <form className="contact__container-form" onSubmit={handleSubmit}>
          <div className="contact__container-form-texts">
            <Badge
              variant="dark"
              icon={<UsersThreeIcon weight="bold" />}
              label="Fale conosco"
            />
            <Text as="h2" className="contact__container-form-texts-title">
              Tire seu <strong>projeto</strong> do papel, entre em contato agora
            </Text>
          </div>

          <div className="contact__container-form-fields">
            <div className="contact__container-form-input">
              <input
                type="text"
                name="name"
                placeholder="Qual o seu nome?"
                required
              />
              <UserIcon weight="regular" />
            </div>
            <div className="contact__container-form-input">
              <input
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
              />
              <EnvelopeSimpleIcon weight="regular" />
            </div>
            <div className="contact__container-form-input">
              <input
                type="tel"
                name="whatsapp"
                placeholder="Por fim, seu WhatsApp"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                required
              />
              <PhoneIcon weight="regular" />
            </div>
          </div>

          <div
            className="contact__container-form-consent"
            onClick={() => setConsent((prev) => !prev)}
          >
            <div className={`contact__checkbox ${consent ? "checked" : ""}`}>
              <CheckIcon weight="bold" />
            </div>
            <label>
              Ao selecionar esse campo, você declara que concorda com a nossa{" "}
              <Link
                href="/privacy-policy"
                onClick={(e) => e.stopPropagation()}
              >
                política de privacidade
              </Link>
              , e{" "}
              <Link
                href="/terms-and-conditions"
                onClick={(e) => e.stopPropagation()}
              >
                termos de uso
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="contact__container-form-submit"
            disabled={!consent}
          >
            <TextReveal>Enviar formulário</TextReveal>
          </button>
        </form>

        <div className="contact__container-image">
          <OptimizedImage
            src="/assets/images/backgrounds/form.png"
            alt="Obra Fast Obras - Construção em Steel Frame"
            fill
          />
        </div>
      </div>
    </ContactContainer>
  );
}
