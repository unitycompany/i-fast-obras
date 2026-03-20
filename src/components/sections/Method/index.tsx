"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheckIcon } from "@phosphor-icons/react";
import { Text } from "@/components/ui";
import Card from "@/components/ui/Card";

const MethodContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .method__container {
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
        padding: 72px 24px 24px 24px;
        gap: 48px;
      }

      &-texts {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 32px;

          @media (max-width: 768px) {
            align-items: flex-start;
            gap: 24px;
          }

          &-title {
            font-size: 54px;
            max-width: 720px;
            text-align: center;
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

          &-description {
            font-size: 20px;
            max-width: 540px;
            text-align: center;
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

      &-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 12px;
        }

      }
  }
`;

export function Method() {

  const items = [
    {
      id: 1,
      normas: "ABNT NBR 15253 | ABNT NBR 7008-1",
      title: <><strong>Estrutura</strong> completa em Steel Frame Normatizado</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/estrutura-de-steel-frame.png",
      textButton: "Solicitar orçamento",
      variant: "featured" as const,
    },
    {
      id: 2,
      title: <>Equipe super <strong>qualificada</strong> e bem estruturada</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/equipe-super-qualificada.png",
      variant: "default" as const,
    },
    {
      id: 3,
      title: <>Projeto todo <strong>calculado</strong>, sem custo extra</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/projeto-calculado.png",
      variant: "default" as const,
    },
    {
      id: 4,
      title: <><strong>Obra grande</strong>, feita em tempo recorde, graças ao Steel Frame</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/obra-grande.png",
      textButton: "Solicitar orçamento",
      variant: "featured" as const,
    },
    {
      id: 5,
      title: <><strong>Ecossistema</strong> integrado e interligado na sua obra</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/ecossistema.png",
      textButton: "Solicitar orçamento",
      variant: "featured" as const,
    },
    {
      id: 6,
      title: <><strong>Consultoria</strong> de projeto estrutural em Steel Frame</>,
      description: "Conheça alguns dos projetos feitos pela Fast Obras em todo o Brasil, construções comerciais e residenciais",
      image: "/assets/images/method/consultoria-projeto.png",
      variant: "default" as const,
    },
  ]

  return <MethodContainer theme={theme} id="metodo">
    <div className="method__container">
      <article className="method__container-texts">
        <Badge 
          variant="dark"
          icon={<ShieldCheckIcon weight="bold" />}
          label="Metodo que funciona"
        />
        <Text as='h1' className="method__container-texts-title">
          Entenda como a Fast Obras torna isso <strong>possível</strong>
        </Text>
        <Text as='p' className="method__container-texts-description">
          Com uma estratégia validada, e uma equipe super organizada, conseguimos garantir o melhor para a sua empresa
        </Text>
        <div className="method__container-texts-actions">
          <Button variant="dark" className="method__container-texts-action-button-contact" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            <TextReveal>Orçamento</TextReveal>
          </Button>
        </div>
      </article>
      <div className="method__container-grid">
          {
            items.map((item, i) => (
              <Card
                key={item.id + i}
                image={item.image}
                title={item.title}
                description={item.description}
                normas={item.normas}
                textButton={item.textButton}
                onButtonClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                variant={item.variant}
              />
            ))
          }
      </div>
    </div> 
  </MethodContainer>;
}
